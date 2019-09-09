<template>
  <div id="page-middle">
    <div>
      <img class="sneaky-santa" src="/svg/santa-claus.svg" />
    </div>
    <div id="page-content">
      <template v-if="hasResult"></template>
      <template v-else>
        <Drawer />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Drawer from '@/components/Drawer.vue';
import { namespace as DrawResultNamespace } from '@/store/modules/drawResult';
import { Getter } from 'vuex-class';

@Component({
  components: { Drawer },
})
export default class PageContent extends Vue {
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