<template>
  <div>
    <div v-if="hasResult">
      <div>Hi {{ originPerson.Name }}.</div>
      <div>Your secret santa is {{ pairedPerson.Name }}.</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Getter } from 'vuex-class';
import Person from '@/models/Person';
import { namespace as drawResultNamespace } from '@/store/modules/drawResult';
import DrawResultState from '../store/modules/drawResult/DrawResultState';
import PairedPerson from '../models/PairedPerson';
import Component from 'vue-class-component';

@Component
export default class Result extends Vue {
  @Getter('hasResult', { namespace: drawResultNamespace })
  public hasResult!: boolean;

  @Getter('originPerson', { namespace: drawResultNamespace })
  public originPerson: Person | undefined;

  @Getter('pairedPerson', { namespace: drawResultNamespace })
  public pairedPerson: Person | undefined;
}
</script>

<style lang="less" scoped>
</style>