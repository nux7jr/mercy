<template>
  <div class="buy container">
    <transition name="fade" :duration="2000">
      <div v-show="allCart.length">
        <div
          class="offer-order__item__wrapper"
          v-for="(item, index) in allCart"
          :key="index"
        >
          <div class="form-order">
            <h1 class="form-order__heading">Оформление заявки</h1>
            <small>* – Поля обязательны к заполнению.</small>
            <form action="" method="post" enctype="multipart/form-data">
              <div class="offer-order__item main-info">
                <p>Номер места: {{ item.index }}</p>
                <p @click="fullReprimandCart" class="delete">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5806 19.4194L19.4194 10.5806"
                      stroke="#5B5B5B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10.5806 10.5806L19.4194 19.4194"
                      stroke="#5B5B5B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </p>
              </div>
              <div class="offer-order__item">
                <p class="offer-order__price-name">Итого:</p>
                <p class="offer-order__price">
                  {{ item.price }}
                </p>
              </div>
              <hr />
              <div class="from-order__item">
                <input
                  class="from-order__input"
                  type="hidden"
                  value="index"
                  name="index"
                  v-model="userFormData.id"
                />
              </div>
              <div class="from-order__wrapper">
                <div class="from-order__item">
                  <label for="name" class="from-order__heading">
                    * Название компании
                  </label>
                  <input
                    class="from-order__input"
                    type="text"
                    v-model="userFormData.title"
                    name="name"
                    id="name"
                  />
                </div>
                <div class="from-order__item">
                  <label for="link" class="from-order__heading">
                    * Ссылка на сайт комании
                  </label>
                  <input
                    class="from-order__input"
                    type="text"
                    v-model="userFormData.link"
                    name="link"
                    id="link"
                  />
                </div>
                <div class="from-order__item">
                  <label for="phone" class="from-order__heading">
                    * Номер для связи
                  </label>
                  <input
                    class="from-order__input"
                    type="tel:"
                    v-model="userFormData.phone"
                    name="phone"
                    id="phone"
                  />
                </div>
                <div class="from-order__item">
                  <label for="email" class="from-order__heading">
                    * Email
                  </label>
                  <input
                    class="from-order__input"
                    type="email"
                    v-model="userFormData.email"
                    name="email"
                    id="email"
                  />
                </div>
                <div class="from-order__item">
                  <label for="price" class="from-order__heading">
                    Место на баннере будет стоить {{ item.price }},<br> хотите пожертвовать больше?
                  </label>
                  <input
                    class="from-order__input"
                    type="number"
                    v-model="userFormData.price"
                    name="price"
                    id="price"
                    v-bind:placeholder="`Напишите сумму от ${item.price}`"
                    placeholder="Сколько вы готовы пожертвовать еще?"
                  />
                </div>
                <div class="from-order__item">
                  <p class="from-order__heading">* Требование к логотипу:</p>
                  <p class="from-order__text">
                    Размер не менее 120х120, не более 1200х1200.
                  </p>
                  <p class="from-order__text">
                    Логотип в черно-белом варианте.
                  </p>
                  <p class="from-order__text">Формат jpeg, png, svg</p>
                </div>
                <div class="from-order__item">
                <label class="input-file">
                  <input class="from-order__file"
                  type="file"
                  name="file"
                  ref="file"
                  v-on:change="handleFileUpload()">		
                  <span>Загрузить логотип</span>
              </label>
              <p>Загружая изображения на наш сайт, вы соглашаетесь с Условиями пользования.</p>
              </div>
              </div>
            </form>
          </div>
        </div>
        <div class="option">
          <button
            class="form-order__submit"
            @click="submitFile()"
            type="submit"
          >
            Оплатить заявку
          </button>
          <button class="form-order__button">
            <router-link to="/"> Отменить </router-link>
          </button>
          form:{{ userFormData }} file:{{ file }}
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="error" v-show="!allCart.length">
        <h3>В вашей корзине ничего нет!</h3>
        <button class="form-order__button">
          <router-link to="/"> На глувную </router-link>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "MercyMainBuyView",

  data() {
    return {
      successSendData: false,
      file: "",
      userFormData: {
        id: "",
        title: "",
        link: "",
        phone: "",
        email: "",
        price: "",
      },
    };
  },

  mounted() {
    this.userFormData.id = this.productTicket.index;
    this.userFormData.price = this.productTicket.price;
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["allCart"]),
    productTicket() {
      return this.allCart[0];
    },
  },
  methods: {
    ...mapMutations(["fullReprimandCart"]),
    submitFile() {
      let formData = new FormData();
      formData.append("id", this.userFormData.id);
      formData.append("title", this.userFormData.title);
      formData.append("link", this.userFormData.link);
      formData.append("phone", this.userFormData.phone);
      formData.append("email", this.userFormData.email);
      formData.append("price", this.userFormData.price);

      formData.append("file", this.file);
      axios
        .post("path/to/laravel", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          console.log("SUCCESS!!");
          this.successSentResume = true;
        })
        .catch(() => {
          console.log("Error!!");
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file[0].files[0];
      console.log(this.file);
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.container {
  color: #5b5b5b;
}
.from-order__heading {
  font-weight: 600;
  margin: 0 0 5px 0;
}
::placeholder {
  font-family: "Panton Regular", sans-serif;
  font-size: 1.2em;
}
.from-order__text {
  margin: 0;
}
.option {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
}
.form-order__submit {
  font-size: 24px;
  vertical-align: middle;
  color: rgb(255 255 255);
  text-align: center;
  border-radius: 9px;
  background-color: #8dccec;
  line-height: 22px;
  height: 40px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: none;
  margin: 0;
  cursor: pointer;
  transition: background-color 0.2s;
}
.form-order__submit:hover {
  background-color: #72b4d5;
}
.form-order__button {
  font-size: 24px;
  vertical-align: middle;
  color: rgb(255 255 255);
  text-align: center;
  border-radius: 9px;
  background-color: #9d9e9e;
  line-height: 22px;
  height: 40px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: none;
  margin: 0;
  cursor: pointer;
  transition: background-color 0.2s;
}
.form-order__button:hover {
  background-color: #7b7e7e;
}
.main-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.from-order__input {
  display: block;
  height: 37px;

  border: 1px solid #9d9e9e;
  border-radius: 14px;
  
}
.form-order__heading,
small {
  text-align: center;
}
.from-order__item {
  display: flex;
  flex-direction: column;
  max-height: 85px;
}
.from-order__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
  column-gap: 20px;
}
.error {
  text-align: center;
  color: red;
}
// file input
.input-file {
  position: relative;
  display: block;
}
.input-file span {
  position: relative;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-size: 24px;
  color: rgb(255 255 255);
  text-align: center;
  border-radius: 9px;
  background-color: #8dccec;
  height: 40px;
  padding: 4px 20px;
  box-sizing: border-box;
  border: none;
  margin: 20px 0 0 0;
  display: block;
  transition: background-color 0.2s;
}
.input-file input[type="file"] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}

/* Focus */
.input-file input[type="file"]:focus + span {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* Hover/active */
.input-file:hover span {
  background-color: #72b4d5;
}
.input-file:active span {
  background-color: #72b4d5;
}

/* Disabled */
.input-file input[type="file"]:disabled + span {
  background-color: #eee;
}
/* all media */
@media (min-width: 575.98px) {
  .container {
    padding: 0 calc(50vw - 270px);
  }
}
@media (max-width: 850px) {
  .from-order__wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 111px;
  }
  .option {
    justify-content: center;
  }
  .container {
    padding: 5px;
  }
}
@media (min-width: 767.98px) {
  .container {
    padding: 0 calc(50vw - 360px);
  }
}
@media (min-width: 991.98px) {
  .container {
    padding: 0 calc(50vw - 480px);
  }
}

@media (min-width: 1199.98px) {
  .container {
    padding: 0 calc(50vw - 590px);
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
