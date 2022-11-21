<template>
  <div class="footer">
    <div class="footer__item footer-logo">
      <a href="/">
        <img class="footer-logo__img" src="@/assets/img/tiksangroup.png" alt="Logo">
      </a>
    </div>
    <div class="footer__item">
      Social
      <p>*Организация, запрещенная на территории РФ</p>
    </div>
    <div class="footer__item">
      <ul>
        <li>
          © 2022, ООО "Тиксан Групп" 
        </li>
        <li>
          ОГРН 1212400014507
        </li>
        <li>
          ИНН 2465340123
        </li>
        <li>
          660135, г. Красноярск, ул. Октябрьская, 8а
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MercyMainFooter',

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
.footer {
  background-color: #5B5B5B;
  color: #FFFFFF;

  padding: 40px;
  margin-top: 25px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
.footer-logo__img {
  max-width: 280px;
}
</style>