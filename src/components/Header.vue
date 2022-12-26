<template>
  <div class="header__wrapper">
  <video autoplay muted loop id="myVideo">
    <source src="@/assets/img/bgvideo.mp4" type="video/mp4">
  </video>
  <header id="main">
    <div class="container">
      <nav class="navbar">
        <div class="navbar__wrapper">
          <a href="#">
            <img src="@/assets/img/logoHert.svg" alt="сердце бизнеса">
          </a>
          <hr class="line">
          <a href="http://tiksan.ru/" class="logo" target="_blank" rel="noopener noreferrer"
          ><img src="@/assets/img/tiksangroup.png" alt="Лого"
          /></a>
        </div>
        <ul class="nav-links">
          <li><a class="nav-link__item" href="#about">О проекте</a></li>
          <li><a class="nav-link__item" href="#buy-info">Принять участие</a></li>
          <li><a class="nav-link__item" href="#partners"
            >Партнеры</a></li>
          <li><a class="nav-link__item" href="#faq" 
            >FaQ</a></li>
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
          <p class="slogan__medium">Старт 8 декабря</p>
          <h1 class="slogan__heading">
            Прими участие в акции <br />
          </h1>
          <p class="slogan__medium">и попади</p>
          <h3 class="slogan__wrapper">в Книгу рекордов России!</h3>
        </div>
        <div class="diagram">
          <h1 class="diagram__heeading">Уже занято места на баннере</h1>
          <p class="diagram__small-text">{{ this.occupiedPlaces }} логотипов из 1000</p>
          <div class="main-diagram">
            <MercyMainDiargamInfo :width="310" :height="310" />
          </div>
          <a href="#buy-info" class="diagram__link"
            >Хочу в Книгу рекордов России</a
          >
        </div>
      </section>
    </div>
  </header>
</div>
</template>

<script>
import MercyMainDiargamInfo from "@/components/DiargamInfo.vue";
export default {
  name: "MercyMainHeader",
  components: {
    MercyMainDiargamInfo,
  },
  data() {
    return {
      occupiedPlaces: 8,
    };
  },

  mounted() {},
  created() {
    // this.setDataOrr();
  },
  mounted() {
  },
  methods: {
    toggleMenu() {
      const navLinks = document.querySelector(".nav-links");
      navLinks.classList.toggle("active");
    },
    // async setDataOrr() {
    //   const params = new URLSearchParams();
    //   const headers = new Headers();
    //   const fetchOccupiedPlace = "12";
    //   headers.append("Content-Type", "application/x-www-form-urlencoded");
    //   headers.append(
    //     "Accept",
    //     "application/json;text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
    //   );
    //   params.set("action", "metrica");
    //   fetch('https://api.tiksan.ru/api/products', 
    //   {
    //       method: "POST",
    //       headers: headers,
    //       body: params,
    //   }
    //   )
    //     .then(function(response) {
    //       return response.json();
    //     }).then(function(data) {
    //       // this.setData(data.true)
    //       this.occupiedPlaces  = data;
    //     });
    //     // this.occupiedPlaces = await fetchOccupiedPlace;
    // }
  },
};
</script>

<style scoped>
#myVideo {
  position: absolute;
    right: 0;
    top: 0px;
    min-width: 100%; 
    min-height: 130%;
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

header {
  font-family: "Panton Regular", sans-serif;
  min-height: calc(100vh - 47px);

  position: relative;
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
.container .navbar .logo {
  font-size: 2.25rem;
  text-decoration: none;
  color: var(--color-white);
  font-weight: 700;
}
.container .navbar .nav-links {
  display: flex;
  align-items: center;
}
.container .navbar .nav-links li {
  list-style-type: none;
}
.container .navbar .nav-links li a {
  text-decoration: none;
  color: var(--color-white);
  margin: 0 1.25rem;
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
.slogan__text {
  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
}
.slogan__wrapper {
  position: relative;
  margin-top: 7px;
  font-size: 1.5em;
}

.slogan__heading {
  font-size: 2em;
  background: linear-gradient(118.3deg, #0ab9ee 7.91%, #8dccec 74.43%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;

}
.diagram__heeading {
  margin-bottom: 5px;
  font-size: xx-large;
}
.main-diagram {
  display: flex;
  justify-content: center;
}
.diagram__small-text {
  text-align: center;
  margin: 5px;
}
.diagram {
  padding: 20px;

  max-width: 500px;

  display: flex;
  flex-direction: column;
  border-radius: 15px;

  background: linear-gradient(318.53deg, #2a2a2a 9.02%, #2f2f2f 78.97%);
  box-shadow: 0px 4px 21px #000000;
  border-radius: 14px;
  position: relative;
}
.diagram__link {
  background: linear-gradient(118.3deg, #0ab9ee 7.91%, #8dccec 74.43%);
  border-radius: 14px;
  padding: 8px;
  border-width: 0;
  border-color: transparent;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

@media (min-width: 575.98px) {
  header {
    padding: 0 calc(50vw - 270px);
  }
  
}
@media (min-width: 767.98px) {
  header {
    padding: 0 calc(50vw - 360px);
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
    margin-bottom: 48px;
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
}
@media (min-width: 991.98px) {
  .slogan__heading {
    font-size: 3em;
  }
  .slogan__wrapper {
    font-size: 2em;
  }
  .slogan {
    justify-content: space-between;
  }
  header {
    padding: 0 calc(50vw - 480px);
  }
}
@media (min-width: 1199.98px) {
  header {
    padding: 0 calc(50vw - 590px);
  }
}
.line {
  height: 50px;
  margin: 5px;
}
</style>
