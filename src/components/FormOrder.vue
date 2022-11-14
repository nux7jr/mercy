<template>
  <div class="form-order">
    <h3 class="form-order__heading">Оформление заявки</h3>
    <small>* – Поля обязательны к заполнению.</small>
    <form action="" method="post">
      <div class="form-order__heading">
        <p>Место номер: </p>
      </div>
      <hr>
      <div class="from-order__wrapper">
        <div class="from-order__item">
          <label for="name">
            * Название компании
          </label>
          <input type="text" name="name" id="name">
        </div>
        <div class="from-order__item">
          <label for="link">
            * Ссылка на сайт комании
          </label>
          <input type="text" name="link" id="link">
        </div>
        <div class="from-order__item">
          <label for="phone">
            * Номер для связи
          </label>
          <input type="tel:" name="phone" id="phone">
        </div>
        <div class="from-order__item">
          <label for="email">
            * Email
          </label>
          <input type="email" name="email" id="email">
        </div>
        <div class="from-order__item">
          <label for="price">
            * Сумма пожертвования
          </label>
          <input type="number" name="price" id="price">
        </div>
        <div class="from-order__item">
          <label for="file">
            Размер не менее 120х120, не более 1200х1200. Логотип в черно-белом варианте. Формат jpeg, png, svg
          </label>
          <input type="file" name="file" id="file">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MercyMainFormOrder',

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
.from-order__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
}
</style>