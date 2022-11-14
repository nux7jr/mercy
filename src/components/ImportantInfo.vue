<template>
  <div>
    <article class="important-info">
      <ul class="important-info__list">
        <li>
          <a href="#">Юридическая информация</a>
        </li>
        <li>
          <a href="#">Об организаторах</a>
        </li>
        <li>
          <a href="#">О кампании</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  name: 'MercyMainImportantInfo',

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
.important-info {
  height: 47px;

  background: var(--color-main);

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.important-info__list {
  margin-right: 10px;

  color: var(--color-white);
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
}
@media (min-width: 575.98px) {

}
@media (min-width: 767.98px) {

}
@media (max-width: 767.98px) {
  .important-info {
    display: none;
  }
}
@media (min-width: 991.98px) {
  .important-info {
    padding: 0 calc(50vw - 480px);
  }
}
@media (min-width: 1199.98px) {
  .important-info {
    padding: 0 calc(50vw - 590px);
  }
}
</style>