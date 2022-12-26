<template>
  <div class="slider-video swiper" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <LazyYoutube class="video__item" src="https://www.youtube.com/watch?v=IxfUyEXUvQE"/>
        <p class="slider-video__text">Бизнес-сообщества из Красноярска попадут в Книгу рекордов России!</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube class="video__item" src="https://www.youtube.com/watch?v=WYCeeKBWw2E"/>
        <p class="slider-video__text">Поиск пропавших детей</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube class="video__item" src="https://www.youtube.com/watch?v=-xamtPbqaOg"/>
        <p class="slider-video__text">Вместе против рака</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube class="video__item" src="https://www.youtube.com/watch?v=WczaWsst8t8&feature=youtu.be"/>
        <p class="slider-video__text">Дашенька Здаевская</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube class="video__item" src="https://www.youtube.com/watch?v=m3V4Xmefatw&feature=youtu.be"/>
        <p class="slider-video__text">Дом матери</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube class="video__item" src="https://www.youtube.com/watch?v=yhwVchwgb7M"/>
        <p class="slider-video__text">БФ ЖИВОЕ ДЫХАНИЕ</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube class="video__item" src="https://www.youtube.com/watch?v=EhcI992YzZo"/>
        <p class="slider-video__text">От сердца к сердцу</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube class="video__item" src="https://www.youtube.com/watch?v=_ow1JsZdFg0"/>
        <p class="slider-video__text">Шаг за шагом к мечте</p>
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import { LazyYoutube } from 'vue-lazytube'

export default {
  name: 'vueLazyYoutube',
  components: {
    LazyYoutube,
    },
  data() {
    return {
      
    };
    
  },
  mounted() {
    const SECOND = 1000 // milliseconds

    // init Swiper:
    new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination, Autoplay],

      loop: true,
      autoplay: {
        delay: 3 * SECOND,
        disableOnInteraction: false,
      },
      speed: 2 * SECOND,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Events
      on: {
        slideChange: (swiper) => {
          this.activeIndex = swiper.realIndex
        },
      },
    })
  },
  methods: {
  },
};
</script>
<style lang="scss">
.swiper {
  height: 500px;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.slider-video {
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.slider-video__text {
  text-align: center;
  font-size: larger;
  margin-bottom: 40px;
  margin-top: 20px;
}
.slider-video__heading {
  text-align: center;
  padding: 2rem;
  color: #5B5B5B;
  font-style: normal;
  font-weight: 800;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #8DCCEC;
  text-underline-offset: 8px;
}
.slider-video__wrapper {
  display: flex;
}
</style>