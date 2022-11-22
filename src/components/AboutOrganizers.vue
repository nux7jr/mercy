<template>
  <div class="about-organizers">
    <h2 class="about-organizers__heading">Организаторы благотворительной акции</h2>
    <div class="about-organizers__wrapper">
      <div class="about-organizers__item organizer">
        <img class="organizer__img" src="@/assets/img/Kim.png" alt="">
        <h3 class="organizer__heading">Сергей Ким</h3>
        <p class="organizer__text">основатель Tiksan Group, соучредитель премии «Человек Года»
        </p>
      </div>
      <div class="about-organizers__item organizer">
        <img class="organizer__img" src="@/assets/img/Ylya.png" alt="">
        <h3 class="organizer__heading">Юлия чанчикова</h3>
        <p class="organizer__text">председатель оргкомитета «Человек Года», главный редактор, издатель журнала «Деловой квартал» в Красноярске</p>
      </div>
      <div class="about-organizers__item organizer">
        <img class="organizer__img" src="@/assets/img/Den.png" alt="">
        <h3 class="organizer__heading">Денис Амосов</h3>
        <p class="organizer__text">Идейный вдохновитель</p>
      </div>
    </div>
    <h1 class="about-organizers__text">Закончим 2022 год большим добрым делом!</h1>
    <a class="about-organizers__call" href="#buy-info">Хочу в книгу рекордов Гиннеса</a>
  </div>
</template>

<script>
export default {
  name: 'MercyMainAboutOrganizers',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.about-organizers {
  padding: 5px;
}
.about-organizers__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 20px;
}
.organizer__img {
  max-width: 300px;
}
.organizer__text {
  text-align: center;
  max-width: 300px;
}
.about-organizers__call, .about-organizers__text, .about-organizers__heading {
  display: block;
  text-align: center;
}
.about-organizers__heading {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #8DCCEC;
  text-underline-offset: 8px;
}
.about-organizers__call {
  width: 290px;
  padding: 10px;
  font-size: larger;
  margin:  0 auto;
  background: linear-gradient(118.3deg, #0AB9EE 7.91%, #8DCCEC 74.43%);
  border-radius: 14.7473px;
}
</style>