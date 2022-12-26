<template>
  <div class="buy container">
    <transition name="fade" :duration="300">
      <div v-show="allCart.price">
        <div class="offer-order__item__wrapper">
          <div class="form-order">
            <h1 class="form-order__heading">Оформление заявки</h1>
            <small>* – Поля обязательны к заполнению.</small>
            <!-- enctype="multipart/form-data" -->
            <!-- http://tiksan-record.ru/ -->
            <form
              action="https://tiksan-record.ru/payment.php"
              enctype="multipart/form-data"
              method="post"
            >
              <div class="offer-order__item main-info">
                <div class="main-info__wrapper">
                  <p>Номер: {{ allCart.id }}</p>
                  <div class="offer-order__item">
                    <p class="offer-order__price-name">
                      Цена: {{ allCart.price }}₽
                    </p>
                  </div>
                </div>
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
              <hr />
              <div class="from-order__item">
                <input
                  class="from-order__input"
                  type="hidden"
                  value="index"
                  name="index"
                  v-model="userFormData.id"
                />
                <input
                  class="from-order__input"
                  type="hidden"
                  value="nameImg"
                  name="nameImg"
                  v-model="file.name"
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
                    required
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
                    required
                  />
                </div>
                <div class="from-order__item">
                  <label for="phone" class="from-order__heading">
                    * Номер для связи
                  </label>
                  <masked-input
                    required
                    class="from-order__input"
                    v-model="userFormData.phone"
                    mask="\+\7 (111) 111-11-11"
                    @input="rawVal = arguments[2]"
                    placeholder="Номер телефона"
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
                    required
                  />
                </div>
                <div class="from-order__item">
                  <label for="price" class="from-order__heading">
                    Хотите пожертвовать больше?
                  </label>
                  <input
                    class="from-order__input"
                    type="number"
                    min="0"
                    v-model="userFormData.additionalPrice"
                    name="additionalPriceSum"
                    id="price"
                    placeholder="Напишите сумму"
                  />
                </div>
                <div class="from-order__item">
                  <p class="from-order__heading">* Требование к логотипу:</p>
                  <p class="from-order__text">
                    Формат cdr, ai, eps, pdf, svg и др. форматы кривых
                  </p>
                </div>
                <div class="from-order__item">
                  <label class="input-file">
                    <input
                      class="from-order__file"
                      type="file"
                      name="file"
                      id="file"
                      ref="file"
                      required
                      v-on:change="handleFileUpload()"
                    />
                    <span>Загрузить логотип</span>
                    <div class="loading" v-show="fileLoading">
                      <svg
                        class="loader"
                        viewBox="10 0 80 200"
                        style="display: block"
                      >
                        <defs>
                          <filter id="goo">
                            <feGaussianBlur
                              in="SourceGraphic"
                              stdDeviation="8"
                              result="blur"
                            ></feGaussianBlur>
                            <feColorMatrix
                              in="blur"
                              mode="matrix"
                              values="1 0 0 0 0
                                                                         0 1 0 0 0
                                                                         0 0 1 0 0
                                                                         0 0 0 25 -8"
                              result="goo"
                            ></feColorMatrix>
                            <feBlend in="SourceGraphic" in2="goo"></feBlend>
                          </filter>
                        </defs>
                        <g filter="url(#goo)" fill="#8dccec" stroke="#8dccec">
                          <g transform="translate(50, 50)">
                            <g
                              class="circle -a"
                              transform="rotate(10683.8492 0 0)"
                            >
                              <g transform="translate(-50, -50)">
                                <circle cx="25" cy="50" r="9"></circle>
                              </g>
                            </g>
                          </g>
                          <g transform="translate(50, 50)">
                            <g
                              class="circle -b"
                              transform="rotate(10149.65674 0 0)"
                            >
                              <g transform="translate(-50, -50)">
                                <circle cx="50" cy="25" r="8"></circle>
                              </g>
                            </g>
                          </g>
                          <g transform="translate(50, 50)">
                            <g
                              class="circle -c"
                              transform="rotate(9615.46428 0 0)"
                            >
                              <g transform="translate(-50, -50)">
                                <circle cx="75" cy="50" r="7"></circle>
                              </g>
                            </g>
                          </g>
                          <g transform="translate(50, 50)">
                            <g
                              class="circle -d"
                              transform="rotate(9081.27182 0 0)"
                            >
                              <g transform="translate(-50, -50)">
                                <circle cx="50" cy="75" r="6"></circle>
                              </g>
                            </g>
                          </g>
                          <g transform="translate(50, 50)">
                            <g
                              class="circle -e"
                              transform="rotate(8547.07936 0 0)"
                            >
                              <g transform="translate(-50, -50)">
                                <circle cx="25" cy="50" r="5"></circle>
                              </g>
                            </g>
                          </g>
                          <g transform="translate(50, 50)">
                            <g
                              class="circle -f"
                              transform="rotate(8012.8869 0 0)"
                            >
                              <g transform="translate(-50, -50)">
                                <circle cx="50" cy="25" r="4"></circle>
                              </g>
                            </g>
                          </g>
                          <g transform="translate(50, 50)">
                            <g
                              class="circle -g"
                              transform="rotate(7478.694439999999 0 0)"
                            >
                              <g transform="translate(-50, -50)">
                                <circle cx="75" cy="50" r="3"></circle>
                              </g>
                            </g>
                          </g>
                          <g transform="translate(50, 50)">
                            <g
                              class="circle -h"
                              transform="rotate(6944.501979999999 0 0)"
                            >
                              <g transform="translate(-50, -50)">
                                <circle cx="50" cy="75" r="2"></circle>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p class="input-file__name" v-show="fileLoad">
                      Логотип:{{ file.name }}
                    </p>
                  </label>
                  <p>
                    Загружая изображения на наш сайт, вы соглашаетесь с
                    Условиями пользования.
                  </p>
                </div>
              </div>
              <div>
                <h2>
                  Выберите программу Фонда, в которую вы хотите пожертвовать
                </h2>
                <div class="programm__wrapper">
                  <div class="name-programm2 programm__item">
                    <input
                      type="radio"
                      name="nameProgramm"
                      value="От сердца к сердцу"
                      id="nameProgramm2"
                      v-model="userFormData.programm"
                    />
                    <label for="nameProgramm2">От сердца к сердцу</label>
                  </div>
                  <div class="name-programm4 programm__item">
                    <input
                      type="radio"
                      name="nameProgramm"
                      value="Живое дыхание"
                      id="nameProgramm4"
                      v-model="userFormData.programm"
                    />
                    <label for="nameProgramm4">Живое дыхание</label>
                  </div>
                  <div class="name-programm5 programm__item">
                    <input
                      type="radio"
                      name="nameProgramm"
                      value="Поиск пропавших людей"
                      id="nameProgramm5"
                      v-model="userFormData.programm"
                    />
                    <label for="nameProgramm5">Поиск пропавших людей</label>
                  </div>
                  <div class="name-programm8 programm__item">
                    <input
                      type="radio"
                      name="nameProgramm"
                      value="Вместе против рака"
                      id="nameProgramm8"
                      v-model="userFormData.programm"
                    />
                    <label for="nameProgramm8">Вместе против рака</label>
                  </div>
                  <div class="name-programm9 programm__item">
                    <input
                      type="radio"
                      name="nameProgramm"
                      value="Даша Здаевская"
                      id="nameProgramm9"
                      v-model="userFormData.programm"
                    />
                    <label for="nameProgramm9">Даша Здаевская</label>
                  </div>
                  <div class="name-programm10 programm__item">
                    <input
                      type="radio"
                      name="nameProgramm"
                      value="Шаг за шагом к мечте"
                      id="nameProgramm10"
                      v-model="userFormData.programm"
                    />
                    <label for="nameProgramm10">Шаг за шагом к мечте</label>
                  </div>
                  <div class="name-programm11 programm__item">
                    <input
                      type="radio"
                      name="nameProgramm"
                      value="Дом матери"
                      id="nameProgramm11"
                      v-model="userFormData.programm"
                    />
                    <label for="nameProgramm11">Дом матери</label>
                  </div>
                  <input
                    type="hidden"
                    name="out_sum"
                    v-model="this.getPrice"
                    id=""
                  />
                </div>
              </div>
              <hr />
              <div class="offer-order__item">
                <p class="offer-order__price-end">Итого:</p>
                <p class="offer-order__price-end">{{ this.getPrice }}₽</p>
              </div>
              <div class="politics">
                <input
                  type="checkbox"
                  id="checkbox"
                  v-model="checked"
                  checked
                  required
                />
                <p>
                  Согласен(а) на обработку
                  <a
                    class="politics__link"
                    href="https://tiksan-record.ru/politics.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    >персональный данных</a
                  >
                </p>
              </div>
              <div class="option">
                <input
                  class="form-order__submit"
                  type="submit"
                  name="send"
                  value="Далее"
                  v-on:submit="sendfile"
                />
                <button class="form-order__button">
                  <router-link to="/"> Отменить </router-link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="error" v-show="!allCart.price">
        <h3>В вашей корзине ничего нет!</h3>
        <button class="form-order__button">
          <router-link to="/"> На глувную </router-link>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import MaskedInput from "vue-masked-input";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "MercyMainBuyView",

  data() {
    return {
      fileLoading: false,
      fileLoad: false,
      file: "",
      checked: true,
      userFormData: {
        id: "",
        title: "",
        link: "",
        phone: "",
        email: "",
        additionalPrice: "",
        programm: "От сердца к сердцу",
      },
    };
  },

  mounted() {
    this.userFormData.id = this.allCart.id;
    const circles = document.querySelectorAll(".circle");
    function update(time) {
      circles.forEach((circle, index) => {
        const angle = (time * (2 - index / 10)) / 5;
        circle.setAttribute("transform", `rotate(${angle} 0 0)`);
      });
      requestAnimationFrame(update);
    }
    update(0);
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["allCart"]),
    getPrice() {
      return (
        Number(this.allCart.price) + Number(this.userFormData.additionalPrice)
      );
    },
  },
  methods: {
    ...mapMutations(["fullReprimandCart"]),
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
      this.sendfile();
    },
    sendfile() {
      this.fileLoading = true;

      console.log(this.file, " before");
      const formData = new FormData();

      formData.append("file", this.file);
      formData.append("index", this.userFormData.id);

      const options = {
        method: "POST",
        body: formData,
      };
      fetch(
        "https://tiksan-record.ru/App/Helpers/upload/file.php",
        options
      ).then(function (res) {
        console.log(res);
        // this.fileLoading = false;
        // this.fileLoad = true;
      });
      this.fileLoading = false;
      this.fileLoad = true;
    },
  },
  components: {
    MaskedInput,
  },
};
</script>

<style lang="scss" scoped>
.loading {
  width: 20px;
  height: 20px;
  display: block;
  margin: 0 auto;
}
.politics {
  display: flex;
}
.politics__link {
  color: #5b5b5b;
}
.programm__item {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.programm__wrapper {
  display: flex;
  align-items: center;
  align-self: center;
  gap: 20px;
  flex-wrap: wrap;
}
.name-programm {
  display: flex;
  align-items: center;
  align-self: center;
}
.main-info__wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
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
  transition: 0.5s;
}
.from-order__input:focus {
  border: 1px solid #8dccec;
}
.from-order__input:focus {
  outline: none;
}
.form-order__heading,
small {
  text-align: center;
}
.form-order__heading {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #8dccec;
  text-underline-offset: 8px;
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
.delete {
  -webkit-transition: -webkit-transform 0.8s ease-in-out;
  -ms-transition: -ms-transform 0.8s ease-in-out;
  transition: transform 0.2s ease-in-out;
}
.delete:hover {
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.error {
  text-align: center;
  color: red;
  margin-top: 20px;
  margin-bottom: 20px;
}
.offer-order__price-end {
  color: black;
  font-weight: 600;
  font-size: x-large;
}
// file input
.input-file {
  position: relative;
  display: block;
}
.input-file__name {
  margin: 10px;
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
  box-shadow: 0 0 0 0.2rem rgba(6, 6, 6, 0.645);
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
