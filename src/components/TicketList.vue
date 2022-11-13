<template>
  <div class="ticket-map">
    <div
      @click="updateCart(data, $event)"
      class="ticket-map-item"
      v-for="data in allProducts"
      :key="data.id"
    >
      <div class="ticket">
        {{ data.id }}
        ||
        {{ data.title }}
      </div>
    </div>

    <!-- <div v-for="item in getProducts">

    </div> -->

    <p>Info about card X (component!)</p>
    <button>buy (open cart popUp!)</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "TicketList",
  components: {},
  computed: mapGetters(["allProducts"]),
  async mounted() {
    // this.$store.dispatch("getProducts");
    // new data from vuex!
    await this.getProducts();
  },
  methods: {
    updateCart(data, event) {
      // console.log(event, "event");
      console.log(data);
      console.log("пушим через vuex изменения в store.cart");
    },
    ...mapActions(["getProducts"]),
  },
};
</script>

<style>
.ticket-map {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.ticket {
  width: 150px;
  height: 20px;
  background-color: blueviolet;
  color: white;
}
</style>
