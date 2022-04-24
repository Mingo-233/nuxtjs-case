<template>
  <div>git reset --soft

    <div>
      <Button type="primary"
              @click="show = !show">11122</Button>
      <Button type="primary"
              @click="handle">confirm</Button>


              <!-- <van-tabs v-model="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs> -->
      <Dialog v-model="show"
              title="标题"
              show-cancel-button>
      </Dialog>
    </div>
  </div>
</template>

<script lang="ts">
const customColors = ["#f50", "#2db7f5", "#87d068", "#108ee9"];
import { Button, Dialog } from "vant";
export default {
  name: "",
  components: {
    Button,
    Dialog: Dialog.Component,
  },
  data() {
    return {
      msg: "#108ee9",
      colors: "",
      customColors,
      show: false,
      active:true
    };
  },
  methods: {
    handle(){
      Dialog.confirm({
  title: '标题',
  message: '弹窗内容',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
    }
  },
  mounted() {},
};
</script>

<style lang="less">
.priceDisparityTooltip {
}
</style>
