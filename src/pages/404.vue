<template>
  <div class="container">
    <p>404 page</p>
    <!-- <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link> -->
  </div>
</template>

<script>
var a = require("debug")("worker:a"),
  b = require("debug")("worker:b");
export default {
  layout: "not-found",
  mounted() {
    console.log('??');
    console.log(a);
    function work() {
      a("doing lots of uninteresting work");
      setTimeout(work, Math.random() * 1000);
    }

    work();

    function workb() {
      b("doing some work");
      setTimeout(workb, Math.random() * 2000);
    }

    workb();
  },
};
</script>
