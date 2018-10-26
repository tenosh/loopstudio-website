<template>
  <section :class="$style.welcomeSection">
    <div :class="$style.welcomeBox">
      <div :class="$style.titleBox">
        <h1> {{ title }} </h1>
      </div>
      <div :class="$style.welcomeWordsBox">
        <p> {{ welcomeWords }} </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'loopstudio',
      welcomeWords: `Loop es un Estudio de Grabación que cuenta con las
                  condiciones, el equipo y profesionales, te ofrece una
                  elaborada producción discográfica, asesorías técnica y
                  artística para tu proyecto musical y otros servicios
                  relacionados.`,
    }
  },
}
</script>

<style lang="scss" module>
.welcomeSection {
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  background: url('~/assets/img/home/header.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  .welcomeBox {
    @include respond-between(md, lg) {
      width: 560px;
      height: 560px;
    }

    @include respond-between(sm, md) {
      width: 545px;
      height: 545px;
    }

    @include respond-between(sm, md) {
      width: 480px;
      height: 480px;
    }

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: center;
    color: $color-text;
    background-color: $color-mountain-meadow;
    border-radius: 300px;
    outline: 1px dashed transparentize($color-text, 0.8);
    outline-offset: -7rem;
    .titleBox {
      align-self: flex-start;
      padding: 2rem 0;
      margin-left: 4rem;
      h1 {
        @extend %typography-xxlarge;

        color: inherit;
      }
    }
    .welcomeWordsBox {
      align-self: flex-end;
      width: 60%;
      margin-right: 4rem;
      text-align: right;
      p {
        @extend %typography-small;

        color: inherit;
      }
    }
  }
}
</style>
