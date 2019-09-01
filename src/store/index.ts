import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { Draw } from './modules/draw/index';
import { DrawResult } from './modules/drawResult/index';

Vue.use(Vuex);

const store: StoreOptions<{}> = {
  modules: {
    Draw,
    DrawResult,
  },
};

export default new Vuex.Store<{}>(store);
