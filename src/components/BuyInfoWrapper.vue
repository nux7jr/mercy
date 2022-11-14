<template>
  <div class="buy-info">
    <h3 class="buy-info__heading">Участие в благотворительной акции-рекорде</h3>
    <div class="buy-info__wrapper">
      <TicketList/>
      <CartList />
    </div>
  </div>
</template>

<script>
import TicketList from "@/components/TicketList.vue";
import CartList from "@/components/CartList.vue";
export default {
  name: 'MercyMainBuyInfoWrapper',
  components: {
    TicketList, CartList
  },
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
.buy-info {
  background: linear-gradient(180deg, #5B5B5B 0%, #383838 100%);
}
.buy-info__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.buy-info__heading {
  color: white;
  margin-top: 0;
}
</style>