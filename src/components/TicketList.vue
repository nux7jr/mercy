<template>
  <div class="ticket">
    <div class="ticket-map">
      <div
      @click="toggleDataCart(data)"
      class="ticket-map__item"
      v-for="data in allProducts"
      :key="data.id"
    >
      <div class="ticket-map__wrapper">
        {{ data.id }}
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex"
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
    ...mapActions(["getProducts"]),
    ...mapMutations([
      'toggleDataCart',
    ]),
  },
};
</script>

<style>
.ticket-map {
  max-width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 3px;
}
.ticket {
  padding: 10px;
  border-radius: 15px;
  background-color: var(--color-blue);
  color: white;
}
.ticket-map__wrapper {
  padding: 10px;
  border-radius: 15px;
  background-color: black;
  color: white;
  cursor: pointer;
}

</style>
