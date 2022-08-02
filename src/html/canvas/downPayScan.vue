<template>
  <div>
    <button @click="handle">down</button>
  </div>
</template>

<script>
import Vue from "vue";
import payScan from "./payscan.png";
import QRCode from "qrcode";

export default Vue.extend({
  name: "DownPayScan",
  data() {
    return {
      bgSrc: payScan,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const canvas = document.createElement("canvas");
      canvas.id = "posterCancas";
      canvas.width = 375;
      canvas.height = 667;
      const context = canvas.getContext("2d");
      const myImage = new Image();
      myImage.src = this.bgSrc; // 背景图片
      myImage.crossOrigin = "Anonymous";
      myImage.onload = async () => {
        console.log(myImage);
        context.drawImage(myImage, 0, 0, 375, 667);
        // 价格符号
        context.font = "12px PingFangSC";
        context.fillStyle = "#31363f";
        context.fillText("¥", 150, 298);
        // 价格
        context.font = "32px DINAlternate";
        context.fillStyle = "#31363f";
        context.fillText("800", 160, 298);

        // 支付类型提示
        context.font = "12px PingFangSC";
        context.fillStyle = "#989a9f";
        context.fillText("待支付设计款", 151, 323);

        // 虚线
        context.lineWidth = 1;
        context.strokeStyle = "#979797";
        context.beginPath();
        context.setLineDash([3, 3]);
        context.moveTo(60, 350);
        context.lineTo(315, 350);
        context.stroke();

        const myImage2 = new Image();
        myImage2.crossOrigin = "Anonymous";

        const urlCode = await QRCode.toDataURL("https://www.baoxiaohe.com");
        myImage2.src = urlCode;

        myImage2.onload = () => {
          context.drawImage(myImage2, 95, 374, 193, 190);
        };
      };
      document.body.appendChild(canvas);
    },
    handle() {
      let canvas = document.querySelector("canvas");
      const base64 = canvas.toDataURL("image/png");
      const blob = this.base64ToBlob(base64);
      const aLink = document.createElement("a");
      console.log(blob);
      aLink.download = Date.now();
      aLink.href = URL.createObjectURL(blob);
      aLink.click();
    },
    base64ToBlob(code) {
      const parts = code.split(";base64,");
      const contentType = parts[0].split(":")[1];
      const raw = window.atob(parts[1]);
      const rawLength = raw.length;
      const uInt8Array = new Uint8Array(rawLength);
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], {
        type: contentType,
      });
    },
  },
});
</script>

<style scoped lang="less"></style>
