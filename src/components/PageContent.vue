<template>
  <div id="page-middle">
    <div>
      <img class="sneaky-santa" src="/svg/santa-claus.svg" />
    </div>
    <div id="page-content">
      <Drawer class="drawer" v-show="!isDrawing && !isDrawDone" />
      <Loader class="loader" v-show="isDrawing" :text="'Drawing names...'" />
      <Result class="result" v-show="!isDrawing && isDrawDone" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Drawer from '@/components/Drawer.vue';
import Loader from '@/components/loader/Loader.vue';
import Result from '@/components/Result.vue';
import { namespace as DrawResultNamespace } from '@/store/modules/drawResult';
import { namespace as DrawNamespace } from '@/store/modules/draw';
import { Getter } from 'vuex-class';

@Component({
  components: { Drawer, Loader, Result },
})
export default class PageContent extends Vue {
  @Getter('isDrawing', { namespace: DrawNamespace })
  public isDrawing!: boolean;

  @Getter('isDrawDone', { namespace: DrawNamespace })
  public isDrawDone!: boolean;

  @Getter('hasResult', { namespace: DrawResultNamespace })
  public hasResult!: boolean;
}
</script>

<style lang="less" scoped>
#page-middle {
  overflow: auto;
}
#page-content {
  margin-top: 120px;
  position: relative;
}

.loader {
  margin-left: 30px;
}

.sneaky-santa {
  width: 100px;
  position: absolute;
  transform: rotateZ(90deg) translateY(100%);
  animation: sneaky-santa 18s 1s cubic-bezier(0.18, 0.89, 0.32, 1.28) infinite;
}

@keyframes sneaky-santa {
  0% {
    transform: rotateZ(90deg) translateY(55%);
  }
  2%,
  50% {
    transform: rotateZ(90deg) translateY(10%);
  }
  54%,
  100% {
    transform: rotateZ(90deg) translateY(55%);
  }
}
</style>