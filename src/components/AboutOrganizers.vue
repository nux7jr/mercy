<template>
  <div class="about-organizers" id="organizers">
    <h1 class="about-organizers__heading">
      ЛИЦА БЛАГОТВОРИТЕЛЬНОГО ПРОЕКТА «СЕРДЦЕ БИЗНЕСА»
    </h1>
    <div class="about-organizers__wrapper">
      <div class="about-organizers__item organizer">
        <img class="organizer__img" src="@/assets/img/kimss.jpg" alt="" />
        <h3 class="organizer__heading">Сергей Ким</h3>
        <p class="organizer__text">
          Руководитель международной группы компаний TIKSAN GROUP, организатор
          проекта
        </p>
      </div>
      <div class="about-organizers__item organizer">
        <img class="organizer__img" src="@/assets/img/Ylya.png" alt="" />
        <h3 class="organizer__heading">Юлия Чанчикова</h3>
        <p class="organizer__text">
          Главный редактор, издатель журнала «Деловой квартал» в Красноярске,
          информационный партнер проекта
        </p>
      </div>
    </div>
    <h1 class="about-organizers__text">Информационные партнеры проекта:</h1>
    <a
      class="partners__heading"
      href="https://krasnoyarsk.dk.ru/"
      target="_blank"
      rel="noopener noreferrer"
      >Журнал «Деловой квартал» в Красноярске</a
    >
    <a
      class="partners__heading"
      href="https://t.me/tvknew"
      target="_blank"
      rel="noopener noreferrer"
      >Телеканал ТВК</a
    >
    <!-- <h1 class="about-organizers__text">
      Информационный партнёр благотворительного проекта «СЕРДЦЕ БИЗНЕСА»
      телеканал
      <a href="https://t.me/tvknew" target="_blank" rel="noopener noreferrer"
        >ТВК</a
      >
    </h1> -->

    <a class="about-organizers__call" href="#buy-info">Хочу в книгу рекордов</a>
    <!-- <p class="part">
      Информационный партнёр благотворительного проекта «СЕРДЦЕ БИЗНЕСА»
      телеканал
      <a href="https://t.me/tvknew" target="_blank" rel="noopener noreferrer"
        >ТВК</a
      >
    </p> -->
  </div>
</template>

<script>
export default {
  name: "MercyMainAboutOrganizers",

  data() {
    return {};
  },

  mounted() {},
  components: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.about-organizers {
  padding: 5px;
  padding-bottom: 30px;
}
.about-organizers__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 20px;
}
.organizer__img--back {
  max-width: 300px;
  min-height: 416px;
}
.organizer__img {
  max-width: 291px;
  min-height: 440px;
}
.organizer__text {
  text-align: center;
  max-width: 300px;
}
.about-organizers__call,
.about-organizers__text,
.about-organizers__heading {
  display: block;
  text-align: center;
}
.about-organizers__heading {
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
  padding: 2rem;
  color: #5b5b5b;
  font-style: normal;
  font-weight: 800;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: var(--color-orange);
  text-underline-offset: 8px;
}
.about-organizers__text {
  margin-bottom: 5px;
}
.about-organizers__call {
  text-transform: uppercase;
  width: 290px;
  padding: 10px;
  font-weight: bold;
  font-size: larger;
  margin: 0 auto;
  background: var(--color-orange);
  color: white;
  border-radius: 14.7473px;

  margin-top: 20px;
}

@media (min-width: 1199.98px) {
  .about-organizers__heading {
    font-size: 2rem;
  }
}
.partners__heading {
  display: block;
  margin: 5px auto;
  text-align: center;
  color: black;
  width: fit-content;
  text-decoration: underline;
}
.about-organizers__text a {
  text-align: center;
  color: black;
  text-decoration: underline;
}
</style>
