<template>
  <div class="css-demo">
    <div class="banner" :style="{background:`url(//yun.baoxiaohe.com/static/temp_show_img2-1.png?imageView2/0/w/385/h/166/q/90|imageslim)`}">banner</div>
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
    height: 100px;
    background-image: url("//yun.baoxiaohe.com/static/temp_show_img2-1.png?imageView2/0/w/385/h/166/q/90|imageslim");
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