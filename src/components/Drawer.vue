<template>
  <div>
    <button @click="completeList()">{{$t('drawer.button.completeList')}}</button>
    <button @click="startDraw()">{{$t('drawer.button.startDraw')}}</button>
    <div class="draw-result">
      <div v-if="isDrawDone">
        <span>Done!</span>
        <div v-for="(pair, index) in pairedPeople" :key="index">
          <div>{{ pair.originPerson.Name }}</div>
          <div>
            <a :href="buildLink(pair)" target="_blank">{{ buildLink(pair) }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Mutation, Action, State } from 'vuex-class';
import { Draw, namespace } from '@/store/modules/draw';
import PairedPerson from '../models/PairedPerson';
import { PairedPersonLinkfier } from '@/util/drawUtil';

@Component
export default class Drawer extends Vue {
  @Mutation('completeList', { namespace }) public completeList!: void;
  @Action('startDraw', { namespace }) public startDraw!: void;
  @State('isDrawDone', { namespace }) public isDrawDone!: boolean;
  @State('pairedPeople', { namespace }) public pairedPeople!: PairedPerson[];

  public buildLink(pair: PairedPerson): string {
    return PairedPersonLinkfier.getUrl(pair);
  }
}
</script>

<style lang="less" scoped>
</style>