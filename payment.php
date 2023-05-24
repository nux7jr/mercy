<?php
header('Content-Type:text/html; charset=UTF-8');
$mrh_login = "";
$mrh_pass1 = "";

//Включенные фонды названия которых приходят с клиента
$programmsArr = [ //'От сердца к сердцу' => ['login' => '', 'password' => ''],
                  'Живое дыхание' => ['login' => 'blagomaz', 'password' => 'cvA3SmmDcY8JA1bb35Sb'],
                  'Поиск пропавших людей' => ['login' => 'PPD2022', 'password' => 'qx0Z7ZmHHBZ2YG0YLNS8'],
                  'Вместе против рака' => ['login' => '', 'password' => 'YY1FrvWO74ypAFpul0T1'],
                  'Даша Здаевская' => ['login' => '', 'password' => '', 'individual' => true],
                  'Шаг за шагом к мечте' => ['login' => 'invakrsk', 'password' => 'Y6iPQ3lRDt5Xlbrlv8i8'],
                  'Дом матери' => ['login' => 'Dommateri', 'password' => 'MkaRBpF9mC55T2sXoS4X']];


// $inv_id = 678678;
$inv_desc = "TEST";
// $IsTest = 1;
$inv_id = $_POST['index'];
$title = $_POST['name'];
$link = $_POST['link'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$out_summ = $_POST['out_sum'];
$nameProgramm = $_POST['nameProgramm']; // тут название фонда(подставляй его)
// 

//Польовательские поля которые потом передадутся из robokassa в success or failure
$Shp_index = $inv_id;
$Shp_name_img = $_POST['nameImg'];
//
$parsedInt = intval($out_summ);
if ($parsedInt < 10000) {
      die();
}

//если фонд не подключен - прекращаем скрипт
if (!isEnabledFond($nameProgramm, $programmsArr)) {
      die();
}
//проверяем на физ. лицо если да, то редиректим
if ($programmsArr[$nameProgramm]['individual'] === true){

      header("Location: https://tiksan-record.ru/");
      die();

}

//устанавливаем значения login, password фонда для формирования хэш-суммы
setLogPass($programmsArr[$nameProgramm],$mrh_login, $mrh_pass1);

function setLogPass($metaData, &$mrh_login, &$mrh_pass1): void{

      $mrh_login = $metaData['login'];
      $mrh_pass1 = $metaData['password'];

}

//проверяем есть ли фонд среди подключенных
function isEnabledFond($nameProgramm, $programmsArr){

      return array_key_exists($nameProgramm, $programmsArr) ? true : false;

}

//формируем хеш-сумму
$crc = md5("$mrh_login:$out_summ:$inv_id:$mrh_pass1:Shp_index=$Shp_index:Shp_name_img=$Shp_name_img"); ?>

<html>

<head>
      <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<div class="payment">

      <h3 class="payment-heading">Вы хотите пожертвовать фонду "<?= $nameProgramm ?>" <?= $out_summ ?> р?</h3>
      <form class="payment-form" action='https://auth.robokassa.ru/Merchant/Index.aspx' method="POST">
            <input type=hidden name=MerchantLogin value="<?= $mrh_login ?>">
            <input type=hidden name=OutSum value="<?= $out_summ ?>">
            <input type=hidden name=InvId value="<?= $inv_id ?>">
            <input type=hidden name=Description value="<?= $inv_desc ?>">
            <input type=hidden name=SignatureValue value="<?= $crc ?>">

            <!-- это необязательные поля -->
            <input type=hidden name=title value="<?= $title ?>">
            <input type=hidden name=phone value="<?= $phone ?>">
            <input type=hidden name=email value="<?= $email ?>">
            <input type=hidden name=nameProgramm value="<?= $nameProgramm ?>">
            <input type=hidden name=Shp_index value="<?= $Shp_index ?>">
            <input type=hidden name=Shp_name_img value="<?= $Shp_name_img ?>">

            <input class="def-button" type=submit value='Да'>
            <!-- <input class="def-button" type="button" onclick="history.back();" value="Назад" /> -->
            <a class="def-button" href=" https://tiksan-record.ru/">На главную</a>
      </form>

      <div>
      </div>

</div>

<style>
      body {
            margin: 0;
            padding: 0;
            font-family: Tahoma, Geneva, sans-serif;
      }

      .payment {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 5px;
            min-height: 100vh;
      }

      .payment-heading {
            text-align: center;
            font-weight: 400;
      }

      .def-button {
            display: flex;
            justify-content: center;

            background: linear-gradient(118.3deg, #0ab9ee 7.91%, #8dccec 74.43%);
            border-radius: 14px;
            min-width: 200px;

            padding: 8px;
            border-width: 0;
            border-color: transparent;
            margin: 0 auto;
            margin-top: 20px;
            margin-bottom: 20px;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            text-decoration: none;
      }
</style>

</html>