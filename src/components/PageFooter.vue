<template>
  <footer class="footer-container">
    <div class="left">
      <span>
        Made by
        <strong>André Morais Pompermayer</strong>
      </span>
      <a href="https://www.linkedin.com/in/andrepompermayer/" target="_blank">
        <i class="fab fa-linkedin"></i> LinkedIn
      </a>
      <a href="https://github.com/andremoraisp/secret-santa-links" target="_blank">
        <i class="fab fa-github"></i> GitHub
      </a>
    </div>
    <div class="right">
      <div class="icons-reference">
        Icons made by
        <a
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
          target="_blank"
        >Freepik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PageFooter extends Vue {}
</script>

<style lang="less" scoped>
.footer-container {
  padding: 2px 10px;
  background-color: #ffe0b1;
  font-size: 0.8em;
  color: #0009;

  a {
    color: #0009;
    text-decoration: none;
    &:hover {
      color: #000f;
    }
  }
  .left {
    float: left;
    * + * {
      margin-left: 20px;
    }
  }
  .right {
    float: right;
  }
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}
</style>