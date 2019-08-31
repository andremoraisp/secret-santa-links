<template>
  <div id="app">
    <LanguageSelector />
    <PeopleList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PeopleList from './components/PeopleList.vue';
import LanguageSelector from './components/LanguageSelector.vue';

@Component({
  components: {
    LanguageSelector,
    PeopleList,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
