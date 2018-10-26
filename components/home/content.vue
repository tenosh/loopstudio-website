<template>
  <section :class="$style.mainContentContainer">
    <!-- HEADER CONTENT -->
    <section :class="$style.contentHeader">
      <div :class="$style.headerContainer">
        <div>
          <h1> {{ header.title }} </h1>
        </div>
        <div>
          <p> {{ header.text }} </p>
        </div>
      </div>
    </section>
    <!-- MIDDLE CONTENT -->
    <section :class="$style.contentBody">
      <div :class="$style.bodyContainer">
        <div :class="$style.leftContentColumn">
          <div :class="$style.leftThumb">
            <div :class="$style.curtain"/>
            <span> {{ content.leftColumn.thumbText }} </span>
          </div>
          <div :class="$style.leftText">
            <h5> {{ content.leftColumn.title }} </h5>
            <p> {{ content.leftColumn.text }} </p>
          </div>
        </div>
        <div :class="$style.rightContentColumn">
          <div :class="$style.rightText">
            <h5> {{ content.rightColumn.title }} </h5>
            <p> {{ content.rightColumn.text }} </p>
          </div>
          <div :class="$style.rightThumb">
            <div :class="$style.curtain"/>
            <span> {{ content.rightColumn.thumbText }} </span>
          </div>
        </div>
      </div>
      <div :class="$style.soundBars">
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </section>
    <!-- BOTTOM CONTENT -->
    <section :class="$style.contentBottom">
      <div :class="$style.bottomContainer">
        <div>
          <h1> {{ header.title }} </h1>
        </div>
        <div>
          <p> {{ header.text }} </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      header: {
        title: 'a world-class digital advertising agency',
        text: `We are Fleava, a full-service Digital Advertising Agency based out of beautiful Bali
        &amp; Jakarta, Indonesia. We create award-winning websites, remarkable brands, digital productions,
        business solutions and memorable marketing campaigns.`,
      },
      content: {
        leftColumn: {
          title: 'World-class team.',
          text: `We’ve worked incredibly hard to build a talented, industry leading team of professionals.
          We are graphic, UX, UI, identity and web designers, illustrators, photographers, copy writers,
          front-end and server-side developers, consultants and account managers.`,
          thumbText: 'Music.',
        },
        rightColumn: {
          title: `We don't compromise on quality.`,
          text: `We don’t want our brand associated with anything that isn’t of the highest quality.
          We make quality things, we give quality advice and we only hire quality people. People who
          want the best come to us for a reason. consultants and account managers managers.`,
          thumbText: 'Production.',
        },
      },
    }
  },
}
</script>

<style lang="scss" module>
// LOCAL EXTENDS
%contentContainer {
  position: relative;
  width: 100%;
  padding-top: 7rem;
  padding-bottom: 10rem;
}
%contentBodyThumBg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: 150% auto;
}
%contentBodyThumFormat {
  position: relative;
  width: 100%;
  height: 20rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  .curtain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($black, 0.7);
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  span {
    position: relative;
    top: calc(50% - 20px);
    display: block;
    margin: 0 auto;
    font-family: $font-loopstudio-montserrat;
    font-size: 2rem;
    color: $white;
    text-align: center;
    text-transform: capitalize;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    background-size: 120% auto;
    .curtain,
    span {
      opacity: 1;
    }
    span {
      transform: scale(1.1);
    }
  }
}
%contentBodyTextFormat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 25rem;
  padding: 3rem 7rem;
  color: $white;
  h5 {
    @extend %font-heading;
    @extend %typography-large;

    margin-bottom: 2rem;
    color: inherit;
    text-align: center !important;
  }
  p {
    @extend %font-content;
    @extend %typography-small;

    line-height: 1.3rem;
    color: inherit;
    letter-spacing: 0.5px;
  }
}

.mainContentContainer {
  .contentHeader {
    @extend %contentContainer;
    .headerContainer {
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 auto;
      div {
        flex-basis: 33%;
        align-self: center;
        padding: 2rem;
        h1 {
          @extend %font-heading;
          @extend %typography-large;
        }
        p {
          @extend %font-content;
          @extend %typography-medium;
        }
      }
    }
  }
  .contentBody {
    @extend %contentContainer;

    margin-top: 0;
    background-color: lighten($color-silver, 20%);
    .bodyContainer {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      align-items: start;
      justify-content: center;
      width: 65%;
      margin: 0 auto 0 auto;
      margin-top: -13rem;
      .leftContentColumn {
        width: 50%;
        .leftThumb {
          background-image: url('~/assets/img/home/thumb-left.jpg');

          @extend %contentBodyThumBg;
          @extend %contentBodyThumFormat;
        }
        .leftText {
          @extend %contentBodyTextFormat;

          text-align: left;
          background: linear-gradient(
            45deg,
            $color-cerulean,
            $color-mountain-meadow
          );
        }
      }
      .rightContentColumn {
        width: 50%;
        .rightThumb {
          background-image: url('~/assets/img/home/thumb-right.jpg');

          @extend %contentBodyThumBg;
          @extend %contentBodyThumFormat;
        }
        .rightText {
          text-align: right;
          background-image: url('~/assets/img/home/thumb-extra.jpg');
          background-position: 10%; // Quick fix for better reading

          @extend %contentBodyThumBg;
          @extend %contentBodyTextFormat;
        }
      }
    }
    .soundBars {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-end;
      justify-content: space-around;
      width: 7%;
      height: 10rem;
      padding: 2rem 0;
      margin: 7rem auto 0 auto;
      div {
        width: 7%;
        height: 10%;
        background-color: $color-charcoal;
        animation: sound 0ms -800ms linear infinite alternate;
        animation-duration: 1s;
        &:nth-child(1) {
          animation-duration: 474ms;
        }
        &:nth-child(2) {
          animation-duration: 433ms;
        }
        &:nth-child(3) {
          animation-duration: 407ms;
        }
        &:nth-child(4) {
          animation-duration: 458ms;
        }
        &:nth-child(5) {
          animation-duration: 400ms;
        }
        &:nth-child(6) {
          animation-duration: 427ms;
        }
        &:nth-child(7) {
          animation-duration: 441ms;
        }
        &:nth-child(8) {
          animation-duration: 419ms;
        }
        &:nth-child(9) {
          animation-duration: 487ms;
        }
        &:nth-child(10) {
          animation-duration: 442ms;
        }
      }
    }
  }
  .contentBottom {
    @extend %contentContainer;

    z-index: $layer-page-z-index;
    padding: 2em 0;
    background-color: lighten($color-charcoal, 5%);
    &::before {
      position: absolute;
      top: -50px;
      left: 0;
      z-index: $layer-negative-z-index;
      width: 50%;
      height: 100px;
      content: '';
      background-color: lighten($color-charcoal, 5%);
      transform: skewY(6deg);
    }
    &::after {
      position: absolute;
      top: -50px;
      right: 0;
      z-index: $layer-negative-z-index;
      width: 50%;
      height: 100px;
      content: '';
      background-color: lighten($color-charcoal, 5%);
      transform: skewY(-6deg);
    }
    .bottomContainer {
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 auto;
      div {
        align-self: center;
        width: 50%;
        padding: 2rem;
        text-align: center;
        h1 {
          @extend %font-heading;
          @extend %typography-large;
        }
        p {
          @extend %font-content;
          @extend %typography-medium;

          color: $white;
        }
      }
    }
  }
}
</style>
