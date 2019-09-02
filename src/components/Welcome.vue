<template>
  <div class="container">
    <FaceAnimation class="face" />
    <div class="messages-container">
      <div class="messages">
        <div class="message message-d-1">Hi!</div>
        <div class="message message-d-3">Are you asghaebdf?</div>
        <div class="message message-d-4 message-h-2">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import FaceAnimation from './FaceAnimation.vue';

@Component({
  components: { FaceAnimation },
})
export default class Welcome extends Vue {}
</script>

<style lang="less" scoped>
.container {
  display: block;
  position: relative;
  height: 300px;

  .face {
    display: inline-block;
  }

  .messages-container {
    display: inline-block;
    margin-left: 20px;

    position: relative;
    bottom: 50%;
    transform: translateY(50%);

    .messages {
      //   position: relative;
      //   bottom: 50%;

      .message {
        font-size: 16pt;
        border: 1px solid #0003;
        border-radius: 5px;
        padding: 5px 20px;
        overflow: hidden;
        height: 0px;
        opacity: 0;
        box-sizing: border-box;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
        animation-name: messageAppearH1;

        + .message {
          margin-top: 3px;
        }

        &.message-h-2 {
          animation-name: messageAppearH2;
        }

        &.message-d-1 {
          animation-delay: 1s;
        }
        &.message-d-3 {
          animation-delay: 3s;
        }
        &.message-d-4 {
          animation-delay: 4s;
        }
      }
    }
  }
}

@keyframes messageAppearH1 {
  to {
    height: 1.5em;
    opacity: 1;
  }
}
@keyframes messageAppearH2 {
  to {
    height: 3em;
    opacity: 1;
  }
}
</style>
