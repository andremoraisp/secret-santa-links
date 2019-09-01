<template>
  <div id="app">
    <LanguageSelector />
    <Result v-if="hasResult" />
    <div v-else>
      <PeopleList />
      <Drawer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PeopleList from '@/components/PeopleList.vue';
import LanguageSelector from '@/components/LanguageSelector.vue';
import Drawer from '@/components/Drawer.vue';
import Result from '@/components/Result.vue';
import { namespace as drawResultNamespace } from '@/store/modules/drawResult/index';
import { Getter } from 'vuex-class';

@Component({
  components: {
    LanguageSelector,
    PeopleList,
    Drawer,
    Result,
  },
})
export default class App extends Vue {
  @Getter('hasResult', { namespace: drawResultNamespace })
  public hasResult!: boolean;

  public created() {
    this.$store.dispatch('DrawResult/initialize');
  }
}
</script>

<style lang="less">
@import "App.less";
</style>
