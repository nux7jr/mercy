<template>
  <div class="cart">
    <h3>cart:</h3>
    <div v-show="allCart">
      <p>Список:</p>
      <!-- <div v-for="item in allCart" :key="id">
        {{ item.id }}
      </div> -->
      <div class="offer-order">
        <div class="offer-order__wrapper">
          <p class="offer-order__item">Выбранные места:</p>
          <div class="offer-order__item">
            <p v-for="item in allCart" :key="id">Место номер: {{ item.id }}</p>
          </div>
          <div class="offer-order__item">
            <p class="offer-order__price">
              Итого: от 2 000 руб.
            </p>
          </div>
          <button>оформить заказ</button>
        </div>
        <div class="price-info">
          <p class="price-info__item">стоимость размещения</p>
          <ul class="price-info__item price-info__list">
            <li>
              от 20 000р
            </li>
            <li>
              от 5 000р
            </li>
            <li>
              от 1 000р
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: "CartList",
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["allCart"]),
  },
  methods: {
  }
};
</script>

<style></style>
