<template>
  <div class="drawer-container">
    <div class="instructions">
      <p>Hi.</p>
      <p>Let's create our people list.</p>
      <p>Type the name of the participants below, one per line:</p>
    </div>
    <div>
      <textarea
        class="input-names"
        v-model="peopleNamesStr"
        placeholder="Names here,
one per line"
      />
    </div>
    <div class="btn-draw-container">
      <button class="btn-draw" @click="onDrawNamesClicked">
        <img src="/svg/039-sock.svg" alt="Christmas sock" />
        <span>Draw names!</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Mutation, Action, State } from 'vuex-class';
import { Draw, namespace } from '@/store/modules/draw';
import PairedPerson from '@/models/PairedPerson';
import { PairedPersonLinkfier } from '@/util/drawUtil';

@Component({
  components: {},
})
export default class Drawer extends Vue {
  public peopleNamesStr: string | null = null;

  public onDrawNamesClicked(event: MouseEvent) {
    this.$store.dispatch(`${namespace}/setPeopleAndDraw`, {
      peopleNames: this.peopleNamesStr,
    });
  }
}
</script>

<style lang="less" scoped>
.drawer-container {
  padding-left: 30px;
}

.instructions {
  font-size: 2em;
  // line-height: 80%;
  p {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
}

.input-names {
  width: 300px;
  height: 200px;
}

.btn-draw-container {
  margin-top: 15px;
}

.btn-draw {
  border: none;
  background-color: #61c6ad;
  padding: 15px;
  font-size: 1.5em;
  border-radius: 0.7em;
  box-shadow: 0px 3px 6px 0px #00000029;

  &:hover,
  &:active {
    cursor: pointer;
    img {
      animation: sock-shake 0.1s alternate infinite;
    }
  }

  img {
    height: 40px;
    transform: rotateZ(-15deg);
  }
  span {
    position: relative;
    bottom: 0.3em;
  }
}

@keyframes sock-shake {
  from {
    transform: rotateZ(-5deg);
  }
  to {
    transform: rotateZ(5deg);
  }
}
</style>