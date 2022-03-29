/**
 * IntersectionObserver 配置的回调函数触发时机
1. Observer 第一次监听目标元素的时候。
2. 当目标（target）元素与根（root）元素发生交集的时候执行。
3. 目标元素与其他元素的相交部分大小发生变化时。
 * 
 */

export const intersectionObserverInit = (option: any) => {
  const observeredTemplateTimeMap:any  = {};
  const {
    rootEl, // 注意：根元素是当前视口根元素，这个元素的高度一定是小于等于视口高度的
    targetEl,
    elAttribute, // 绑定在目标观察dom上的属性
    TrackFun = () => {},

    observerOptions = {
      rootMargin: '0px 0px 0px 0px', // 计算交叉值时添加至根的边界中的一组偏移量，例如'0px 0px 10px 0px' 表示滚动距离根下边界10px就触发边界交叉
      threshold: [1], // 触发前应可见的百分比， 例如[0.5,1] 表示视口进入到交叉区域到百分之五十或者百分之百都会触发边界交叉
      trackVisibility: true, // 指示当前观察器是否将跟踪目标可见性的更改
      delay: 100 // 回调函数执行的延迟时间（毫秒）。如果 trackVisibility 设置为 true，此值最小值设置为 100
    }
  } = option;
  const callBackFun = (entries: any, observer: any) => {
    // console.log(entries);
    // 筛选有效的实体
    const visibleEntries = entries.filter((ent: any) => {
      if (!elAttribute) return ent.isIntersecting && ent.isVisible;
      const currentElAttribute = ent.target.dataset[elAttribute];
      // 间隔时间是否超过2s
      const isLongTime = ent.time - ((observeredTemplateTimeMap[currentElAttribute]) || 0) > 2000;
      return ent.isIntersecting && ent.isVisible && isLongTime;
    });
    visibleEntries.forEach((item: any) => {
      const currentElAttribute = item.target.dataset[elAttribute];
      // 记录当前元素曝光时间
      if (currentElAttribute) {
        observeredTemplateTimeMap[currentElAttribute] = item.time;
      }
      // 曝光埋点函数触发
      TrackFun(currentElAttribute);
    });
  };
  if (rootEl) {
    observerOptions.root = rootEl;
  }
  const myObserver = new IntersectionObserver(callBackFun, observerOptions);

  // 开始监听目标元素
  if (targetEl.length) {
    // nodeList情况
    targetEl.forEach((el: Element) => {
      myObserver.observe(el);
    });
  } else {
    myObserver.observe(targetEl);
  }
  return myObserver;
};
