<script>
import MaskedInput from "vue-masked-input";
export default {
  data() {
    return {
      errortext: false,
      leadFormData: {
        name: "",
        company: "",
        phone: "",
      },
    };
  },
  name: "popUp",
  props: {
    show: Boolean,
  },
  components: {
    MaskedInput,
  },
  methods: {
    togglePopUp() {
      this.$emit("togglePopUp", false);
    },
    sendLead(evt) {
      evt.preventDefault();
      if (
        (this.leadFormData.name == "" || this.leadFormData.company == "",
        this.leadFormData.phone == "")
      ) {
        this.errortext = true;
      } else {
        const params = new FormData();
        params.set("name", this.leadFormData.name);
        params.set("company", this.leadFormData.company);
        params.set("phone", this.leadFormData.phone);
        fetch("https://tiksan-record.ru/email.php", {
          method: "POST",
          body: params,
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            const el = document.querySelector(".success");
            el.textContent = data;
            ym(87773042, "reachGoal", "Leadrecord");
          });
      }
    },
  },
};
</script>
<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h2>Старт проекта 8 декабря!</h2>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <p>Примите участие в рекорде России</p>
              <form action="email.php" class="popUpForm">
                <input
                  v-model="leadFormData.name"
                  class="popUpForm__input"
                  type="text"
                  placeholder="ФИО"
                />
                <input
                  v-model="leadFormData.company"
                  class="popUpForm__input"
                  type="text"
                  placeholder="Ваша компания"
                />
                <masked-input
                  class="popUpForm__input"
                  v-model="leadFormData.phone"
                  mask="\+\7 (111) 111-11-11"
                  @input="rawVal = arguments[2]"
                  placeholder="Номер телефона"
                />
                <button class="popUpForm__button" @click="sendLead">
                  Отправить
                </button>
              </form>
              <p class="error" v-show="errortext">Нужно заполнить все поля!</p>
              <p class="success"></p>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="togglePopUp">
                Закрыть
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style>
.popUpForm {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.success {
  color: green;
}
.modal-default-button {
  text-align: center;
  border-radius: 9px;
  background-color: #9d9e9e;
  padding: 10px 10px;
  box-sizing: border-box;
  border: none;
  margin: 0;
  cursor: pointer;
  display: block;
  width: 100%;
  transition: background-color 0.2s;
  color: white;
  font-family: "Panton Regular", sans-serif;
}
.popUpForm__button {
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
  color: white;
  font-family: "Panton Regular", sans-serif;
}
.popUpForm__input {
  font-family: "Panton Regular", sans-serif;
  padding: 20px;
  outline: none;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: auto;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
@media (min-width: 991.98px) {
  .modal-container {
    width: 300px;
  }
}
</style>
