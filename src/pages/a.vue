<template>
  <div>
    <!-- <div class="box"> -->
      <div class="top">
        <a-button type="primary"> Primary </a-button>
        <a-popover title="Title" :getPopupContainer="getPopupContainer" trigger="click">
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <a-button type="primary"> Hover me </a-button>
        </a-popover>
      </div>
    <!-- </div> -->

    <div class="section">
      <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "a",
  methods: {
      getPopupContainer(){
          return document.querySelector('.top')
      }
  },
};
</script>
<style lang="less" scoped>
// .box {
//   height: 100px;

//   .top {
//     position: fixed;
//     display: flex;
//     align-items: center;
//     width: 100%;
//     height: 100px;
//     background: brown;
//   }
// }
  .top {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    background: brown;
  }
.section {
  width: 100%;
  height: 2500px;
  background: burlywood;
}
</style>
