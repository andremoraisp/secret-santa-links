<template>
  <div class="trees-outer-container">
    <div class="parallax-1">
      <div class="trees-inner" v-for="i in 2" :key="i">
        <img class="tree" src="/svg/tree1.svg" />
        <div class="space"></div>
        <img class="tree" src="/svg/tree2.svg" />
        <div class="space"></div>
        <div class="space"></div>
        <img class="tree" src="/svg/tree1.svg" />
        <img class="tree" src="/svg/tree2.svg" />
        <div class="space"></div>
        <img class="tree" src="/svg/tree2.svg" />
        <div class="space"></div>
        <img class="tree" src="/svg/tree1.svg" />
      </div>
    </div>
    <div class="parallax-2">
      <div class="trees-inner" v-for="i in 2" :key="i">
        <img class="tree" src="/svg/tree1.svg" />
        <div class="space"></div>
        <img class="tree" src="/svg/tree2.svg" />
        <div class="space"></div>
        <div class="space"></div>
        <img class="tree" src="/svg/tree1.svg" />
        <img class="tree" src="/svg/tree2.svg" />
        <div class="space"></div>
        <img class="tree" src="/svg/tree2.svg" />
        <div class="space"></div>
        <img class="tree" src="/svg/tree1.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Trees extends Vue {}
</script>

<style lang="less" scoped>
.trees-outer-container {
  overflow: hidden;
  width: 5000px;
  height: 80px;
  .parallax-1 {
    .parallax(7s);
    .tree {
      width: 60px;
      margin-bottom: 6px;
      filter: blur(1.5px) saturate(40%);
    }
  }
  .parallax-2 {
    .parallax(7s);
    .tree {
      width: 70px;
      margin-bottom: 2px;
      filter: blur(1px) saturate(60%);
    }
  }
  .parallax(@time) {
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: inline-block;
    animation: trees-movement @time linear infinite;
  }
}
.trees-inner {
  display: inline-block;
}
.tree {
  margin-bottom: 2px;
  margin-left: -30px;
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