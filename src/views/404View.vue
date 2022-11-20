<template>
  <div class="pageNotFound">
    <h3 class="pageNotFound__heading">Такой станицы нет!</h3>
    <button class="pageNotFound__button">
      <router-link to="/"> На глувную </router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "MercyPageNotFound",
};
</script>

<style scoped>
.pageNotFound__heading {
  text-align: center;
}
.pageNotFound__button {
  font-size: 24px;
  color: rgb(255 255 255);
  text-align: center;
  border-radius: 9px;
  background-color: #9d9e9e;
  line-height: 22px;
  display: block;
  height: 40px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}
.pageNotFound__button:hover {
  background-color: #7b7e7e;
}
</style>
