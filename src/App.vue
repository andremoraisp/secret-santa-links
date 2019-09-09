<template>
  <div id="app">
    <PageHeader id="page-header" />
    <PageContent />
    <PageFooter id="page-footer" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageHeader from '@/components/PageHeader.vue';
import PageContent from '@/components/PageContent.vue';
import PageFooter from '@/components/PageFooter.vue';
import { namespace as DrawResultNamespace } from '@/store/modules/drawResult';

@Component({
  components: {
    PageHeader,
    PageContent,
    PageFooter,
  },
})
export default class App extends Vue {
  public created() {
    this.$store.dispatch(`${DrawResultNamespace}/initialize`);
  }
}
</script>

<style lang="less">
@import "App.less";
</style>

<style lang="less" scoped>
#page-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
