<template>
  <div>
    1
    <a-tooltip
      trigger="click"
      :color="msg"
      overlay-class-name="priceDisparityTooltip"
    >
      <template #title>prompt text</template>
      Tooltip will show when mouse enter.
    </a-tooltip>
    <div id="components-a-tooltip-demo-color">
      <a-divider orientation="left">Presets</a-divider>
      <div>
        <a-tooltip
          v-for="color in colors"
          :key="color"
          title="prompt text"
          :color="color"
        >
          <a-button>{{ color }}</a-button>
        </a-tooltip>
      </div>
      <a-divider orientation="left">Custom</a-divider>
      <div>
        <a-tooltip
          v-for="color in customColors"
          :key="color"
          title="prompt text"
          :color="color"
        >
          <a-button>{{ color }}</a-button>
        </a-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
const colors = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "geekblue",
  "magenta",
  "volcano",
  "gold",
  "lime",
];
const customColors = ["#f50", "#2db7f5", "#87d068", "#108ee9"];
export default {
  name: "",
  data() {
    return {
      msg: "#108ee9",
      colors: colors,
      customColors,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less">
.priceDisparityTooltip {
  .ant-tooltip-content {
    .ant-tooltip-arrow::before {
      background: rgba(0, 0, 0, 0.5);
    }
    .ant-tooltip-inner {
      font-size: 12px;
      font-family: PingFangSC, PingFangSC-Regular;
      background: rgba(0, 0, 0, 0.5);
      color: #ffffff;
    }
  }
}
</style>
