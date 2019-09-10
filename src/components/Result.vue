<template>
  <div>
    <div v-for="pair in pairedPeople" :key="pair">{{ pair.originPerson.Name }}: {{ getLink(pair) }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import PairedPerson from '@/models/PairedPerson';
import { namespace as drawNamespace } from '@/store/modules/draw';
import { PairedPersonLinkfier } from '@/util/drawUtil';

@Component
export default class Result extends Vue {
  @Getter('pairedPeople', { namespace: drawNamespace })
  public pairedPeople!: PairedPerson[];

  public getLink(pair: PairedPerson) {
    return PairedPersonLinkfier.getUrl(pair);
  }
}
</script>

<style lang="less" scoped>
</style>