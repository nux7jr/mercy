<template>
  <div class="home">
    <MercyMainImportantInfo />
    <MercyMainHeader />
    <MercyMainInformationAboutBuy />
    <MercyMainBuyInfoWrapper />
    <MercyMainFaqInfo />
    <MercyMainPartnersList />
  </div>
</template>

<script>
import MercyMainBuyInfoWrapper from "@/components/BuyInfoWrapper.vue";
import MercyMainImportantInfo from "@/components/ImportantInfo.vue";
import MercyMainHeader from "@/components/Header.vue";
import MercyMainInformationAboutBuy from "@/components/InformationAboutBuy.vue";
import MercyMainFaqInfo from "@/components/FaqInfo.vue";
import MercyMainPartnersList from "@/components/PartnersList.vue";
export default {
  name: "HomeView",
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    MercyMainBuyInfoWrapper,
    MercyMainImportantInfo,
    MercyMainHeader,
    MercyMainFaqInfo,
    MercyMainInformationAboutBuy,
    MercyMainPartnersList,
  },
};
</script>
