<template>
  <section :class="$style.welcomeSection">
    <div :class="$style.loopBoxContainer">
      <div :class="$style.loopSign">
        <div> <p> loop </p> </div>
        <div> <p> studio </p> </div>
      </div>
      <div
        ref="moprhCell"
        :class="$style.loop"/>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'loopstudio',
    }
  },
  mounted() {
    let morphEL = this.$refs.moprhCell
    morph()
    // No idea how to clear this interval YET
    this.loopInterval = startInterval()

    // HELPERS
    function startInterval() {
      return setInterval(() => morph(), 3000)
    }
    function getRandom() {
      let random = Math.floor(Math.random() * (60 - 40 + 1)) + 40
      let substraction = 100 - random
      return { random, substraction }
    }
    function morph() {
      const { random: a, substraction: b } = getRandom()
      const { random: c, substraction: d } = getRandom()
      const { random: e, substraction: h } = getRandom()
      const { random: f, substraction: g } = getRandom()
      morphEL.style.borderRadius = `${a}% ${b}% ${c}% ${d}% / ${e}% ${f}% ${g}% ${h}%`
    }
  },
}
</script>

<style lang="scss" module>
.welcomeSection {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  // background: url('~/assets/img/home/header.jpg');
  // filter: sepia(0.2);
  // background-repeat: no-repeat;
  // background-attachment: fixed;
  // background-size: cover;
  &::before,
  &::after {
    position: absolute;
    top: -20vmin;
    left: -20vmin;
    z-index: $layer-page-z-index;
    width: 60vmax;
    height: 60vmax;
    pointer-events: none;
    content: '';
    background: rgba($color-cerulean, 0.3);
    transform-origin: 55% 55%;
    animation: morph 15s linear infinite alternate, spin 20s linear infinite;
    will-change: border-radius, transform;
  }
  &::after {
    top: auto;
    right: -10vmin;
    bottom: 0;
    left: auto;
    width: 70vmin;
    height: 70vmin;
    transform-origin: 20% 20%;
    animation: morph 10s linear infinite alternate,
      spin 26s linear infinite reverse;
  }
  .loopBoxContainer {
    position: relative;
    z-index: $layer-page-z-index + 1;
    width: 38vw;
    height: 38vw;
    .loop {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        216deg,
        $color-mountain-meadow,
        $color-cerulean,
        $color-prune
      );
      background-size: 600% 600%;
      border-radius: 50%;
      transition: border-radius 3s ease-in-out;
      animation: linearBG 7s ease infinite, spin 10s linear infinite;
    }
    .loopSign {
      position: absolute;
      z-index: $layer-page-z-index;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      div {
        @extend %font-content;

        align-self: center;
        padding: 1rem 0;
        color: $white;
        text-align: center;
        p {
          @extend %typography-xxlarge;

          margin: 0;
          color: inherit;
          text-transform: uppercase;
          letter-spacing: 2.5rem;
        }
      }
    }
  }
}
</style>
