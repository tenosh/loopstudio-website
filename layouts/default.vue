<template>
  <div :class="$style.appContainer">
    <nuxt/>
  </div>
</template>

<style lang="scss" module>
@import '~/assets/design/reboot.scss';

.appContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
}
</style>
