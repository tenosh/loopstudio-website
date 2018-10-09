<template>
  <section :class="$style.container">
    <div>
      <logo/>
      <h1 :class="$style.title">
        loopstudio
      </h1>
      <h2 :class="$style.subtitle">
        Main website for loopstudio
      </h2>
      <div :class="$style.links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
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
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
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
</style>
