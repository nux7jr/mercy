<template>
  <div class="header__wrapper">
    <video autoplay muted loop id="header__video">
      <source src="@/assets/img/bgvideo.mp4" type="video/mp4" />
    </video>
    <header id="main">
      <div class="container">
        <nav class="navbar">
          <div class="navbar__wrapper">
            <a href="#">
              <img
                class="main__logo"
                src="@/assets/img/logos/new.svg"
                alt="сердце бизнеса"
              />
            </a>
            <hr class="line" />
            <a
              href="http://tiksan.ru/"
              class="logo svg-logo"
              target="_blank"
              rel="noopener noreferrer"
              ><img src="@/assets/img/tiksangroup.png" alt="Лого"
            /></a>
            <hr class="line" />
            <a
              href="https://t.me/tvknew"
              class="svg-logo"
              target="_blank"
              rel="noopener noreferrer"
              ><img src="@/assets/img/logos/TVK.svg" alt="Лого"
            /></a>
            <hr class="line" />
            <a
              href="https://krasnoyarsk.dk.ru/"
              class="svg-logo"
              target="_blank"
              rel="noopener noreferrer"
              ><img src="@/assets/img/logos/dkk.svg" alt="Лого"
            /></a>
          </div>
          <ul class="nav-links">
            <li><a class="nav-link__item" href="/#about">О проекте</a></li>
            <li>
              <a class="nav-link__item" href="/#buy-info">Принять участие</a>
            </li>
            <li><a class="nav-link__item" href="/#partners">Партнеры</a></li>
            <li><a class="nav-link__item" href="/news">Новости</a></li>

            <li><a class="nav-link__item" href="/#faq">FaQ</a></li>
          </ul>
          <div v-on:click="toggleMenu" class="burger-icon" id="burger">
            <div class="icons">
              <svg
                width="50"
                height="50"
                viewBox="0 0 32 42"
                xmlns="http://www.w3.org/2000/svg"
                onclick="this.classList.toggle('active')"
              >
                <g transform="matrix(1,0,0,1,-389.5,-264.004)">
                  <g id="arrow_left2">
                    <g transform="matrix(1,0,0,1,0,5)">
                      <path
                        id="top"
                        d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                      />
                    </g>
                    <g
                      transform="matrix(1,1.22465e-16,1.22465e-16,-1,0.00024296,564.935)"
                    >
                      <path
                        id="bottom"
                        d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                      />
                    </g>
                    <path id="middle" d="M390,284.967L420,284.967" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </nav>
        <section class="slogan">
          <div class="slogan__text">
            <h1 class="slogan__heading slogan__call">ПРИМИ УЧАСТИЕ В</h1>
            <h1 class="slogan__heading slogan__call">
              МАСШТАБНОМ БЛАГОТВОРИТЕЛЬНОМ
            </h1>
            <h1 class="slogan__heading slogan__call">
              ПРОЕКТЕ "СЕРДЦЕ БИЗНЕСА"
            </h1>

            <h1 class="slogan__heading">и попади</h1>
            <h1 class="slogan__heading">в Книгу рекордов России</h1>
          </div>
          <div class="diagram">
            <div class="diagram__item diagram__text">
              <h1 class="diagram__heading">Количество участников проекта,</h1>
              <h1 class="diagram__heading">которые отправили помощь</h1>
              <h1 class="diagram__heading">одной из НКО</h1>

              <p class="diagram__logo">{{ quantity }} логотипов из 1000</p>
              <a href="/#buy-info" class="diagram__link"
                >Хочу сделать доброе дело</a
              >
            </div>
            <div class="main-diagram diagram__item">
              <MercyMainDiargamInfo :width="250" :height="250" />
            </div>
          </div>
        </section>
      </div>
    </header>
    <!-- <MercyMainInformationAboutBuy /> -->
  </div>
</template>

<script>
import MercyMainDiargamInfo from "@/components/DiargamInfo.vue";
import MercyMainInformationAboutBuy from "@/components/InformationAboutBuy.vue";
export default {
  name: "MercyMainHeader",
  components: {
    MercyMainDiargamInfo,
    MercyMainInformationAboutBuy,
  },
  data() {
    return {
      quantity: 17,
    };
  },

  mounted() {},
  created() {},
  async mounted() {
    try {
      const params = new URLSearchParams();
      const headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      headers.append(
        "Accept",
        "application/json;text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
      );
      params.set("action", "metrica");
      const res = await fetch("https://api.tiksan.ru/api/success_products", {
        method: "GET",
        headers: headers,
        // body: params,
      });
      const result = await res.json();
      this.quantity = result;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    // getQuantity() {}

    toggleMenu() {
      const navLinks = document.querySelector(".nav-links");
      navLinks.classList.toggle("active");
    },
  },
};
</script>

<style scoped>
#header__video {
  background-color: black;
  position: absolute;
  right: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}
svg {
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 1.5;
  cursor: pointer;
}

svg path {
  fill: none;
  stroke: white;
  stroke-width: 1px;
}

svg + svg {
  margin-left: 1.5rem;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #7f00ff;
  background: -webkit-linear-gradient(to right, #e100ff, #7f00ff);
  background: linear-gradient(to right, #e100ff, #7f00ff);
  color: white;
  padding: 1rem;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}
.slogan__medium {
  margin: 10px;
  font-size: 2rem;
}
.icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.nav-link__item {
  display: flex;
}
#top,
#bottom {
  stroke-dasharray: 30, 75.39;
  transition: all 0.6s cubic-bezier(0.6, 0.33, 0.67, 1.29);
}
.main__logo {
  width: 100px;
}
svg.active #top,
svg.active #bottom {
  stroke-dasharray: 75.39;
  stroke-dashoffset: -60;
}

svg:nth-child(2) {
  transform: rotate(0deg);
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

svg:nth-child(2) path {
  transition: all 0.4s ease-in-out 0.6s;
}

svg:nth-child(2).active {
  transform: rotate(180deg);
}

.rocket #top {
  stroke-dasharray: 30, 88;
}

.header__wrapper {
  font-family: "Panton Regular", sans-serif;

  position: relative;

  flex-wrap: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container {
  max-width: 1368px;
  margin: 0 auto;
}
.navbar__wrapper {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
}
.container .navbar {
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  margin-bottom: 5px;
}
.container .navbar .nav-links {
  display: flex;
  align-items: center;
  gap: 5px;
}
.container .navbar .nav-links li {
  list-style-type: none;
}
.container .navbar .nav-links li a {
  text-decoration: none;
  color: var(--color-white);
  font-weight: 500;
  font-size: 1.05rem;
  position: relative;
}
.container .navbar .nav-links li a::after {
  position: absolute;
  content: "";
  background-color: var(--color-white);
  bottom: -5px;
  left: 0;
  width: 0%;
  height: 3px;
  transition: 0.3s ease all;
}
.container .navbar .nav-links li a:hover::after {
  width: 100%;
}
.container .navbar .nav-links button {
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.75rem 1rem;
  margin: 0 1rem;
  border-radius: 6px;
  background: transparent;
  border: 2px solid var(--color-white);
  color: var(--color-white);
  font-weight: 500;
}
.container .navbar .burger-icon {
  display: none;
  color: var(--color-white);
  width: 20px;
  height: 20px;
  cursor: pointer;
}
/* header slogan */
.slogan {
  color: var(--color-white);
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.slogan__call {
  color: var(--color-orange);
}
.slogan__text {
  text-align: center;
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 10px;
}
.slogan__wrapper {
  position: relative;
  margin-top: 7px;
  font-size: 1.5em;
}

.slogan__heading {
  text-transform: uppercase;
  text-align: left;
  font-size: 1.4em;
  color: white;
  margin: 0;
}
.slogan__call {
  color: var(--color-orange);
}
.diagram__heading {
  margin: 0;
  font-size: 1.6rem;
}
.main-diagram {
  display: flex;
  justify-content: center;
}
.diagram__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  align-self: center;
  padding: 10px;
}
.diagram {
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding-bottom: 40px;
  margin-bottom: 20px;
  border-radius: 15px;

  background: var(--color-main);
  box-shadow: 0px 4px 21px #000000;
  border-radius: 14px;
  position: relative;

  padding-bottom: 0;
}
.diagram__logo {
  margin: 10 0;
}
.diagram__link {
  background: var(--color-orange);
  border-radius: 10px;
  padding: 8px;
  border-width: 0;
  border-color: transparent;
  margin: 0 auto;

  margin-bottom: 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
.svg-logo {
  max-width: 50px;
  display: none;
}
.svg-logo {
  display: none;
}
.line {
  display: none;
}
@media (min-width: 350.98px) {
  .svg-logo {
    display: block;
  }
  .line {
    display: block;
  }
}
@media (min-width: 575.98px) {
  header {
    padding: 0 calc(50vw - 270px);
  }
  .logo {
    margin-bottom: 0px;
  }
}
@media (min-width: 767.98px) {
  header {
    padding: 0 calc(50vw - 360px);
  }
  #header__video {
    min-height: 130%;
  }
  .slogan__text {
    padding: 0px;
  }
}
@media (max-width: 850px) {
  header .container .navbar .nav-links {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    height: 100%;
    width: 225px;
    margin: 0;
    padding: 0;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transform: translateX(-100%);
    transition: 0.4s ease all;
    z-index: 10;
  }

  h1 {
    font-size: 2rem;
  }
  .diagram {
    padding: 0;
  }
  .container .navbar .burger-icon {
    display: block;
  }
  .navbar {
    padding: 15px;
  }
  #burger {
    width: 70px;
    margin-bottom: 42px;
  }
  .container .navbar .nav-links li a {
    color: #000;
  }
  .container .navbar .nav-links li a::after {
    background-color: #000;
  }
  .container .navbar .nav-links button {
    border-color: #000;
    color: #000;
    padding: 0.75rem 1.5rem;
  }
  .container .navbar .nav-links.active {
    transform: translateX(0%);
  }
  .container .navbar i {
    display: block;
  }
  .container .navbar .nav-links li a {
    font-size: 18px;
  }
}
@media (max-width: 1199.98px) {
  .container .navbar .nav-links li a {
    font-size: 13px;
  }
}
@media (min-width: 991.98px) {
  .svg-logo {
    max-width: 100px;
    margin: auto 0;
  }
  .slogan__heading {
    font-size: 2.3rem;
  }
  .slogan__wrapper {
    font-size: 2em;
  }
  header {
    padding: 0 calc(50vw - 480px);
  }
  .container .navbar .nav-links {
    gap: 15px;
  }
}
@media (min-width: 1199.98px) {
  header {
    padding: 0 calc(50vw - 590px);
    height: 60vh;
  }
  #header__video {
    top: -214px;
  }
  .main__logo {
    width: 180px;
  }
  .slogan {
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 10px;
  }
  .diagram {
    flex-wrap: nowrap;
  }
}
.line {
  height: 50px;
  margin: 5px;
}
</style>
