<template>
  <header id="main">
    <div class="container">
      <nav class="navbar">
        <a href="#" class="logo"
          ><img src="@/assets/img/tiksangroup.png" alt=""
        /></a>
        <ul class="nav-links">
          <li><a href="#main">Главная</a></li>
          <li><a href="#about">О проекте</a></li>
          <li><a href="#buy-info">Принять участие</a></li>
          <li><a href="#partners">Партнеры</a></li>
          <li><a href="#faq">FaQ</a></li>
        </ul>
<<<<<<< HEAD
        <div v-on:click="toggleMenu" class="burger-icon" id="burger">
          <div class="icons">
            <svg
              width="100"
              height="100"
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
          <small>Благотворительная акция-рекорд</small>
          <h1 class="slogan__heading">1000 логотипов <br> на баннере</h1>
          <small>в рамках премии</small>
          <h3 class="slogan__wrapper">Человек года 2022</h3>
        </div>
=======
        <div v-on:click="toggleMenu" class="burger-icon" id="burger">X</div>
      </nav>
      <section class="slogan">
        <div class="slogan__text">
          <small>Благотворительная акция-рекорд</small>
          <h1 class="slogan__heading">1000 логотипов на баннере</h1>
          <p>премии</p>
          <h3>Человек года 2022</h3>
        </div>
>>>>>>> 6df3393047415881de2b97591ce0cbb62d01d8b4
        <div class="diagram">
          <h1 class="diagram__heeading">Уже занято места на баннере</h1>
          <small>257 логотипов из 1000</small>
          <div class="main-diagram">
            <MercyMainDiargamInfo
              id="diagram-info"
              :width="330"
              :height="400"
            />
          </div>
          <a href="#buy-info" class="diagram__link"
            >Хочу в книгу рекордов Гиннеса</a
          >
          <p class="diagram__tag">#баннеррекорд</p>
        </div>
      </section>
      <div class="call">
        <p class="call__item">Листайте вниз</p>
      </div>
    </div>
  </header>
</template>

<script>
import MercyMainDiargamInfo from "@/components/DiargamInfo.vue";
export default {
  name: "MercyMainHeader",
  components: {
    MercyMainDiargamInfo,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    toggleMenu() {
      const navLinks = document.querySelector(".nav-links");
      navLinks.classList.toggle("active");
    },
  },
};
</script>

<style scoped>
<<<<<<< HEAD
svg {
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 1.5;
cursor:pointer;
}

svg path {
  fill: none;
  stroke: white;
  stroke-width: 1px;
}

svg + svg {
  margin-left: 1.5rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Segoe UI, sans-serif;
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
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
  margin-bottom: 2rem;
}

.icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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


=======
>>>>>>> 6df3393047415881de2b97591ce0cbb62d01d8b4
header {
  min-height: calc(100vh - 47px);
  background-color: black;
  background-image: url(@/assets/img/bg.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.container {
  max-width: 1368px;
  margin: 0 auto;
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
  text-transform: uppercase;
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
  justify-content: space-between;
}
.slogan__text {
  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
}
.slogan__wrapper {
  position: relative;
}
.slogan__wrapper::after {
  content: url(@/assets/img/sloganimg.png);
  position: absolute;
  top: -15px;
  right: 4px;
}
.slogan__heading {
  line-height: 37px;
  background: linear-gradient(118.3deg, #0AB9EE 7.91%, #8DCCEC 74.43%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.call {
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  height: 60px;
  margin-top: 30px;
}
.call__item {
  margin-bottom: 0;
}
.diagram {
  padding: 20px;

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
  color: white;
  font-size: 20px;
  cursor: pointer;
}
.diagram__tag {
  position: absolute;
  bottom: -32px;
  left: 136px;
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
  .container .navbar .burger-icon {
    display: block;
  }
  .navbar {
    padding: 5px;
  }
  #burger {
    width: 70px;
    height: 50px;
    margin-bottom: 65px;
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
  .slogan {
    justify-content: center;
  }
}

@media (min-width: 991.98px) {
  header {
    padding: 0 calc(50vw - 480px);
  }
}
@media (min-width: 1199.98px) {
  header {
    padding: 0 calc(50vw - 590px);
  }
}
</style>
