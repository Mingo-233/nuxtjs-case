<template>
  <div>
    hi, this is vuex test page
    <!-- <a-button type="danger">
      Danger
    </a-button> -->
    <Upload accept="image/png" multiple @change="handleUploadBefore">
      <Button>Click to Upload </Button>
    </Upload>
    <Button type="danger">Danger</Button>
    <a-carousel arrows>
      <div
        slot="prevArrow"
        slot-scope="props"
        class="custom-slick-arrow"
        style="left: 10px; z-index: 2"
      >
        <a-icon type="left-circle" />
      </div>
      <div
        slot="nextArrow"
        slot-scope="props"
        class="custom-slick-arrow"
        style="right: 10px"
      >
        <a-icon type="right-circle" />
      </div>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </a-carousel>
  </div>
</template>

<script lang="ts">
import { Button, Upload, Icon, Carousel } from "ant-design-vue";

export default {
  components: {
    Button,
    Upload,
    aIcon: Icon,
    aCarousel: Carousel,
  },
  methods: {
    handle() {},
    handleUploadBefore(a: any) {
      console.log(a);

      console.log(arguments);
      const { file, fileList } = a;

      console.log(file.status);
    },
  },
};
</script>

<style lang="less" scoped>
.ant-carousel /deep/ .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel /deep/ .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel /deep/ .custom-slick-arrow:before {
  display: none;
}
.ant-carousel /deep/ .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel /deep/ .slick-slide h3 {
  color: #fff;
}
</style>
