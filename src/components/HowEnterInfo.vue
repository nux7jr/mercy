<template>
  <div class="enter">
    <h2 class="enter__heading">Как войти в книгу рекордов Гиннесса России?</h2>
    <div class="enter-info">
      <div class="enter-info__item">
        <img class="enter-info__img" src="@/assets/img/click.png" alt="Выбор места размещения логотипа">
        <h2 class="enter-info__heading">Выбор места размещения логотипа</h2>
        <p class="enter-info__text">
          Нажмите на “ <img class="enter-info__svg" src="@/assets/img/Ellipse.svg" alt=""> “, чтобы выбрать место размещения логотипа на баннере и сверьтесь с формой справа от баннера, что все правильно. 
        </p>
      </div>
      <div class="enter-info__item">
        <img class="enter-info__img" src="@/assets/img/save-money.png" alt="Ввод суммы пожертвования">
        <h3 class="enter-info__heading">Ввод суммы пожертвования</h3>
        <p class="enter-info__text">
          Вы можете ввести любую сумму, начиная от цифры закрепленной за ячейкой определенного цвета.
        </p>
      </div>
      <div class="enter-info__item">
        <img class="enter-info__img" src="@/assets/img/notebook.png" alt="Заполнение формы заявки и оплата">
        <h3 class="enter-info__heading">Заполнение формы заявки и оплата</h3>
        <p class="enter-info__text">
          Заполните все поля и прикрепите логотип по требованиям. Если что-то пойдет не так, свяжитесь с нами по номеру - 8 (800) 800-80-80
        </p>
      </div>
      <div class="enter-info__item">
        <img class="enter-info__img" src="@/assets/img/award.png" alt="Фиксация рекорда на премии Человек года 2022">
        <h3 class="enter-info__heading">Фиксация рекорда на премии Человек года 2022</h3>
        <p class="enter-info__text">
          Фиксировать реккорд приедет сотрудник Книги Гиннеса России из Москвы. Позже вы получите сертификат о попадании своей компании в Книгу Рекордов.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MercyHowEnterInfo',

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
.enter {
  background-color: white;
  color: #5B5B5B;
}
.enter-info__img {
  max-width: 140px;
  max-height: 140px;
}
.enter__heading {
  text-align: center;
  padding: 15px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #8DCCEC;
  text-underline-offset: 8px;
}
.enter-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}
.enter-info__svg {
  width: 7.71px;
  height: 7.71px; 
}
.enter-info__item {
  max-width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>