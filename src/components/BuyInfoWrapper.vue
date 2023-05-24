<template>
  <div id="buy-info" class="buy-info">
    <h1 class="buy-info__heading">
      Участие в благотворительном проекте "СЕРДЦЕ БИЗНЕСА"
    </h1>
    <div class="buy-info__wrapper">
      <TicketList />
      <CartList />
    </div>
  </div>
</template>

<script>
import TicketList from "@/components/TicketList.vue";
import CartList from "@/components/CartList.vue";
export default {
  name: "MercyMainBuyInfoWrapper",
  components: {
    TicketList,
    CartList,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.buy-info {
  background: var(--color-main);
}
.buy-info__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 20px;
}
.buy-info__heading {
  font-size: 1.4rem;
  color: white;
  display: flex;
  margin: 0;
  padding: 20px;
  justify-content: center;
  text-transform: uppercase;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: var(--color-orange);
  text-underline-offset: 8px;
}
@media (min-width: 1199.98px) {
  .buy-info__heading {
    font-size: 2rem;
  }
}
</style>
