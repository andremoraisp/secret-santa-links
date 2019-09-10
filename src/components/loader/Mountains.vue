<template>
  <div class="mountains-outer-container">
    <div class="parallax">
      <div class="mountains-inner" v-for="i in 2" :key="i">
        <img class="mountain" src="/svg/mountains.svg" />
        <img class="mountain" src="/svg/mountains.svg" />
        <img class="mountain reverse" src="/svg/mountains.svg" />
        <img class="mountain reverse" src="/svg/mountains.svg" />
        <img class="mountain" src="/svg/mountains.svg" />
        <img class="mountain reverse" src="/svg/mountains.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Mountains extends Vue {}
</script>

<style lang="less" scoped>
.mountains-outer-container {
  overflow: hidden;
  width: 5000px;
  .parallax {
    display: inline-block;
    animation: trees-movement 20s linear infinite;
  }
}
.mountains-inner {
  display: inline-block;
}
.mountain {
  width: 110px;
  margin-bottom: -2px;
  margin-left: -30px;
  filter: brightness(125%) saturate(20%) blur(2px);
  transform-origin: 50% 100%;
}
.space {
  display: inline-block;
  width: 20px;
}

@keyframes trees-movement {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>