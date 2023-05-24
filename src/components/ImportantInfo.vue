<template>
  <article class="important-info">
    <ul class="important-info__list">
      <li>
        <a
          class="important-info__link"
          href="https://tiksan-record.ru/politics.docx"
          >Политика персональных данных</a
        >
      </li>
      <li>
        <a class="important-info__link" href="/#organizers">Об организаторах</a>
      </li>
      <li>
        <a class="important-info__link" href="/#mission">О компании</a>
      </li>
      <li>
        <a class="important-info__link" href="#footer">Контакты</a>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "MercyMainImportantInfo",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
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
.important-info__link {
  transition: 0.5s;
}
.important-info__link:hover {
  color: rgb(167, 157, 157);
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
