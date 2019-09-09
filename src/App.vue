<template>
  <div id="app">
    <PageHeader id="page-header" />

    <img class="sneaky-santa" src="/svg/santa-claus.svg" />

    <div id="page-content">
      <template v-if="hasResult"></template>
      <template v-else>
        <Drawer />
      </template>
    </div>

    <PageFooter id="page-footer" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import Drawer from '@/components/Drawer.vue';
import { State, Getter } from 'vuex-class';
import { namespace as DrawResultNamespace } from '@/store/modules/drawResult';

@Component({
  components: {
    PageHeader,
    PageFooter,
    Drawer,
  },
})
export default class App extends Vue {
  @Getter('hasResult', { namespace: DrawResultNamespace })
  public hasResult!: boolean;

  public created() {
    this.$store.dispatch('DrawResult/initialize');
  }
}
</script>

<style lang="less">
@import "App.less";
</style>

<style lang="less" scoped>
#app {
  position: relative;
  min-height: 100vh;
  padding-bottom: 80px;
}

#page-content {
  margin-top: 120px;
}
#page-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.sneaky-santa {
  width: 100px;
  position: absolute;
  transform: rotateZ(90deg) translateY(100%);
  animation: sneaky-santa-data-v-7ba5bd90 18s 1s
    cubic-bezier(0.18, 0.89, 0.32, 1.28) infinite;
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
