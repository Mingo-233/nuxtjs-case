<template>
  <div ref="HotTheme" class="HotTheme">
    <div class="h1-title flex flex-between item-center">
      <span>热门专题 </span>
    </div>
    <div class="themeRow">
      <div class="ad-container">
        <div
          class="adBox"
          :style="{
            backgroundImage: `url(${adImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }"
          @click="themeClickHandle(adImgInfo)"
        ></div>
      </div>
      <div class="theme-container">
        <div :class="['HotThemeBoxs', time ? '' : 'HotThemeIntoFromRight']">
          <div
            v-for="(item, index) in themeList"
            :key="item.topicId"
            class="HotThemeBox"
            :style="{
              background: `url(${item.showImageUrl}?imageView2/0/w/385/h/166/q/90|imageslim)`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: item.titleColor
            }"
            @click="themeClickHandle(item)"
          >
            <div class="themeTitle">
              {{ item.title }}
              <img style="margin-left: 8px" :src="themeArrowImg[index]" alt="" />
            </div>
            <div class="subTitle">{{ item.subTitle }}</div>
            <div class="themeImgs">
              <img
                v-for="tempImg in item.showTemplates"
                :key="tempImg.id"
                :src="tempImg.showImageUrl + '?imageView2/0/w/90/h/68/q/100'"
                class="img"
                @click.stop="templateClickHandle(tempImg)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 动画遮罩层 -->
    <div v-if="hasLongBanner && longBannerVisable" class="longBanner" @click="themeClickHandle">
      <img :src="longBannerImg" alt="" />
      <div v-if="!time" class="modelCover HotThemeShrinkFromRight"></div>
      <div v-show="time" class="timer">{{ time }}s</div>
    </div>
  </div>
</template>
<script lang="ts">
// import { AnyObject } from '@vue/composition-api/dist/types/basic';
// import { thumbImg } from '~/utils';
export default {
  name: 'HotTheme',
  props: {
    homeData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      adImgInfo: {},
      themeList: [],
      time: 3,
      longBannerVisable: true,
      themeArrowImg: [
        '//yun.baoxiaohe.com/templateTheme/themeArrow.png',
        '//yun.baoxiaohe.com/templateTheme/themeArrow2.svg',
        '//yun.baoxiaohe.com/templateTheme/themeArrow3.svg'
      ]
    };
  },
  computed: {
    adImage() {
      return (this as any).adImgInfo.showImageUrl
    },
    longBannerImg() {
      return(this as any).adImgInfo.bigShowImageUrl
    },
    hasLongBanner() {
      return (this as any).adImgInfo.isSlide;
    }
  },
  mounted() {
    (this as any).getHotThemeConfig();

    // (this as any).intersectionObserver(document);
  },
  methods: {
    async getHotThemeConfig() {
      try {
        const { data = [] } = await (this as any).$api.getPageConfig({ key: 'home_temp_topic' });
        if (!data) return;
        // 第一个为广告图片
        (this as any).adImgInfo = data[0] || {};
        // 后三个为主题信息
        (this as any).themeList = (data as any).slice(1, 4);
        // console.log(this.adImgInfo);
        // console.log(this.themeList);
      } catch (error) {
        console.error(error);
      }
    },
    intersectionObserver(doc: HTMLElement) {
      // 获取目标元素
      const target = doc.querySelector('.HotTheme');
      // 获取根元素
      const root = doc.querySelector('.layout-content');
      const callback = (entries: any, observer: any) => {
        if (entries[0].isIntersecting) {
          this.timeCountDown();
          // 动画完成移除监听
          if (target === null) return;
          myObserver.unobserve(target);
        }
      };
      const options = {
        root,
        rootMargin: '0px 0px 0px 0px',
        threshold: [1],
        trackVisibility: true,
        delay: 100
      };
      // 创建观察器
      const myObserver = new IntersectionObserver(callback, options);
      // 开始监听目标元素
      if (target === null) return;
      myObserver.observe(target);
    },
    timeCountDown() {
      const timer = setInterval(() => {
        (this as any).time--;
        if ((this as any).time <= 0) {
          clearInterval(timer);
        }
      }, 1000);
      // 动画结束后，关闭长图遮罩层
      setTimeout(() => {
        (this as any).longBannerVisable = false;
      }, 3800);
    },
    themeClickHandle(current:any) {
      console.log(current);
      const { type, topicId } = current;
      // 模板专题
      if (type === 'topic') {
        // this.$sensors?.track('hot_theme_click', {
        //   topicId
        // });
        window.open(`/template-theme/${topicId}`);
      } else {
        const { linkUrl } = (this as any).adImgInfo;
        window.open(linkUrl);
      }
    },
    templateClickHandle(current:any) {
      const { id } = current;
      window.open(`templates/${id}`);
    }
  }
};
</script>
<style lang="less" scoped>
.HotTheme {
  min-width: 970px;
  margin: 30px 0 54px;
  position: relative;
  .themeRow {
    display: flex;
    justify-content: center;
    min-width: 942px;
    width: 100%;
    margin-top: 20px;
    height: 100%;
    max-height: 166px;
    box-sizing: border-box;
    .ad-container {
      width: 25%;
      padding-right: 24px;

      cursor: pointer;
      .adBox {
        max-width: 385px;
        width: 100%;
        height: 100%;
        max-height: 166px;

        border-radius: 4px;
        &:hover {
          // box-shadow: 0px 4px 20px 0px rgb(0 0 0 / 5%);
          margin-top: -4px;
        }
      }
    }
    .theme-container {
      width: 75%;
      .HotThemeBoxs {
        display: flex;
        height: 100%;
        box-sizing: border-box;
        // justify-content: space-evenly;
        cursor: pointer;
        .HotThemeBox {
          max-width: 385px;
          width: 33%;
          height: 100%;
          max-height: 166px;
          padding: 0 16px 16px;
          margin-right: 24px;

          &:hover {
            // box-shadow: 0px 4px 20px 0px rgb(0 0 0 / 5%);
            margin-top: -4px;
          }
          .themeTitle {
            display: flex;
            align-items: center;
            padding-top: 20px;
            // padding-top: 12%;
            font-size: 18px;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
          }

          .subTitle {
            // padding-top: 10px;
            padding-top: 2%;
            opacity: 0.7;
            font-size: 14px;
            font-family: PingFangSC, PingFangSC-Regular;
          }
          .themeImgs {
            display: flex;
            justify-content: space-between;
            margin: 8px 0 0;
            max-height: 68px;
            height: 100%;
            .img {
              width: 100%;
              // max-width: 90px;
              max-width: 108px;
              height: 100%;
              max-height: 68px;
              margin-right: 8px;
              object-fit: none;
              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }

  .longBanner {
    width: 100%;
    min-width: 1130px;
    height: 166px;
    position: absolute;
    bottom: 0;
    img {
      width: 100%;
      height: 166px;
      border-radius: 4px;
    }
    .modelCover {
      width: 100%;
      height: 166px;
      position: absolute;
      bottom: 0;
      background: rgb(254, 254, 254);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.6) 0%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.8) 80%,
        rgba(255, 255, 255, 0.9) 100%
      );
    }
    .timer {
      position: absolute;
      width: 40px;
      height: 20px;
      line-height: 20px;
      top: 10px;
      right: 10px;
      color: #fff;
      text-align: center;
      background: rgb(0, 0, 0, 0.2);
    }
  }

  @media screen and (max-width: 1299px) {
    .themeRow {
      .themeTitle {
        font-size: 14px !important ;
        margin-top: 6% !important;
      }
      .subTitle {
        font-size: 12px !important ;
        padding-top: 0 !important;
      }
      .themeImgs {
        margin: 0;
        img {
          width: 30% !important;
          height: 55% !important;
        }
      }
    }
  }

  @media screen and (min-width: 1300px) and (max-width: 1680px) {
    .themeRow {
      .themeTitle {
        margin-top: 6% !important;
      }
      .subTitle {
        font-size: 12px !important ;
        padding-top: 0 !important;
      }
      .themeImgs {
        margin: 0;
        img {
          width: 30% !important;
          height: 60% !important;
        }
      }
    }
  }
}
</style>
<style lang="less">
.HotThemeIntoFromRight {
  animation: intoFromRight 1.2s linear 0s;
}
.HotThemeShrinkFromRight {
  animation: shrinkFromRight 1.2s linear 0s forwards;
}
.HotTheme {
  @keyframes intoFromRight {
    0% {
      position: relative;
      z-index: 10;
      width: 1600px;
      background: rgb(246, 246, 246);
      transform: translate(1110px);
    }
    60% {
      position: relative;
      z-index: 10;
      width: 1600px;

      background: rgb(246, 246, 246);
      transform: translate(-50px);
    }
    90% {
      position: relative;
      z-index: 10;
      width: 1600px;
      background: rgb(246, 246, 246);
      transform: translate(50px);
    }
    100% {
      position: relative;
      z-index: 10;
      background: rgb(246, 246, 246);
      transform: translate(0);
    }
  }
  @keyframes shrinkFromRight {
    0% {
      width: 150%;
    }
    100% {
      width: 385px;
    }
  }
}
</style>
