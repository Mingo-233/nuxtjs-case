<template>
  <div>
    <!-- <button @click="getQrcode">生成</button> -->
    <button @click="handle">下载</button>
    <button @click="WxShareTipVisible = true">打开</button>
    <!-- <img :src="qrcodeUrl" alt="" /> -->
    <!-- <img :src="canvansUrl" alt="" /> -->
    <!-- <share-image :visible="WxShareTipVisible"
                 :sharePicture="posterImgUrl"
                 @close="WxShareTipVisible = false" /> -->
  </div>
</template>

<script>
import QRCode from "qrcode";
import qs from "qs";
// import shareImage from "@/views/activity/inviteActivity/components/WxShareTip.vue";

export default {
  name: "",
  data () {
    return {
      qrcodeUrl: "",
      canvansUrl: "",
      WxShareTipVisible: false,
      posterImgUrl: "",
    };
  },
  components: {
    // shareImage,
  },
  methods: {
    async getQrcode () {
      let url = "https://" + window.location.host.replace("www.", "");
      if (
        url.includes("localhost") ||
        url.includes("127.0.0.1") ||
        url.includes("baoxiaohe.fun")
      ) {
        url = "https://m.baoxiaohe.fun";
      } else {
        url = "https://m.baoxiaohe.com";
      }
      const res = await QRCode.toDataURL(
        `${url}/activity/inviteActivity/inviteShare`
      );
      this.qrcodeUrl = res;

      return res;
    },
    base64ToBlob (code) {
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
    init () {
      const canvas = document.createElement("canvas");
      canvas.id = "posterCancas";
      canvas.width = 375;
      canvas.height = 621;
      const context = canvas.getContext("2d");
      context.fillStyle = "#DBA293";
      // context.fill();
      const myImage = new Image();
      myImage.src = "//yun.baoxiaohe.com/activity/inviteActivity/poster.webp"; // 背景图片
      myImage.crossOrigin = "Anonymous";
      myImage.onload = () => {
        context.drawImage(myImage, 0, 0, 375, 621);
        context.font = "13px serif";
        context.fillText("你的好友姜姜", 85, 520);

        const myImage2 = new Image();
        myImage2.src = this.qrcodeUrl;
        console.log(this.qrcodeUrl);
        myImage2.crossOrigin = "Anonymous";
        myImage2.onload = () => {
          context.drawImage(myImage2, 80, 190, 220, 220);

          const base64 = canvas.toDataURL("image/png");
          // const blob = this.base64ToBlob(base64);
          console.log(base64);
          this.canvansUrl = base64;
        };

        // const base64 = canvas.toDataURL("image/png");
        // const aLink = document.createElement("a");
        // const blob = this.base64ToBlob(base64);
        // // const blob = base64ToBlob(this.qrcode); // new Blob([content]);
        // const evt = document.createEvent("HTMLEvents");
        // evt.initEvent("click", true, true); // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
        // aLink.download = Date.now();
        // aLink.href = URL.createObjectURL(blob);
        // aLink.click();
      };
      document.body.appendChild(canvas);
    },
    handle () {
      var canvas = document.getElementById("posterCancas");
      const base64 = canvas.toDataURL("image/png");
      const aLink = document.createElement("a");
      const blob = this.base64ToBlob(base64);
      // const blob = base64ToBlob(this.qrcode); // new Blob([content]);
      const evt = document.createEvent("HTMLEvents");
      evt.initEvent("click", true, true); // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
      aLink.download = Date.now();
      aLink.href = URL.createObjectURL(blob);
      aLink.click();
    },
    handledown () {
      const aLink = document.createElement("a");
      let img = document.querySelector("img");
      const blob = this.base64ToBlob(img.src);
      aLink.href = URL.createObjectURL(blob);

      // console.log(img.src);
      // aLink.href = img.src;
      aLink.click();
    },
    // 将信息绘制canvas再转化为图片
    getPosterUrl (shareConfig) {
      return `https://canvas.xinshu.me/generate/laodaixin?${shareConfig}`;
    },
    // 地址信息转为二维码
    getQrcodeUrl (url) {
      return `https://canvas.xinshu.me/qrcode/?string=${url}`;
    },
    scan () {
      let params = qs.stringify({
        nickName: "mm",
        avatar:
          "https://cdn.baoxiaohe.com/7bb738b3-3c05-4a06-bbac-4616cacd26e6.png",
        qrcode: this.getQrcodeUrl(
          encodeURIComponent("https://www.baoxiaohe.com")
        ),
      });

      console.log(params);
      // this.canvansUrl = this.getPosterUrl(params);
      this.posterImgUrl = this.getPosterUrl(params);
    },
  },
  async mounted () {
    await this.getQrcode();
    this.init();
    // this.scan();
  },
};
</script>

<style scoped></style>
