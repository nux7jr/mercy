<template>
  <div class="footer">
    <div class="footer__item footer-logo">
      <a href="/">
        <img class="footer-logo__img" src="@/assets/img/tiksangroup.png" alt="Logo">
      </a>
    </div>
    <div class="footer__item">
      <ul class="footer__info">
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
    <div class="footer__item">
      <div class="social-links">
        <div class="social">
          <a href="https://t.me/tiksangroup2030" target="_blank" rel="noopener noreferrer">
            <img class="social__item" src="@/assets/img/telegram.svg" alt="telegram">
          </a>
        </div>
        <div class="social">
          <a href="https://t.me/tiksangroup2030" target="_blank" rel="noopener noreferrer">
            <img class="social__item" src="@/assets/img/whatsapp.svg" alt="whatup">
          </a>
        </div>
        <div class="social">
          <a href="https://www.youtube.com/channel/UCCjQod9duCejwFDB3IqiR-w" target="_blank" rel="noopener noreferrer">
            <img class="social__item" src="@/assets/img/youtube.svg" alt="youtube">
          </a>
        </div>
        <div class="social">
          <a href="https://www.instagram.com/tiksan.group/" target="_blank" rel="noopener noreferrer">
            <img class="social__item logo__inst" src="@/assets/img/instagram.svg" alt="youtube">
          </a>
        </div>
      </div>
      <p>*Организация, запрещенная на территории РФ</p>
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
  gap: 48px;
}
.footer__info {
  color: #FFFFFF;
  opacity: 0.5;
}
.footer-logo__img {
  max-width: 280px;
}
.social__item {
  width: 40px;
  height: 40px;
}
.logo__inst {
  width: 41px;
  height: 41px;
}
.social-links {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
}
</style>