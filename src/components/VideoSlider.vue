<template>
  <div class="slider-video swiper" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <LazyYoutube
          class="video__item"
          src="https://www.youtube.com/watch?v=axR6J6r6QsA&feature=youtu.be"
        />
        <p class="slider-video__text">РЕКОРД РОССИИ "СЕРДЦЕ БИЗНЕСА"</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube
          class="video__item"
          src="https://www.youtube.com/watch?v=IE7NoosfUNQ"
        />
        <p class="slider-video__text">КРФ "Красноярье без сирот"</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube
          class="video__item"
          src="https://www.youtube.com/watch?v=4BpKxRVWvZk&feature=youtu.be"
        />
        <p class="slider-video__text">Благотворительный фонд "Дом матери"</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube
          class="video__item"
          src="https://www.youtube.com/watch?v=KHY4mfVqihM&feature=youtu.be"
        />
        <p class="slider-video__text">
          Красноярская региональная организация "Поиск пропавших детей"
        </p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube
          class="video__item"
          src="https://www.youtube.com/watch?v=2nBPFO9CJnsы"
        />
        <p class="slider-video__text">Благотворительный фонд "Живое дыхание"</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube
          class="video__item"
          src="https://www.youtube.com/watch?v=1RRGyZNTUEw"
        />
        <p class="slider-video__text">КРООЗЖ "БЕЗДОМНЫЙ ПЁС"</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube
          class="video__item"
          src="https://www.youtube.com/watch?v=Dp50tlQjdoE"
        />
        <p class="slider-video__text">АНО "Вместе против рака"</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube
          class="video__item"
          src="https://www.youtube.com/watch?v=mBWq30WoPZs"
        />
        <p class="slider-video__text">РО ВОРДИ Красноярского края</p>
      </div>
      <div class="swiper-slide">
        <LazyYoutube
          class="video__item"
          src="https://www.youtube.com/watch?v=uaY5QfnOdF4"
        />
        <p class="slider-video__text">АНО СОК "Шаг за шагом к мечте"</p>
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import { LazyYoutube } from "vue-lazytube";

export default {
  name: "vueLazyYoutube",
  components: {
    LazyYoutube,
  },
  data() {
    return {};
  },
  mounted() {
    const SECOND = 500; // milliseconds

    // init Swiper:
    new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination, Autoplay],

      loop: true,
      autoplay: {
        delay: 10 * SECOND,
        disableOnInteraction: false,
      },
      speed: 2 * SECOND,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // Events
      on: {
        slideChange: (swiper) => {
          this.activeIndex = swiper.realIndex;
        },
      },
    });
  },
  methods: {},
};
</script>
<style lang="scss">
:root {
  --swiper-theme-color: #ee5645;
}
.swiper {
  height: 500px;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  margin-top: 152px;
  align-items: center;
}
.slider-video {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: white;
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
  color: #5b5b5b;
  font-style: normal;
  font-weight: 800;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #8dccec;
  text-underline-offset: 8px;
}
.slider-video__wrapper {
  display: flex;
}
@media (min-width: 575.98px) {
  .slider-video {
    padding: 50px 0;
  }
  .swiper-slide {
    margin-top: 0;
    align-items: center;
    justify-content: center;
    align-items: center;
  }
}
</style>
