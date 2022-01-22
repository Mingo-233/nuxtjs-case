<template>
  <div>
    <div class="animation">
      <div class="box">
        <!-- <div class="bg1"></div> -->
        <!-- <div class="bg2"></div>
      <div class="bg3"></div> -->
        <button @click="handle">点赞</button>
      </div>
    </div>
    <div class="animation">
      <canvas
        id="thumsCanvas"
        width="200"
        height="400"
        style="width: 100px; height: 200px"
      ></canvas>
    </div>
  </div>
</template>

<script>
import '@/utils/canvas.js'
export default {
  name: "animation",
  data() {
    return {
      img1: require("@/assets/bg1.png"),
    };
  },
  methods: {
    handle() {
      const num = Math.floor(Math.random() * 5) + 3;
      for (let i = 0; i < num; i++) {
        this.createPic();
      }
    },
    createPic() {
      let box = document.querySelector(".box");
      const d = document.createElement("div");
      const randromIndex = Math.floor(Math.random() * 6) + 1;
      d.className = `bg${randromIndex}`;
      box.appendChild(d);
      setTimeout(() => {
        box.removeChild(d);
      }, 3000);
    },
  },
};
</script>

<style lang="less">
.animation {
  width: 300px;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: row-reverse;
  .box {
    width: 80px;
    height: 100%;
    position: relative;
    text-align: right;
    each(range(6),{
        .bg@{value}{
          @i:@value;
          // @bubble_x:bubble_swing_@{value};
            position: absolute;
            height: 40px;
            width: 40px;
            bottom: 0;
            left: 20px;
            background: url("@/assets/bg@{value}.png") no-repeat;
            background-size: 40px;
            animation: bubble_y (1.5+ @i* 0.5s) ease-in 0s forwards, bubble_swing_1 (1.5 + @i * 0.5s) ease-in 0s forwards;
        }
    });
  }

  @keyframes bubble_y {
    0% {
      bottom: 0;
      transform: scale(1);
      opacity: 0;
    }
    5% {
      transform: scale(1.5);
      opacity: 1;
    }
    80% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      bottom: 400px;
      transform: scale(0.8);
      opacity: 0;
    }
  }
  @keyframes bubble_swing_1 {
    0% {
      // 中间
      left: 20px;
    }
    25% {
      // 最左
      left: 0px;
    }
    75% {
      // 最右
      left: 40px;
    }
    100% {
      left: 20px;
    }
  }
  // 任意轨迹
  @keyframes bubble_swing_2 {
    0% {
      // 中间
      left: 20px;
    }
    33% {
      // 最左
      left: 0px;
    }
    100% {
      // 随机位置
      left: 26px;
    }
  }

  // 简谐反向
  @keyframes bubble_swing_3 {
    0% {
      // 中间
      left: 20px;
    }
    25% {
      // 最右
      left: 40px;
    }
    75% {
      // 最左
      left: 0px;
    }
    100% {
      left: 20px;
    }
  }
}
</style>
