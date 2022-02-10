<template>
  <div class="css-demo">
    <div class="banner">banner</div>
    <div class="content">
      aa
    </div>
  </div>
</template>

<script>

export default {
  name: 'css-demo',
  methods: {

  },
};
</script>

<style lang="less" scoped>
.css-demo {
  margin: 0;
  padding: 0;
  .banner {
    position: fixed;
    width: 100%;
    background-color: antiquewhite;
  }
  .content {
    height: 1500px;
    width: 100%;
    background: #ddd;
  }
}
</style>

<style>
body {
  margin: 0;
}
</style>