<template>
  <div class="cart">
    <h2 class="cart__heading">Корзина</h2>
    <div class="cart__item">
      <div class="offer-order">
        <div class="offer-order__wrapper">
          <div class="offer-order__item__wrapper">
            <div class="offer-order__item">
              <div class="offer-order__info">
                <p class="offer-order__place">
                  Выбранное место: <strong>{{ allCart.id }}</strong>
                </p>
                <div class="info__wrapper">
                  <p class="info__price">Сумма: {{ allCart.price }}</p>
                  <p @click="fullReprimandCart()" class="delete">×</p>
                </div>
              </div>
            </div>
          </div>
          <transition name="fade">
            <router-link
              v-show="allCart.price"
              class="offer-order__link"
              to="/buy"
            >
              Пожертвовать
            </router-link>
          </transition>
        </div>
        <div class="price-info">
          <!-- <p class="price-info__item">стоимость размещения</p> -->
          <ul class="price-info__item price-info__list">
            <li>
              <img
                class="price-info__img"
                src="@/assets/img/10.png"
                alt="информация о покупке"
              />
              от 10 000р
            </li>
            <li>
              <img
                class="price-info__img"
                src="@/assets/img/25.png"
                alt="информация о покупке"
              />от 25 000р
            </li>
            <li>
              <img
                class="price-info__img"
                src="@/assets/img/50.png"
                alt="информация о покупке"
              />от 50 000р
            </li>
          </ul>
        </div>
        <div class="availability-info">
          <div class="availability-info__item">
            &#9679;
            <h3 class="availability-info__heading">- место свободно</h3>
          </div>
          <div class="availability-info__item">
            ×
            <h3 class="availability-info__heading">- место занято</h3>
          </div>
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
.cart {
  min-width: 400px;
}
.info__wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.info__price {
  margin: 0;
}
.delete {
  margin: 0;
  cursor: pointer;
  font-size: larger;
  font-weight: bolder;
}
.offer-order {
  background-color: var(--color-semimain);
  color: black;
  padding: 20px;
  border-radius: 15px;
}
.offer-order__link {
  display: block;
  font-weight: bolder;
  font-size: large;
  text-transform: uppercase;
  color: white;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: var(--color-orange);
  border-radius: 15px;
  transition: background-color 0.2s;
}
.offer-order__link:hover {
  background-color: var(--color-orange);
}
.offer-order__link:visited {
  color: white;
}
.price-info__img {
  width: 30px;
  height: 30px;
}
.price-info__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.price-info__list li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 10px;
}
.availability-info__item {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  gap: 5px;
}
.availability-info__img {
  width: 30px;
  height: 30px;
}
.availability-info__noAvalibleimg {
  width: 7px;
  height: 7px;
}
.availability-info__heading {
  margin: 0;
  line-height: 20px;
}
.offer-order__place {
  margin-top: 0;
}
.availability-info {
  margin-top: 25px;
}
.cart__heading {
  color: white;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media (max-width: 850px) {
  .cart {
    min-width: auto;
  }
}
</style>
