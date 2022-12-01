<template>
  <div>
    <div class="masonry">
      <div v-for="(i, index) in imgArr" ref="imgs" :key="index" class="pic-item">
        <!-- <img class="item" :url="i" height="100%" width="100%" /> -->
        <img class="item" :src="i" height="100%" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      imgArr: [
        'https://test.yun.baoxiaohe.com/image/shed/d4db3e65-09c6-4d14-8149-54fa68b75406.jpeg',
        'https://test.yun.baoxiaohe.com/image/shed/39f0fb2b-7c5b-46ed-a7b7-91fb88ab6020.jpg',
        'https://test.yun.baoxiaohe.com/image/shed/d4db3e65-09c6-4d14-8149-54fa68b75406.jpeg',
        'https://test.yun.baoxiaohe.com/image/shed/d4db3e65-09c6-4d14-8149-54fa68b75406.jpeg',
        'https://test.yun.baoxiaohe.com/image/shed/e7ba2555-1703-481a-816e-73223f05fce1.jpg',
        'https://test.yun.baoxiaohe.com/image/shed/39f0fb2b-7c5b-46ed-a7b7-91fb88ab6020.jpg',
        'https://yun.baoxiaohe.com/render/20210323/c45057eb-1038-451e-9f72-431684135f8b0001.jpg',
        'https://yun.baoxiaohe.com/render/20210323/c45057eb-1038-451e-9f72-431684135f8b0001.jpg',
        'https://test.yun.baoxiaohe.com/image/shed/39f0fb2b-7c5b-46ed-a7b7-91fb88ab6020.jpg',
        'https://yun.baoxiaohe.com/render/20220602/26995230001.jpg',
        'https://test.yun.baoxiaohe.com/image/shed/39f0fb2b-7c5b-46ed-a7b7-91fb88ab6020.jpg',
        'https://yun.baoxiaohe.com/render/20220602/26995230001.jpg',
        'https://test.yun.baoxiaohe.com/image/shed/39f0fb2b-7c5b-46ed-a7b7-91fb88ab6020.jpg',
        'https://test.yun.baoxiaohe.com/image/shed/39f0fb2b-7c5b-46ed-a7b7-91fb88ab6020.jpg',

        'https://yun.baoxiaohe.com/render/20220602/26995230001.jpg',
      ],
    };
  },
  mounted() {
    const n = new Image();

    n.src = 'https://yun.baoxiaohe.com/render/20220602/26995230001.jpg';
    n.onload = () => {
      console.log('wanc');
      console.dir(n);
      console.log(n.width);
    };
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        // eslint-disable-next-line arrow-parens
        Array.from(this.$refs?.imgs).forEach(img => {
          const src = img.firstChild.getAttribute('src');
          const image = new Image();
          image.src = src;

          console.log(img);
          console.log(img.firstChild);
          const { width } = img.firstChild;
          image.onload = function () {
            const w = image.width;
            const h = image.height;
            const height = Math.round((h * width) / w);
            // eslint-disable-next-line no-param-reassign
            img.firstChild.src = src;
            // eslint-disable-next-line no-param-reassign
            img.style.gridRowEnd = `span ${~~(height / 10)}`;
          };
        });
      }, 100);
    },
  },
};
</script>

<style scoped lang="less">
.masonry {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; // 分为3列
  grid-column-gap: 24px; // 列间距5px
  // grid-auto-rows: 10px;
  .pic-item {
    // grid-row-start: auto;
    padding-bottom: 24px;
    img {
      border-radius: 8px;
    }
  }
}
</style>
