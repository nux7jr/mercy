<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>
<style lang="scss">
:root {
  --color-main: #5b5b5b;
  --color-light-gray: #9d9e9e;
  --color-blue: #0ab9ee;
  --color-light-blue: #8dccec;
  --color-white: white;
  --color-black: #020304;
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
}
html {
  scroll-behavior: smooth;
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
img {
  width: 100%;
  height: auto;
}
</style>
