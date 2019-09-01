<template>
  <div>
    Language:
    <div
      class="language"
      v-for="lang in displayableLanguages"
      :key="lang"
      @click="setLanguage(lang)"
    >{{ lang }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { i18n, displayableLanguages } from '@/plugins/i18n';

@Component({})
export default class LanguageSelector extends Vue {
  public displayableLanguages: string[] = displayableLanguages;

  public setLanguage(lang: string) {
    i18n.locale = lang;
  }
}
</script>

<style lang="less" scoped>
.language {
  cursor: pointer;
  display: inline-block;
  background-color: #ddd;
  padding: 5px;

  + .language {
    margin-inline-start: 5px;
  }
}
</style>