<template>
  <div class="home">
    <MercyMainImportantInfo />
    <MercyMainHeader />
    <MercyMainNews />
    <MercyMainFooter />
  </div>
</template>
<script>
import MercyMainImportantInfo from "@/components/ImportantInfo.vue";
import MercyMainHeader from "@/components/Header.vue";
import MercyMainFooter from "@/components/Footer.vue";
import MercyMainNews from "@/components/NewsList.vue";

export default {
  name: "HomeView",
  data() {
    return {
      timer: true,
    };
  },
  created() {},
  methods: {},
  components: {
    MercyMainHeader,
    MercyMainFooter,
    MercyMainImportantInfo,
    MercyMainNews,
  },
};
</script>
