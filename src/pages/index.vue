<template>
  <div class="main">
    <div class="route-box">
      <div
        class="route"
        v-for="route in routers"
        :key="route._name"
        @click="go(route.path)"
      >
        <div>{{ route.name }}</div>
      </div>
    </div>
  </div>
  <!-- <Tutorial /> -->
</template>

<script>
// import js from "~/store/index.js";
import routerInfoJson from "@/routes.json";

export default {
  name: "IndexPage",
  components: {},
  data() {
    return {
      routers: [],
    };
  },
  methods: {
    initRouter() {
      console.log(routerInfoJson);
      this.routers = routerInfoJson;
    },
    go(path) {
      console.log(path);
      this.$router.push(path);
    },
  },
  mounted() {
    this.initRouter();
  },
};
</script>

<style lang="less" scoped>
.main {
  .route-box {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    // grid-template-rows: 200px;
    grid-row-gap: 30px;
    .route {
      width: 200px;
      height: 100px;
      line-height: 100px;
      border: 1px solid greenyellow;
      cursor: pointer;
      font-size: 20px;
      text-align: center;
    }
  }
}
</style>
