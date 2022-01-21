<template>
  <div class="animation">
      <div class="box">
    <div class="aa1">1</div>
    <!-- <div class="aa2">2</div>
    <div class="aa3">3</div> -->
      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: require("@/assets/bg1.png"),
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.animation {
  height: 400px;
  border: 1px solid black;
  .box{
  each(range(3),{
        .aa@{value}{
            height: (@value *70px);
            background: url("@/assets/bg@{value}.png") no-repeat
        }
    });
  }


  @keyframes bubble_y {
    0% {
      margin-bottom: 0;
    }
    100% {
      margin-bottom: 400px;
    }
  }
}
</style>
