<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},

  created() {
    this.initBase();
  },
  methods: {
    async initBase() {
      const params = new URLSearchParams();
      params.set("action", "update_expire");
      await fetch("https://api.tiksan.ru/api/products", {
        method: "POST",
        body: params,
      });
    },
  },
};
</script>
<style lang="scss">
:root {
  --color-main: #2f2626;
  --color-orange: #ee5645;
  --color-semimain: #dfd0b8;
  --color-light-gray: #9d9e9e;
  --color-blue: #0ab9ee;
  --color-light-blue: #8dccec;
  --color-white: white;
  --color-black: #020304;
  --swiper-theme-color: #ee5645;
}
@font-face {
  font-family: "Panton Regular";
  src: url("assets/fonts/Panton-Regular.eot");
  src: url("assets/fonts/Panton-Regular.eot?#iefix") format("embedded-opentype"),
    url("assets/fonts/Panton-Regular.woff") format("woff"),
    url("assets/fonts/Panton-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Panton Regular", sans-serif;
  background-color: #fff9f3;
}

html {
  scroll-behavior: smooth !important;
}
/* Базавая стилистика */

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: var(--color-white);
}
a:visited {
  color: var(--color-white);
}
a.txttohtmllink {
  color: black;
}
a:visited.txttohtmllink {
  color: black;
}

.news__text a {
  color: #8dccec;
}
.news-item__content a {
  color: #8dccec;
}

.news__text a:visited {
  color: #8dccec;
}
.news-item__content a:visited {
  color: #8dccec;
}

img {
  width: 100%;
  height: auto;
}
</style>
