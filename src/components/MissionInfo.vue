<template>
  <div class="mission" id="mission">
    <div class="mission__img"></div>
    <div class="mission__info">
    <h2 class="mission__heading">Миссия Благотворительной акции</h2>
    <div class="mission__kim">
      <p>Компания Tiksan Group ставит перед собой всегда глобальные цели. И попадание в Книгу рекордов Гиннесса одна из них.</p>
      <p>Основная миссия проекта – создать бизнес-карту Красноярского края и показать на федеральном уровне каждого предпринимателя, который вносит огромный вклад в развитие города Красноярск.
        Мы даём возможность стать каждому из вас рекордсменом во всей Российской Федерации.</p>
        <div class="kim">
          <img class="kim__img" src="@/assets/img/kims.png" alt="Роспись">
          <img class="kim-info__img" src="@/assets/img/KimLogo.png" alt="Лого">
          <div class="kim__item kim-info">
            <p>Сергей Ким</p>
            <p>основатель Tiksan Group</p>
          </div>
        </div>
        <a class="kim__link" href="#">Больше о tiksan group</a>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'MercyMissionInfo',

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
.mission {
  display: flex;
  height: 517px;
}
.mission__img {
  width: 650px;
  height: 500px;
  z-index: -1;
  position: absolute;
  background-color: #00000099;
  background-image: url(@/assets/img/people.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.mission__info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.mission__heading {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #8DCCEC;
  text-underline-offset: 8px;
  padding: 10px;
}
.mission__kim {
  background-color: #8DCCEC;
  padding: 40px;
  width: 70%;
}
.kim {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  gap: 30px;
}
.kim__img {
  width: 30px;
  height: 20px;
}
.kim-info__img {
  width: 50px;
  height: 50px;
}
.kim__link {
  background-color: #5B5B5B;
  border-radius: 14px;
  padding: 10px;
}
@media (max-width: 850px) {
  .mission__kim {
    width: auto;
    padding: 10px;
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