<template>
  <div class="footer" id="footer">
    <div class="footer__item footer-logo">
      <a href="/">
        <img
          class="footer-logo__img"
          src="@/assets/img/tiksangroup.png"
          alt="Logo"
        />
      </a>
    </div>
    <div class="footer__item">
      <ul class="footer__info">
        <li>© 2022, ООО "Тиксан Групп"</li>
        <li>ОГРН 1212400014507</li>
        <li>ИНН 2465340123</li>
        <li>660135, г. Красноярск, ул. Октябрьская, 8а</li>
      </ul>
    </div>
    <div class="footer__item footer__links">
      <div class="social__icon__links">
        <div class="social__icon1">
          <a
            href="https://t.me/tiksanheart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="social__icon__item"
              src="@/assets/img/tel.svg"
              alt="telegram"
            />
          </a>
        </div>
        <!-- <div class="social__icon2">
          <a
            href="https://t.me/tiksangroup2030"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="social__icon__item"
              src="@/assets/img/wa.svg"
              alt="whatup"
            />
          </a>
        </div> -->
        <div class="social__icon3">
          <a
            href="https://www.youtube.com/@tiksanheart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="social__icon__item"
              src="@/assets/img/you.svg"
              alt="youtube"
            />
          </a>
        </div>
        <div class="social__icon4">
          <a
            href="https://instagram.com/tiksan.heart?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="social__icon__item logo__inst"
              src="@/assets/img/inst.svg"
              alt="youtube"
            />
          </a>
        </div>
      </div>
      <a class="social__links" href="mailto:natalia@tiksan.ru"
        >natalia@tiksan.ru</a
      >
      <p>*Организация, запрещенная на территории РФ</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MercyMainFooter",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #5b5b5b;
  color: #ffffff;

  padding: 40px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
}
.footer__info {
  color: #ffffff;
  opacity: 0.5;
}
.footer-logo__img {
  max-width: 280px;
}
.social__icon__item {
  width: 40px;
  height: 40px;
}
.logo__inst {
  width: 41px;
  height: 41px;
}
.social__icon__links {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.social__links {
  display: block;
  margin-top: 15px;
}
</style>
