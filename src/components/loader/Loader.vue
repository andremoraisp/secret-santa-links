<template>
  <div class="loader-container">
    <span class="loader-text" v-if="text">{{ text }}</span>
    <div class="frame">
      <div class="ground"></div>
      <Mountains class="lay-on-ground" />
      <Trees class="lay-on-ground" />
      <img class="sled lay-on-ground" src="/svg/048-sled.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Mountains from '@/components/loader/Mountains.vue';
import Trees from '@/components/loader/Trees.vue';

@Component({
  components: { Mountains, Trees },
})
export default class Loader extends Vue {
  @Prop() public text: string = '';
}
</script>

<style lang="less" scoped>
.loader-text {
  margin-left: 8px;
  font-size: 1.5em;
}

.frame {
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 100px;
  background-color: #dcefff;
  border: 3px solid rgb(218, 163, 113);
  box-shadow: -1px 2px 4px 0px #0004 inset, 0px 0px 0px 3px rgb(151, 114, 80);
  margin: 10px;

  .sled {
    width: 40px;
    margin-bottom: -4px;
    animation: sled-movement 10s infinite;
  }

  .ground {
    position: absolute;
    bottom: 0;
    height: 20px;
    width: 100%;
    background-color: #fff;
  }

  .lay-on-ground {
    position: absolute;
    bottom: 0px;
  }
}

@keyframes sled-movement {
  0% {
    transform: translateX(40px);
  }
  50% {
    transform: translateX(80px);
  }
  100% {
    transform: translateX(40px);
  }
}
</style>