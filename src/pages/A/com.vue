<template>
  <div :style="{ top, left }" class="box" v-show="visiable">
    <div v-if="triangleDirection === 'left'" class="l-triangle-part">
      <div class="left-triangle" :style="{ top: triangleTop }"></div>
    </div>
    <div v-if="triangleDirection === 'right'" class="r-triangle-part">
      <div class="right-triangle" :style="{ top: triangleTop }"></div>
    </div>
    <div class="code"></div>
    <div class="txt-part">
      <div>扫一扫</div>
      <div>添加小秘书自动领取</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "com",
  data() {
    return {
      visiable: false,
      top: "10px ",
      left: "30px ",
      triangleDirection: "right",
      triangleTop: "25px",
    };
  },
};
</script>

<style scoped lang="less">
.box {
  position: absolute;
  background-color: #f50;
  width: 140px;
  height: 186px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
  .l-triangle-part {
    overflow: hidden;
    position: absolute;
    width: 13px;
    height: 100%;
    left: -12px;
    .left-triangle {
      position: absolute;
      top: 10px;
      left: 0px;
      display: block;
      width: 12px;
      height: 12px;
      background: white;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
      transform: translateX(50%) rotate(45deg);
    }
  }
  .r-triangle-part {
    overflow: hidden;
    position: absolute;
    width: 13px;
    height: 100%;
    right: -12px;
    .right-triangle {
      position: absolute;
      top: 10px;
      right: 0px;
      display: block;
      width: 12px;
      height: 12px;
      background: white;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
      transform: translateX(-50%) rotate(45deg);
    }
  }
  //   &::after {
  //     content: "";
  //     position: absolute;
  //     top: 10px;
  //     left: -24px;
  //     display: block;
  //     width: 0px;
  //     // box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);

  //     border: transparent solid 12px;
  //     border-right: white solid 12px;
  //   }
  .code {
    position: relative;
    z-index: 10;
    width: 120px;
    height: 120px;
    margin: 10px;
    background: papayawhip;
  }
  .txt-part {
    text-align: center;
    font-size: 12px;
    font-family: PingFangSC, PingFangSC-Regular;
    color: #6c7076;
    line-height: 20px;
  }
}
</style>
