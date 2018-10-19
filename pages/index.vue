<template>
  <section :class="$style.container">
    <header>
      <h1 :class="$style.title">
        loopstudio
      </h1>
      <h2 :class="$style.subtitle">
        Main website for loopstudio
        <p>{{ WelcomeText }}</p>
      </h2>
    </header>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  data() {
    return {
      WelcomeText: 'lorem ipsum',
    }
  },
}
</script>

<style lang="scss" module>
@import '~/assets/design/index.scss';

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;

  .title {
    display: block;
    font-family: $system-default-font-family;
    font-size: 100px;
    font-weight: 300;
    color: $color-link-text;
    letter-spacing: 1px;
  }

  .subtitle {
    padding-bottom: 15px;
    font-size: 42px;
    font-weight: 300;
    color: #526488;
    word-spacing: 5px;
  }

  .links {
    padding-top: 15px;
  }
}
@include respond-above(sm) {
}
</style>
