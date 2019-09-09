<template>
  <div class="header-container">
    <div class="header-title font-christmas">Secret Santa</div>
    <div class="toys">
      <img class="globe" src="/svg/035-snow-globe.svg" width="50" />
      <img class="sled" src="/svg/048-sled.svg" width="50" />
      <img class="wreath" src="/svg/034-christmas-wreath.svg" width="60" />
      <img class="gift" src="/svg/011-gift.svg" width="50" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PageHeader extends Vue {}
</script>

<style lang="less" scoped>
.header-container {
  background-color: #ffe0b1;
  height: 70px;
  padding-top: 15px;
  position: relative;

  border-bottom: 4px solid #bd987b;

  @media (max-width: 550px) {
    height: 140px;
  }

  .header-title {
    display: inline-block;
    font-size: 32px;
    font-weight: bold;
    padding-left: 50px;
    @media (max-width: 550px) {
      margin: auto;
    }
  }

  .toys {
    position: absolute;
    bottom: -6px;
    left: 230px;

    @media (max-width: 550px) {
      left: unset;
      right: 30px;
    }

    & > * + * {
      margin-left: 10px;
    }

    & > * {
      position: relative;
    }

    .sled {
      bottom: -7px;
    }

    .wreath {
      bottom: -50px;
    }
  }
}

.wreath {
  transform-origin: 50% 10%;
  animation: wreat-wind 15s infinite;
}

@keyframes wreat-wind {
  0% {
    transform: rotateZ(0deg);
  }
  1% {
    transform: rotateZ(15deg);
  }
  3% {
    transform: rotateZ(-5deg);
  }
  5% {
    transform: rotateZ(3deg);
  }
  7% {
    transform: rotateZ(-1deg);
  }
  8% {
    transform: rotateZ(0deg);
  }
}

.gift {
  animation: gift-jump 10s infinite;
  transform-origin: 5% 100%;
}

@keyframes gift-jump {
  0% {
    transform: rotateZ(0deg);
  }
  1%,
  1.2% {
    transform: rotateZ(-7deg);
  }
  2% {
    transform: rotateZ(0deg);
  }
}
</style>
