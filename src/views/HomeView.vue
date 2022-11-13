<template>
  <div class="home">
    <h3>Home</h3>
    <TicketList />
    <CartList />
  </div>
</template>

<script>
import TicketList from "@/components/TicketList.vue";
import CartList from "@/components/CartList.vue";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    TicketList,
    CartList,
  },
};
</script>
