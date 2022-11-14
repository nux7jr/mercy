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
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
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
// info
.information {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  text-align: center;
}
.goal, .money-transfer {
  width: 50%;
}
.goal {
  background-color: var(--color-light-blue);
}
.money-transfer {
  background-color: var(--color-light-gray);
}
.money-transfer__text, .goal__text {
  padding: 25px;
}
@media (max-width: 850px) {
  .information {
    flex-direction: column;
  }
  .goal, .money-transfer {
    width: auto;
  }
  .money-transfer__text, .goal__text {
    padding: 5px;
  }
}
// media 
// возможно удалить!
@media (max-width: 850px) {
  .information {
    flex-direction: column;
  }
  .goal, .money-transfer {
    width: auto;
  }
  .money-transfer__text, .goal__text {
    padding: 5px;
  }
}

@media (min-width: 991.98px) {

}
@media (min-width: 1199.98px) {

}
</style>
