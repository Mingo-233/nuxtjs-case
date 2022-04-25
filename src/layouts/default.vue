<template>
  <div>
    <div class="home-btn" id="dragbtn" v-drag @click="backHome">home</div>
    <nuxt />
  </div>
</template>
<script>
export default {
  methods: {
    backHome() {
      let isClick = document
        .getElementById("dragbtn")
        .getAttribute("data-flag");
      if (isClick !== "true") return;
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home-btn {
  position: fixed;
  top: 0;
  right: 0;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background: paleturquoise;
  cursor: pointer;
}
</style>
