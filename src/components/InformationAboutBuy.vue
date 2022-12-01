<template>
  <div id="about">
    <div class="information">
      <div class="goal">
        <h2 class="goal__heading">Цель проекта</h2>
        <p class="goal__text">
          это создание бизнес карты Красноярского края. Установить рекорд - 
          более 1000 логотипов на одном баннере. Попасть в Книгу рекордов России. 
        </p>
      </div>
      <div class="money-transfer">
        <h2 class="money-transfer__heading">Куда пойдут пожертвования</h2>
        <p class="money-transfer__text">
          Пожертвования пойдут в выбранный вами фонд из представленного списка
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
            Компания <strong>TIKSAN GROUP</strong> в рамках проекта <strong>«Человек Года»</strong> запускает акцию, результат которой – 
            объединить бизнес сообщество  Красноярского края.  
            На главном баннере города будут размещены <strong>1000 логотипов</strong>  компаний, которые примут участие в проекте.
          </p>
          <p>
            <strong>Цель</strong> – зафиксировать рекорд в книге рекордов  России, создать бизнес карту  и заявить о предпринимателях 
            Красноярска на федеральном уровне. Каждая организация-участник получит сертификат о попадании в <strong>Книгу Рекордов России,</strong>
            всероссийскую рекламную кампанию для своих предприятий, а также благодарность от фонда за помощь и поддержку.
          </p>
          <p>
            Масштабное событие России, в котором у <strong>каждого</strong> предпринимателя из Красноярска есть шанс принять участие!
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
