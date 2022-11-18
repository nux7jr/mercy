<template>
  <div class="faq">
    <h3 class="faq__heading faq__item">Вопрос-ответ</h3>
    <div class="faq__item">
      <p class="faq__question">Кто организовывает акцию с рекордом?</p>
      <p class="faq__ans">ОрганизаторLorem ipsum, dolor sit amet consectetur adipisicing elit. Sint et 
        debitis ducimus reprehenderit blanditiis ipsum. Mollitia labore officiis 
        maxime. Iure sapiente eos, consequuntur dolores dolorum deserunt nulla qui libero officia!</p>
    </div>
    <div class="faq__item">
      <p class="faq__question">Кто организовывает акцию с рекордом?</p>
      <p class="faq__ans">Организатор</p>
    </div>
    <div class="faq__item">
      <p class="faq__question">Кто организовывает акцию с рекордом?</p>
      <p class="faq__ans">Организатор</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MercyMainFaqInfo",

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
.faq__item {
  cursor: pointer;
}
.faq__ans {
  display: none;
}
</style>