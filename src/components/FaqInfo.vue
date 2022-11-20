<template>
  <div id="faq" class="faq">
    <h2 class="faq__heading">Вопрос-ответ</h2>
    <details class="faq__item spoiler faq__spoiler">
      <summary class="spoiler__header">
        <h3 class="faq__question">Кто организовывает акцию с рекордом?</h3>
        <svg
          class="spoiler__cross"
          width="50"
          height="50"
          viewbox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="25" cy="25" rx="25" ry="25" fill="#ECECEC" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z"
            fill="#666666"
          />
        </svg>
      </summary>
      <div class="spoiler-content">
        <p class="spoiler-content__text">
          Являясь всего лишь частью общей картины, непосредственные участники
          технического прогресса призывают нас к новым свершениям, которые, в
          свою очередь, должны быть своевременно верифицированы.
        </p>
      </div>
    </details>
    <details class="faq__item spoiler faq__spoiler">
      <summary class="spoiler__header">
        <h3 class="faq__question">Кто организовывает акцию с рекордом?</h3>
        <svg
          class="spoiler__cross"
          width="50"
          height="50"
          viewbox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="25" cy="25" rx="25" ry="25" fill="#ECECEC" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z"
            fill="#666666"
          />
        </svg>
      </summary>
      <div class="spoiler-content">
        <p class="spoiler-content__text">
          Являясь всего лишь частью общей картины, непосредственные участники
          технического прогресса призывают нас к новым свершениям, которые, в
          свою очередь, должны быть своевременно верифицированы.
        </p>
      </div>
    </details>
    <details class="faq__item spoiler faq__spoiler">
      <summary class="spoiler__header">
        <h3 class="faq__question">Кто организовывает акцию с рекордом?</h3>
        <svg
          class="spoiler__cross"
          width="50"
          height="50"
          viewbox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="25" cy="25" rx="25" ry="25" fill="#ECECEC" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z"
            fill="#666666"
          />
        </svg>
      </summary>
      <div class="spoiler-content">
        <p class="spoiler-content__text">
          Являясь всего лишь частью общей картины, непосредственные участники
          технического прогресса призывают нас к новым свершениям, которые, в
          свою очередь, должны быть своевременно верифицированы.
        </p>
      </div>
    </details>
    <details class="faq__item spoiler faq__spoiler">
      <summary class="spoiler__header">
        <h3 class="faq__question">Кто организовывает акцию с рекордом?</h3>
        <svg
          class="spoiler__cross"
          width="50"
          height="50"
          viewbox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="25" cy="25" rx="25" ry="25" fill="#ECECEC" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z"
            fill="#666666"
          />
        </svg>
      </summary>
      <div class="spoiler-content">
        <p class="spoiler-content__text">
          Являясь всего лишь частью общей картины, непосредственные участники
          технического прогресса призывают нас к новым свершениям, которые, в
          свою очередь, должны быть своевременно верифицированы.
        </p>
      </div>
    </details>
  </div>
</template>

<script>
export default {
  name: "MercyMainFaqInfo",

  data() {
    return {
      show: false,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.faq__item {
  cursor: pointer;
  margin: 20px 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(147, 137, 137);
}
.faq__heading {
  text-align: center;
}
.faq__ans {
  display: none;
}
.spoiler {
  max-height: 100px;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}
.spoiler__cross {
  transition: transform 0.3s ease-in-out;
}
.spoiler__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  cursor: pointer;
}
.spoiler-content {
  background-color: #5b5b5b;
  color: white;
  padding: 5px;
  border-radius: 15px;
  margin: 10px;
  line-height: 2em;
}
.spoiler:hover,
.spoiler:focus {
  border-color: #282727;
}
.spoiler:hover > .spoiler__header,
.spoiler:focus > .spoiler__header {
  color: #282727;
}
.spoiler[open] {
  border-color: #cacaca;
  max-height: 1000px;
}
.spoiler[open] > .spoiler__header {
  color: inherit;
}
.spoiler[open] .spoiler__cross {
  transform: rotate(180deg);
}
</style>
