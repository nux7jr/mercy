<template>
  <div id="partners" class="partners">
    <div class="partners__item">
      <h3 class="partners__heading">Партнеры благотворительной акции</h3>
    </div>
    <div class="partners__wrapper">
      <section class="enable-animation">
        <div class="marquee marquee--fit-content">
          <ul class="marquee__content">
            <li><img src="@/assets/img/logo-partners.png" alt="" /></li>
            <li><img src="@/assets/img/logo-partners.png" alt="" /></li>
            <li><img src="@/assets/img/logo-partners.png" alt="" /></li>
          </ul>
          <ul aria-hidden="true" class="marquee__content">
            <li><img src="@/assets/img/logo-partners.png" alt="" /></li>
            <li><img src="@/assets/img/logo-partners.png" alt="" /></li>
            <li><img src="@/assets/img/logo-partners.png" alt="" /></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "MercyMainPartnersList",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.partners {
  background-color: #5b5b5b;
}
.partners__heading {
  text-align: center;
  padding: 2rem;
  color: white;
  font-style: normal;
  font-weight: 800;

  text-transform: uppercase;
}

.marquee {
  --gap: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
}
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__content {
    animation-play-state: paused !important;
  }
}

.enable-animation .marquee__content {
  animation: scroll 30s linear infinite;
}

.marquee--reverse .marquee__content {
  animation-direction: reverse;
}

.marquee--hover-pause:hover .marquee__content {
  animation-play-state: paused;
}
.marquee--pos-absolute .marquee__content:last-child {
  position: absolute;
  top: 0;
  left: 0;
}

.enable-animation .marquee--pos-absolute .marquee__content:last-child {
  animation-name: scroll-abs;
}

@keyframes scroll-abs {
  from {
    transform: translateX(calc(100% + var(--gap)));
  }
  to {
    transform: translateX(0);
  }
}

.marquee__content > * {
  flex: 0 0 auto;
  color: white;
  margin: 2px;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  text-align: center;
}
* {
  box-sizing: border-box;
}

.enable-animation {
  margin-block: 3rem;
  padding-bottom: 1.5rem;
}
</style>
