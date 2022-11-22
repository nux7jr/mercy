<template>
  <div id="about">
    <div class="information">
      <div class="goal">
        <h2 class="goal__heading">Цель акции</h2>
        <p class="goal__text">
          Эта акция-благотворительность, цель которой побить рекорд Гиннеса -
          больше 1000 логотипов на одном баннере. Вы покупаете размещение
          логотипа своей компании на баннере, жертвуя деньги на
          благотворительность.
        </p>
      </div>
      <div class="money-transfer">
        <h2 class="money-transfer__heading">Куда пойдут пожертвования</h2>
        <p class="money-transfer__text">
          Все пожертвования пойдут в фонд “НАЗВАНИЕ ФОНДА”. Баннер будет
          распечатан и презентован на ежегодной деловой премии Человек года 2022
          а рекорд будет зафиксирован сотрудниками Гиннеса. Все
          компании-участники акции будут упомянуты в информационных источниках
          Tiksan Group и СМИ Красноярского края.
        </p>
      </div>
      <div class="about">
        <h2 class="about__heading">О проекте</h2>
        <div class="about__text">
          <h3>Компании из Красноярска устанавливают рекорд Гиннесса! </h3>
          <p>
            1000 компаний из Красноярска получат сертификат о попадании 
            в Книгу Рекордов Гиннесса в России.
          </p>
          <p>
            Компания <strong>TIKSAN GROUP</strong> в 
            рамках премии <strong>«Человек Года»</strong> запускает акцию - создание бизнес 
            карты Красноярского края. Таким образом, мы рассказываем на 
            федеральном уровне про людей, которые вносят вклад в развитие 
            города Красноярск. 
          </p>
          <p>
            Все организации, которые примут участие в 
          акции, попадут на главный баннер города, где будут размещены их 
          логотипы. Получат <strong>сертификат о попадании в Книгу Рекордов Гиннесса 
            России,</strong> всероссийскую рекламную кампанию для своих предприятий, а 
          также благодарность от фонда за помощь и поддержку.
          </p>
          <p>
            Стоимость участия от 10 000 рублей. <strong>Все денежные средства пойдут 
              на добрые дела в выбранные Фонды самих организаций-участников.</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MercyMainInformationAboutBuy",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
#about {
  background-color: #EFEFEF;
}
.information {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  text-align: center;
}
.goal,
.money-transfer {
  width: 50%;
}
.goal {
  background-color: var(--color-light-blue);
}
.money-transfer {
  background-color: var(--color-light-gray);
}
.money-transfer__text,
.goal__text {
  padding: 25px;
}
.about__text {
  text-align: center;
  max-width: 800px;
  padding: 5px;
}
.about__heading {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #8DCCEC;
  text-underline-offset: 8px;
}
@media (max-width: 850px) {
  .information {
    flex-direction: column;
  }
  .goal,
  .money-transfer {
    width: auto;
  }
  .money-transfer__text,
  .goal__text {
    padding: 5px;
  }
}
// media
// возможно удалить!
@media (max-width: 850px) {
  .information {
    flex-direction: column;
  }
  .goal,
  .money-transfer {
    width: auto;
  }
  .money-transfer__text,
  .goal__text {
    padding: 5px;
  }
}

@media (min-width: 991.98px) {
}
@media (min-width: 1199.98px) {
}
</style>
