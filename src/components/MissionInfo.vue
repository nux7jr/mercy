<template>
  <div class="mission" id="mission">
    <div class="mission__img"></div>
    <div class="mission__info">
      <h1 class="mission__heading">Миссия Благотворительного проекта</h1>
      <div class="mission__kim">
        <h3 class="mission__text">
          “Мы сделали так, чтобы весь процесс прошел максимально прозрачно и
          открыто.
        </h3>
        <p class="mission__text">
          Рекорд будет зафиксирован официально по всем нормам и правилам.
          Надеемся, что этот проект станет системным. Один раз оказать помощь —
          это уже хорошо. Но делать это регулярно и в составе большого
          количества людей — совсем другой уровень. Время покажет, насколько
          ценным окажется сам проект, и какой уровень пользы он сможет
          принести.”
        </p>
        <div class="kim">
          <img class="kim-info__img" src="@/assets/img/KimEv.png" alt="Лого" />
          <div class="kim__item kim-info">
            <p><strong>Сергей Ким</strong></p>
            <p>основатель TIKSAN GROUP</p>
          </div>
        </div>
        <a class="kim__link" href="https://tiksan.ru/" target="_blank"
          >Больше о TIKSAN GROUP</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MercyMissionInfo",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.mission {
  display: flex;
  height: 660px;
}
.mission__img {
  width: 650px;
  height: 650px;
  z-index: -1;
  position: absolute;
  background-color: #00000099;
  background-image: url(@/assets/img/bgMission.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.mission__info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
}
.mission__heading {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: var(--color-orange);
  text-underline-offset: 8px;
  padding: 10px;
}
.mission__text {
  text-align: left;
  margin-right: 150px;
}
.mission__kim {
  background-color: var(--color-semimain);
  padding: 40px;
  width: 70%;
}
.kim {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 30px;
  margin-bottom: 20px;
}
.kim__img {
  width: 50px;
  height: 40px;
}
.kim-info__img {
  width: 70px;
  height: 70px;
}
.kim__link {
  background-color: var(--color-main);
  border-radius: 14px;
  padding: 10px;
  font-size: larger;
  font-weight: bold;
}
@media (max-width: 850px) {
  .mission__kim {
    width: auto;
    padding: 10px;
  }
  .mission__text {
    text-align: left;
    margin-right: 0;
  }
  .mission__img {
    display: none;
  }
  .kim__link {
    display: block;
    margin: 0 auto;
  }
}
</style>
