<template>
  <section class="news">
    <h1 class="news__header">НОВОСТИ</h1>
    <div v-if="!loading" class="news__wrapper">
      <div class="news__card" v-for="(item, index) in pageOfItems" :key="index">
        <div
          class="news__img"
          v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }"
        ></div>
        <div class="news__info">
          <div class="news__date">{{ item.date }}</div>
          <div class="news__heading" v-html="item.title"></div>
          <div class="news__text" v-html="item.text"></div>
        </div>
        <div
          ref="newsindex"
          class="news__link"
          v-bind:index="item.id"
          @click="onOpen"
        >
          Читать
        </div>
      </div>
    </div>
    <div v-else class="news__loader">
      <span class="loader"></span>
      {{ error }}
    </div>
    <div class="pagination__wrapper">
      <jw-pagination
        :items="data_info"
        :pageSize="6"
        @changePage="onChangePage"
        :styles="customStyles"
        :labels="defaultLabels"
        :disableDefaultStyles="true"
      ></jw-pagination>
    </div>
    <NewsItem
      @close="onClose()"
      :is_news_item_active="is_news_item_active"
      :data_info="data_info"
    />
  </section>
</template>

<script>
import NewsItem from "@/components/NewsItem.vue";
const defaultLabels = {
  first: "",
  last: "",
  previous: "",
  next: "",
};
const customStyles = {
  ul: {
    display: "flex",
    gap: "10px",
  },
  li: {
    display: "flex",
  },
  a: {
    color: "black",
  },
};

export default {
  name: "MercyNewsList",
  data() {
    return {
      loading: false,
      error: [],
      is_news_item_active: false,
      data_info: [],
      pageOfItems: [],
      customStyles,
      defaultLabels,
    };
  },
  created() {
    this.fetchData();
    if (this.$route.params.id) {
      this.is_news_item_active = true;
      document.body.style.overflowY = "hidden";
    }
  },
  mounted() {},
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    async fetchData() {
      let response = await fetch("https://centr-polov.ru/vendor/recordnews/");
      this.data_info = await response.json();
    },

    onClose() {
      this.is_news_item_active = false;
      document.body.style.overflowY = "scroll";
    },
    onOpen: function (evt) {
      console.log(evt.target);
      document.body.style.overflowY = "hidden";
      this.is_news_item_active = true;
      this.$router.push({
        name: "MercyMainNewsItemView",
        params: { id: evt.target.getAttribute("index") },
      });
    },
  },

  components: {
    NewsItem,
  },
};
</script>

<style>
.loader {
  width: 78px;
  height: 78px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.news__loader {
  display: block;
  margin: 0 auto;
}
.first,
.last {
  display: none !important;
}
.next,
.previous {
  width: 90px;
  border: none;
  position: relative;
}

.next > .page-link::after {
  content: url(@/assets/img/arrow.svg);
  position: absolute;
  top: 10;
  left: 20px;
  width: 100px;
  height: 20px;
  z-index: 0;

  cursor: pointer;
}
.previous > .page-link::after {
  content: url(@/assets/img/arrow.svg);
  transform: rotate(180deg);
  position: absolute;
  top: 12px;
  right: 20px;
  width: 100px;
  height: 20px;
  z-index: 0;

  cursor: pointer;
}
.page-link {
  color: black;
  padding: 10px;
}
.page-item {
  border: 1px solid #ddd0b8;

  cursor: pointer;
}
.page-item.previous {
  border: none;
}
.page-item.next {
  border: none;
}
.active {
  background-color: #e65441;
  color: rgb(255, 255, 255) !important;
}
.active > .page-link {
  color: rgb(255, 255, 255) !important;
}
.news {
  background-color: white;
  padding: 15px;
}
.news__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 20px;
  justify-content: center;
}
.news__img {
  height: 202px;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  transition: 0.2s;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.news__header {
  font-family: "Panton Regular", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 111.18%;

  text-align: center;

  color: #000000;
  margin: 0;
  padding: 26px 0 13px 0;
}
.news__heading {
  font-family: "Panton Regular", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 111.18%;

  text-align: center;

  color: #000000;

  text-align: left;

  margin: 11px 0;

  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.news__card {
  background: #fef9f3;
  border-radius: 10px;
  width: -webkit-fill-available;
}
.news__info {
  padding: 15px;
  height: 215px;
  padding-bottom: 20px;
}
.news__date {
  font-family: "Panton Regular", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: #828282;
}
.news__text {
  font-family: "Panton Regular", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #828282;

  max-height: 126px;

  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 6;
  line-clamp: 6;
  -webkit-box-orient: vertical;
}
.news__link {
  font-family: "Panton Regular", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #e65441;
  position: relative;

  cursor: pointer;

  margin-left: 15px;

  margin-bottom: 26px;
  transition: 0.4s;
}
.news__link:hover {
  color: #a22d1e;
}
.pagination__wrapper {
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 55px;
}
.news__link::after {
  content: url(../assets/img/arrow.svg);
  margin-left: 10px;
}
@media (min-width: 575.98px) {
  .news {
    padding: 0 calc(50vw - 270px);
  }
}
@media (min-width: 767.98px) {
  .news {
    padding: 0 calc(50vw - 360px);
  }
  .news__card {
    max-width: 350px;
  }
}

@media (min-width: 991.98px) {
  .news__img {
    width: 350px;
  }
  .news__header {
    font-weight: 400;
    font-size: 30px;
  }
  .news__wrapper {
    gap: 30px;
  }
  .news {
    padding: 0 calc(50vw - 710px);
  }
}
</style>
