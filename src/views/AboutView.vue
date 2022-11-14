<template>
  <div class="about">
    <MercyMainImportantInfo />
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import MercyMainImportantInfo from "@/components/ImportantInfo.vue";
export default {
  name: "AboutView",
  components: {
    MercyMainImportantInfo
  }
}
</script>
