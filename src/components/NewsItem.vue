<template>
  <Transition>
    <div v-if="is_news_item_active" @click="closer" class="news-item">
      <div class="news-item__window">
        <div class="news-item__wrapper">
          <div
            class="news-item__content"
            v-for="item in data_info"
            :key="item.id"
            v-if="item.id == $route.params.id"
          >
            <img class="news-item__img" :src="item.img" alt="img" />
            <div class="news-item__title" v-html="item.title"></div>
            <div class="news-item__text" v-html="item.text"></div>
          </div>
          <!-- <div v-else-if="item.id !== $route.params.id">Ничего не найдено!</div> -->
        </div>
        <button class="news-item__close" @click="emmitClose()">
          <img
            class="news__item__imgs"
            src="@/assets/img/news/close.svg"
            alt="close"
          />
        </button>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "MercyNewsItem",

  data() {
    return {
      id_news: null,
    };
  },
  created() {
    console.log(this.$route.params.id);
  },

  props: {
    is_news_item_active: Boolean,
    data_info: {},
  },

  mounted() {},

  methods: {
    closer: function (evt) {
      if (evt.target.classList.contains("news-item__window")) {
        this.emmitClose();
      }
    },
    emmitClose() {
      this.$emit("close");
      this.$router.push({
        name: "MercyMainNewsView",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.news-item {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(5px);
  z-index: 3;
}
.news-item__window {
  display: flex;
  justify-content: center;
  margin-top: 70px;
  align-items: center;
  position: relative;
}
.news-item__img {
  width: 100%;
  height: 40%;
}
.news-item__wrapper {
  padding-top: 15px;
  padding-right: 7px;
  background-color: white;

  border-radius: 10px;
}
.news-item__content {
  background-color: white;
  max-width: 1140px;
  max-height: 60vh;
  overflow-y: scroll;
  border-radius: 10px;
  padding: 15px;
  padding-top: 0px;

  position: relative;
}
.news-item__close {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 15px;
  border-color: transparent;
  cursor: pointer;
  transition: 0.3s;

  position: absolute;
  top: 10px;
  right: 0px;
  z-index: 6;
}
.news-item__close:hover {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.news__item__imgs {
  width: 20px;
}
.news-item__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(205, 49, 49, 0);
  border-radius: 10px;
  background-color: #ffffff;
}

.news-item__content::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.news-item__content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: #ddd0b8;
}
.news-item__title {
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 111.18%;
  margin-top: 26px;
  margin-bottom: 33px;
}
@media (min-width: 575.98px) {
}
@media (min-width: 767.98px) {
}

@media (min-width: 1199.98px) {
  .news-item__close {
    top: -60px;
    right: 10px;
  }
  .news__item__imgs {
    width: auto;
  }
}
@media (min-width: 1799.98px) {
  .news-item__close {
    top: -4px;
    right: 285px;
  }
  .news-item__content {
    width: 1140px;
    max-height: 80vh;
  }
}
</style>
