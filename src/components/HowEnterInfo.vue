<template>
  <div class="enter">
    <div class="about">
      <img
        class="about__img"
        src="@/assets/img/newImg.png"
        alt="abuot project"
      />
      <div class="about__wrapper">
        <div class="about__text">
          <h1 class="about__heading">О проекте</h1>
          <h2>Бизнес — это конкретные достижения, а не ощущения.</h2>
          <p>
            Команда сильнейших специалистов провела глубокий анализ, оценила
            возможности, риски и решила поставить рекорд России в добрых делах.
            Объединить 1000 людей Красноярского края и РФ, сделать прорыв в
            первом благотворительном проекте такого масштаба на федеральном
            уровне.
          </p>
          <p>
            Идея проекта "СЕРДЦЕ БИЗНЕСА" очень проста, но максимально
            эффективна. Мы подготовили платформу, которая позволит каждому из
            нас совсем не большими усилиями сделать большое и благородное дело.
            На главном баннере города будут размещены 1000 логотипов компании,
            которые примут участие в проекте. Каждый участник получит сертификат
            о попадании в Книгу Рекордов России, всероссийскую рекламную
            кампанию, а также благодарность от фонда за помощь и поддержку.
          </p>
          <h3>
            Масштабное событие России, в котором у каждого есть шанс принять
            участие!
          </h3>
        </div>
      </div>
    </div>

    <h1 class="enter__heading">Как войти в книгу рекордов России?</h1>
    <div class="enter-info">
      <div class="enter-info__item">
        <img
          class="enter-info__img"
          src="@/assets/img/go1.png"
          alt="Выбор места размещения логотипа"
        />
        <h3 class="enter-info__heading">Выбор места размещения логотипа</h3>
        <p class="enter-info__text">
          Нажмите на “
          <img class="enter-info__svg" src="@/assets/img/Ellipse.svg" alt="" />
          “, чтобы выбрать место размещения логотипа на баннере и сверьтесь с
          формой справа от баннера, что все правильно.
        </p>
      </div>
      <div class="enter-info__item">
        <img
          class="enter-info__img"
          src="@/assets/img/go2.png"
          alt="Ввод суммы пожертвования"
        />
        <h3 class="enter-info__heading">Ввод суммы пожертвования</h3>
        <p class="enter-info__text">
          Вы можете ввести любую сумму, начиная от цифры закрепленной за ячейкой
          определенного цвета.
        </p>
      </div>
      <div class="enter-info__item">
        <img
          class="enter-info__img"
          src="@/assets/img/go3.png"
          alt="Заполнение формы заявки и оплата"
        />
        <h3 class="enter-info__heading">Заполнение формы заявки и оплата</h3>
        <p class="enter-info__text">
          Заполните все поля и прикрепите логотип по требованиям.
        </p>
      </div>
      <div class="enter-info__item">
        <img
          class="enter-info__img"
          src="@/assets/img/go4.png"
          alt="Фиксация рекорда на премии Человек года 2022"
        />
        <h3 class="enter-info__heading">Старт рекорда в феврале 2023 года</h3>
        <p class="enter-info__text">
          Фиксировать рекорд приедет сотрудник Книги рекордов России из Москвы.
          Позже вы получите сертификат о попадании в Книгу Рекордов России.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MercyHowEnterInfo",

  data() {
    return {
      visible: false,
    };
  },

  mounted() {},
  components: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.about__img {
  display: none;
}
.enter {
  background-color: #fff9f3;
  color: #2f2929;
  padding-bottom: 30px;
}
.enter-info__img {
  max-width: 140px;
  max-height: 140px;
}
.enter__heading {
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  padding: 15px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: var(--color-orange);
  text-underline-offset: 8px;
}
.enter-info__svg {
  width: 7.71px;
  height: 7.71px;
}
.enter-info__item {
  max-width: 270px;
  display: flex;
  flex-direction: column;
}
.enter-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.about {
  display: flex;
  background-color: var(--color-semimain);
}
.about__img {
  width: 40%;
}
.about__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}
.about__text {
  text-align: left;
  padding: 5px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 0px;
}
.about__text h3 {
  font-size: xx-large;
}
.about__heading {
  text-transform: uppercase;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: white;
  text-underline-offset: 8px;
  margin-bottom: 35px;
}

@media (min-width: 1199.98px) {
  .about__heading {
    font-size: xx-large;
  }
  .enter__heading {
    font-size: 2rem;
  }
  .about__img {
    display: block;
  }
  .about__wrapper {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
