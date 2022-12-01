<template>
  <div class="ticket">
    <h2 class="ticket__heading">Карта баннера</h2>
    <div v-if="allProducts.length" class="ticket-map">
      <div class="product" v-for="(item, index) in allProducts" :key="index">
        <div class="availableGoods" @click="toggleDataCart(item)" v-if="item.available">
          <div class="cheapGoods availableItem" v-if="item.price == '10000'">
            &#9679;
          </div>
          <div class="averageGoods availableItem" v-else-if="item.price == '25000'">
            &#9679;
          </div>
          <div class="expensiveGoods availableItem" v-else-if="item.price == '50000'">
            &#9679;
          </div>
        </div>
        <div class="notAvailableGoods" v-else>
          <div class="cheapGoods itemNotAvailable" v-if="item.price == '10000'">
            <div class="product-booked__info">
              <div class="product__index">Номер: {{ item.index }}</div>
              <p class="product-booked__heading">
                Это место занято
                <img
                  class="product-booked__img"
                  :src="`${item.logo}`"
                  alt="logo"
                />
              </p>
            </div>
            х
          </div>
          <div class="averageGoods itemNotAvailable" v-else-if="item.price == '25000'">
            <div class="product-booked__info">
              <div class="product__index">Номер: {{ item.index }}</div>
              <p class="product-booked__heading">
                Это место занято
                <img
                  class="product-booked__img"
                  :src="`${item.logo}`"
                  alt="logo"
                />
              </p>
            </div>
            х
          </div>
          <div class="expensiveGoods itemNotAvailable" v-else-if="item.price == '50000'">
            <div class="product-booked__info">
              <div class="product__index">Номер: {{ item.index }}</div>
              <p class="product-booked__heading">
                Это место занято
                <img
                  class="product-booked__img"
                  :src="`${item.logo}`"
                  alt="logo"
                />
              </p>
            </div>
            х
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
.ticket__heading {
  text-align: center;
  color: white;
}
.ticket-map {

  padding: 10px;
  border-radius: 15px;
  background-color: white;
  color: white;
  cursor: pointer;
}
.itemNotAvailable {
  position: relative;
}
.itemNotAvailable:hover > .product-booked__info {
  display: block;
  animation: showBlock 0.7s linear forwards;
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
.product-booked__img {
  width: 100%;
  height: 100px;
  display: block;
  margin: 0 auto;
  object-fit: contain;
}
.product-booked {
  position: relative;
}
.ticket-map__error {
  color: rgb(255, 255, 255);
}
.cheapGoods {
  background-color: rgb(254, 254, 254);
}
.averageGoods {
  background-color: rgb(130, 144, 157);
}
.expensiveGoods {
  background-color: rgb(109, 165, 213);
}
.itemNotAvailable {
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.itemNotAvailable {
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 21px;
  width: 21px;
}
.availableItem {
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 21px;
  width: 21px;
}

@media (max-width: 1199.98px) {

  .ticket-map {
    overflow: scroll;
    width: 300px;
    height: 400px;
    padding: 0;
  }
  .ticket-map::-webkit-scrollbar {
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
