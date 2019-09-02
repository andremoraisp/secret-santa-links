<template>
  <div>
    <div class="face-animation">
      <div class="head">
        <div class="face">
          <div class="eyes">
            <div class="eye"></div>
            <div class="eye"></div>
          </div>
          <div class="mouth">
            <div class="lips"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default class FaceAnimation extends Vue {}
</script>

<style lang="less" scoped>
@size: 300px;
.face-animation {
  display: inline-block;
  position: relative;
  width: @size;
  height: @size;
}
.head {
  @faceSize: @size;
  position: absolute;
  left: 0;
  display: inline-block;
  background-color: #f7f7f7;
  background-color: #c1ddff;
  width: @faceSize;
  height: @faceSize;
  border-radius: 50%;
  animation: headScale 0.5s, headPerspective 1s ease-out;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  perspective-origin: 50% 50%;

  .face {
    width: 100%;
    height: 100%;
    perspective: 1000px;
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;
    animation: faceInitialRotation 1s, faceTilt 15s 5s infinite;
    // transform: rotate3d(0, 0, 0, 20deg);

    .eyes {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateZ(120px);
      .eye {
        @eye-size: 10px;
        display: inline-block;
        background-color: #000;
        width: @eye-size;
        height: @eye-size;
        border-radius: 50%;
        animation: eyeBlink 9s infinite;
        + .eye {
          margin-left: 20%;
        }
      }
    }

    .mouth {
      @proportion: 0.5;
      @mouthSize: @faceSize * @proportion;
      position: absolute;
      bottom: 20%;
      left: calc(50% - @mouthSize / 2);
      .lips {
        border-radius: 50%;
        border: 3px solid black;
        // border-top-color: transparent;
        // border-left-color: transparent;
        // border-right-color: transparent;
        width: @mouthSize;
        height: @mouthSize;
        animation: smile 7s infinite;
        transform-origin: 50% 100%;
        clip-path: polygon(50% 50%, 100% 100%, 0% 100%);
      }
      transform: translateZ(110px);
    }
  }
}

@keyframes headPerspective {
  from {
    perspective-origin: 50% 20%;
  }
  to {
    perspective-origin: 50% 50%;
  }
}

@keyframes headScale {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes faceInitialRotation {
  from {
    transform: rotateY(-75deg) rotateX(-15deg);
  }
  to {
    transform: rotateY(0deg) rotateX(0deg);
  }
}

@keyframes faceTilt {
  0% {
    transform-origin: 50% 50%;
    transform: rotate3d(0, 0, 0, 10deg);
  }
  2%,
  10% {
    transform-origin: 50% 50%;
    transform: rotate3d(-1, 5, 0, 10deg);
  }
  12%,
  100% {
    transform-origin: 50% 50%;
    transform: rotate3d(0, 0, 0, 10deg);
  }
}

@keyframes eyeBlink {
  0% {
    transform: scaleY(1);
  }
  1% {
    transform: scaleY(0);
  }
  2%,
  5% {
    transform: scaleY(1);
  }
  5.5% {
    transform: scaleY(0);
  }
  6%,
  50% {
    transform: scaleY(1);
  }
  50.5% {
    transform: scaleY(0);
  }
  51%,
  100% {
    transform: scaleY(1);
  }
}

@keyframes smile {
  0%, 50% {
    clip-path: polygon(50% 50%, 100% 100%, 0% 100%);
  }
  55%, 75% {
    clip-path: polygon(50% 50%, 105% 100%, -5% 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 100% 100%, 0% 100%);
  }
}
</style>