<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>

export default {
  name: "App",
  components: {
  },
};
</script>
<style lang="scss">
:root {
  --color-main: #5B5B5B;
  --color-light-gray: #9D9E9E;
  --color-blue: #0AB9EE;
  --color-light-blue: #8DCCEC;
  --color-white: white;
  --color-black: #020304;
}
@font-face {
  font-family: 'Panton Regular';
  src: url('assets/fonts/Panton-Regular.eot');
  src: url('assets/fonts/Panton-Regular.eot?#iefix') format('embedded-opentype'),
  url('assets/fonts/Panton-Regular.woff') format('woff'),
  url('assets/fonts/Panton-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  }
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Panton Regular', sans-serif;
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
