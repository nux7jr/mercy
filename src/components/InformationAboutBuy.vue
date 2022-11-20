<template>
  <div id="about">
    <div class="information">
      <div class="goal">
        <h3 class="goal__heading">Цель акции</h3>
        <p class="goal__text">
          Эта акция-благотворительность, цель которой побить рекорд Гиннеса -
          больше 1000 логотипов на одном баннере. Вы покупаете размещение
          логотипа своей компании на баннере, жертвуя деньги на
          благотворительность.
        </p>
      </div>
      <div class="money-transfer">
        <h3 class="money-transfer__heading">Куда пойдут пожертвования</h3>
        <p class="money-transfer__text">
          Все пожертвования пойдут в фонд “НАЗВАНИЕ ФОНДА”. Баннер будет
          распечатан и презентован на ежегодной деловой премии Человек года 2022
          а рекорд будет зафиксирован сотрудниками Гиннеса. Все
          компании-участники акции будут упомянуты в информационных источниках
          Tiksan Group и СМИ Красноярского края.
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
// info
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
