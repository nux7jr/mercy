<template>
  <div class="ticket">
    <div v-if="allProducts.length" class="ticket-map">
      <div class="ticket-map__item" v-for="data in allProducts" :key="data.id">
        <div v-if="allProducts.length" class="ticket-map__wrapper">
          <div
            @click="toggleDataCart(data)"
            v-if="data.available"
            class="product"
          >
            <div class="product__info">
              <div class="product__index">Номер: {{ data.index }}</div>
              <p class="product__heading">Это место свободно</p>
            </div>
            <div class="product__id">
              <img src="@/assets/img/Ellipse.svg" alt="Ellipse" />
            </div>
          </div>
          <div v-else class="product-booked">
            <div class="product-booked__info">
              <div class="product__index">Номер: {{ data.index }}</div>
              <p class="product-booked__heading">
                Это место занято
                <img
                  class="product-booked__img"
                  :src="`${data.logo}`"
                  alt="logo"
                />
              </p>
            </div>
            <div class="product__id">
              <img src="@/assets/img/NotElipse.svg" alt="Ellipse" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="ticket-map__error">Извините, произошла обишка</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "TicketList",
  components: {},
  computed: mapGetters(["allProducts"]),
  async mounted() {
    await this.getProducts();
  },
  methods: {
    ...mapActions(["getProducts"]),
    ...mapMutations(["toggleDataCart"]),
  },
};
</script>

<style>
.ticket-map {
  display: grid;
  grid-template-columns: repeat(40, 1fr);
  align-items: center;
  gap: 3px;

  grid-auto-rows: 29px;
}
.product__index {
  display: block;
  font-size: 15px;
  text-align: center;
  color: white;
}
.product-booked__heading {
  text-align: center;
  margin: 0;
  font-size: 15px;
  color: rgb(255, 255, 255);
}
.product__heading {
  text-align: center;
  margin: 0;
  color: rgb(255, 255, 255);
}
.ticket {
  min-height: 750px;
  min-width: 700px;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
  background-image: url(@/assets/img/bgProduct.png);
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
}
.ticket-map__wrapper {
  padding: 2px;
  border-radius: 10px;
  background-color: transparent;
  color: rgb(0, 0, 0);
  cursor: pointer;
}
.product {
  position: relative;
}
.product:hover > .product__info {
  display: block;
  animation: showBlock 0.7s linear forwards;
}
.product__info {
  display: none;
  position: absolute;
  top: -150px;
  left: -70px;
  width: 150px;
  height: 145px;
  background-color: #5b5b5b;
  border-radius: 10px;
  object-fit: contain;
}
.product-booked__info {
  display: none;
  position: absolute;
  top: -150px;
  left: -70px;
  width: 150px;
  height: 145px;
  background-color: #5b5b5b;
  border-radius: 10px;
}
.product-booked:hover > .product-booked__info {
  display: block;
  animation: showBlock 0.7s linear forwards;
}
.product-booked__img {
  width: 90%;
  height: 100px;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  object-fit: contain;
  border-radius: 15px;
}
.product-booked {
  position: relative;
}
.ticket-map__error {
  color: black;
}
@media (max-width: 1199.98px) {
  .ticket {
    display: none;
  }
}
@keyframes showBlock {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
