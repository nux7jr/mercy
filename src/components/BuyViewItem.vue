<template>
  <div>
    <div class="fond-info">
      <h2>Реквизиты НКО:</h2>
      <div
        class="fond-info__item"
        v-for="(value, index) in itemData"
        :key="index"
      >
        <p class="fond-info__text">{{ value }}</p>
        <input type="hidden" v-bind:name="index" v-bind:value="value" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MercyBuyViewItems",

  data() {
    return {};
  },
  props: {
    itemData: {},
  },
  mounted() {},

  methods: {},
};
</script>
<style>
.fond-info__text {
  font-size: 1.4rem;
}
</style>
