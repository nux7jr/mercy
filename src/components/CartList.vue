<template>
  <div class="cart">
    <div v-show="allCart">
      <div class="offer-order">
        <p>Корзина:</p>
        <div class="offer-order__wrapper">
          <div
            class="offer-order__item__wrapper"
            v-for="item in allCart"
            :key="index"
          >
            <div class="offer-order__item">
              <div class="offer-order__info">
                <p>Выбранное место: {{ item.index }}</p>
                <div class="info__wrapper">
                  <p class="info__price">Цена: {{ item.price }}</p>
                  <p @click="fullReprimandCart()" class="delete">X</p>
                </div>
              </div>
            </div>
          </div>
          <div class="offer-order__item">
            <p class="offer-order__price-name">Итого:</p>
            <p class="offer-order__price">
              {{ cartTotalCost | toFix | formattedPrice }}
            </p>
          </div>
          <router-link
            v-show="allCart.length"
            transition
            name="fade"
            class="offer-order__link"
            to="/buy"
          >
            Оформить заказ
          </router-link>
        </div>
        <div class="price-info">
          <p class="price-info__item">стоимость размещения</p>
          <ul class="price-info__item price-info__list">
            <li>от 50 000р</li>
            <li>от 15 000р</li>
            <li>от 10 000р</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import toFix from "@/filters/toFix";
import formattedPrice from "@/filters/price-format";
export default {
  name: "CartList",
  data() {
    return {};
  },
  filters: {
    formattedPrice,
    toFix,
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["allCart"]),
    ...mapMutations(["fullReprimandCart"]),
    cartTotalCost() {
      let result = [];

      if (this.allCart.length) {
        for (let item of this.allCart) {
          result.push(item.price);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },

  methods: {},
};
</script>

<style>
.info__wrapper {
  display: flex;
  justify-content: space-between;
}
.info__price {
  margin: 0;
}
.delete {
  margin: 0;
  cursor: pointer;
}
.offer-order {
  background-color: #1c1c1c;
  padding: 20px;
  color: white;
  border-radius: 15px;
}
.offer-order__link {
  color: black;
  padding: 15px;
  background-color: #8dccec;
  border-radius: 15px;
  transition: background-color 0.2s;
}
.offer-order__link:hover {
  background-color: #6caecf;
}
.offer-order__link:visited {
  color: black;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
