
import bg1 from'@/assets/bg1.png';
/**
 * >=min && <=max
 * @param min 
 * @param max 
 */
 function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

class ThumbsUpAni{
    constructor(canvasId, canvasScale) {
        const canvas = document.getElementById(canvasId);
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvasScale = canvasScale;
        this.img = null;
        this.loadImages();
      }
      loadImages = () => {
        const p = new Promise((resolve=> {
          const img = new Image();
          img.onerror = () => resolve(img);
          img.onload = () => resolve(img);
          img.src = likeSprites;
        }));
        p.then((img) => {
          if (img && img.width > 0) {
            this.img = bg1;
          } else {
            console.error('[live-connect]预加载喜欢动效图片失败');
          }
        });
      };
      
}

/** 图片显示宽高 */
const IMAGE_WIDTH = 30;

/** 图片原始宽高 */
const SOURCE_IMAGE_WIDTH = 144;

/** 图片数量 */
const IMG_NUM = 8;

/** 放大阶段（百分比）*/
const ENLARGE_STAGE = 0.1;

/** 收缩渐隐阶段（百分比）*/
const FADE_OUT_STAGE = 0.8;
// 起始位置
const basicX = this.width / 2;

// 正弦频率
const frequency = random(2, 10);

// 正弦振幅
const amplitude = random(5, 20) * (random(0, 1) ? 1 : -1) * this.canvasScale;

/**
 * 获取横向位移（x轴）
 */
const getTranslateX = (progress) => {
  if (progress < ENLARGE_STAGE) {
    // 放大期间，不进行摇摆位移
    return basicX;
  }
  return basicX + amplitude * Math.sin(frequency * (progress - ENLARGE_STAGE));
};

/**
 * 获取竖向位移（y轴）
 */
const getTranslateY = (progress) => {
  return IMAGE_WIDTH / 2 + (this.height - IMAGE_WIDTH / 2) * (1 - progress);
};