<template>
  <div class="home">
    <MercyMainImportantInfo />
    <MercyMainHeader />
    <MercyMainInformationAboutBuy />
    <MercyHowEnterInfo />
    <MercyMainBuyInfoWrapper />
    <MercyMissionInfo />
    <MercyMainFaqInfo />
    <MercyMainPartnersList />
    <MercyMainAboutOrganizers />
    <MercyMainFooter />
  </div>
</template>

<script>
import MercyMainBuyInfoWrapper from "@/components/BuyInfoWrapper.vue";
import MercyMainImportantInfo from "@/components/ImportantInfo.vue";
import MercyMainHeader from "@/components/Header.vue";
import MercyMainInformationAboutBuy from "@/components/InformationAboutBuy.vue";
import MercyMainFaqInfo from "@/components/FaqInfo.vue";
import MercyMainPartnersList from "@/components/PartnersList.vue";
import MercyMainAboutOrganizers from "@/components/AboutOrganizers.vue";
import MercyMainFooter from "@/components/Footer.vue";
import MercyHowEnterInfo from "@/components/HowEnterInfo.vue";
import MercyMissionInfo from "@/components/MissionInfo.vue";
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
    MercyHowEnterInfo,
    MercyMissionInfo,
    MercyMainFaqInfo,
    MercyMainInformationAboutBuy,
    MercyMainPartnersList,
    MercyMainAboutOrganizers,
    MercyMainFooter,
  },
};
</script>
