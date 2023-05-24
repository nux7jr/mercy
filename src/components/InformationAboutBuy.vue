<template>
  <div id="about">
    <div class="information">
      <div class="goal">
        <h2 class="goal__heading">Цель проекта</h2>
        <p class="goal__text">
          Объединить 1 000 людей из Красноярского края. Минимальное участие на
          благотворительный взнос - 10 тыс. рублей. На эти деньги практически
          невозможно что-то сделать. Но когда свои усилия объединят жители края,
          это будет мощный источник силы, который сможет очень многое. По нашим
          прогнозам, проект сможет собрать несколько десятков миллионов рублей.
          А на эти деньги можно сделать немало добрых дел.
        </p>
      </div>
      <div class="money-transfer">
        <h2 class="money-transfer__heading">Куда пойдут пожертвования</h2>
        <p class="money-transfer__text">
          Пожертвования пойдут в выбранный вами фонд из представленного списка:
          <a class="money-transfer__text-bold" href="#partners">СПИСОК НКО.</a>
          Мы вместе поможем сиротам, малоимущим гражданам, поисковой бригаде
          пропавших людей, женщинам, подвергшимся домашним насилием, людям с
          ограниченными возможностями, с особенностями развития и
          онкологическими заболеваниями, а также бездомным животным.
        </p>
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
  background-color: #efefef;
}
.about {
  flex-grow: 2;
}
.about__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 2;
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
  background-color: #dfd0b8;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}
.money-transfer {
  background-color: #fb9d92;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}
.goal__heading {
  font-size: xx-large;
  text-transform: uppercase;
}
.money-transfer__heading {
  font-size: xx-large;
  text-align: center;
  text-transform: uppercase;
}
.money-transfer__text,
.goal__text {
  padding: 25px;
  max-width: 500px;
}
.money-transfer__text-bold {
  font-weight: 800;
  color: black;
}
.about__text {
  text-align: left;
  padding: 5px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 0px;
}
.about__text h3 {
  font-size: xx-large;
}
.about__heading {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #8dccec;
  text-underline-offset: 8px;
  margin-bottom: 35px;
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
.about__img {
  display: none;
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
  .about__img {
    display: block;
  }
  .about__text {
    max-width: 600px;
  }
}
</style>
