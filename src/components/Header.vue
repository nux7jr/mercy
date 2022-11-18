<template>
  <header>
    <div class="container">
        <nav class="navbar">
            <a href="#" class="logo"><img src="@/assets/img/tiksangroup.png" alt=""></a>
            <ul class="nav-links">
                <li><a href="#">Главная</a></li>
                <li><a href="#">О проекте</a></li>
                <li><a href="#">Принять участие</a></li>
                <li><a href="#">Партнеры</a></li>
                <li><a href="#">FaQ</a></li>
            </ul>
            <div v-on:click="toggleMenu" class="burger-icon" id="burger">X</div>
        </nav>
        <section class="slogan">
          <div class="slogan__text">
            <small>Благотворительная акция-рекорд</small>
            <h1 class="slogan__heading">1000 логотипов на баннере</h1>
            <p>премии</p>
            <h3>Человек года 2022</h3>
          </div>
          <div class="diagram">
            <h1 class="diagram__heeading">Уже занято места на баннере</h1>
            <small>257 логотипов из 1000</small>
            <div class="main-diagram">
              <MercyMainDiargamInfo id="diagram-info" :width=330 :height=400 />
            </div>
            <button class="diagram__button">Хочу в книгу рекордов Гиннеса</button>
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
import MercyMainDiargamInfo from "@/components/DiargamInfo.vue"
export default {
  name: 'MercyMainHeader',
  components: {
    MercyMainDiargamInfo,
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');

    }
  },
};
</script>

<style scoped>

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
.call {
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  height: 60px;
}
.call__item {
  margin-bottom: 0;
}
.diagram {
  padding: 20px;

  display: flex;
  flex-direction: column;
  border-radius: 15px;

  background: linear-gradient(318.53deg, #2A2A2A 9.02%, #2F2F2F 78.97%);
  box-shadow: 0px 4px 21px #000000;
  border-radius: 14px;
}
.diagram__button {
  background: linear-gradient(118.3deg, #0AB9EE 7.91%, #8DCCEC 74.43%);
  border-radius: 14px;
  width: 306px;
  height: 39px;
  border-width: 0;
  border-color: transparent;
  margin: 0 auto;
  margin-top: 20px;
  color: white;
  font-size: 20px;
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