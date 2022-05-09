import Vue from "vue";

interface location {
  direction: string;
  tragetEl: HTMLElement;
  triangleTop?: string;
  top?: string;
  verticalAlignment?: "bottom" | "top";
}
let PopoverLoadConstructor: any;
const popoverLoading = () => {
  return new PopoverLoadConstructor();
};
const receiveVueComponent = (Component: any) => {
  PopoverLoadConstructor = Vue.extend(Component);

  PopoverLoadConstructor.prototype.init = function () {
    this.vm = this.$mount();
    document.body.appendChild(this.vm.$el);
    return this;
  };
  function initLocation(this: any, options: location) {
    const target = options.tragetEl;
    if (!target) return;
    const domReact = target.getBoundingClientRect();
    const { top, left, bottom, width } = domReact;
    const elWidth = this.vm.$el.offsetWidth;
    const elHeight = this.vm.$el.offsetHeight;
    if (options.top) {
      // 若指定top距离
      this.vm.top = options.top;
    } else if (options.verticalAlignment) {
      // 垂直底部对齐
      if (options.verticalAlignment === "bottom") {
        //   挂载元素底部距离顶部视口的距离 - 挂载元素的宽度
        this.vm.top = bottom - elHeight + "px";
      }
    } else {
      this.vm.top = top + "px";
    }
    if (options.direction === "right") {
      //   挂载元素距离左侧视口的距离 + 挂载元素的宽度
      this.vm.left = left + width + 15 + "px";
      this.triangleDirection = "left";
    }
    if (options.direction === "left") {
      //   挂载元素距离左侧视口的距离 - 目标元素的宽度
      this.vm.left = left - elWidth - 15 + "px";
      this.triangleDirection = "right";
    }
    this.triangleTop = options.triangleTop || "25px";
  }

  PopoverLoadConstructor.prototype.show = function (options: location) {
    this.vm.visiable = true;

    this.$nextTick(() => {
      initLocation.call(this, options);
    });
    return this;
  };
  PopoverLoadConstructor.prototype.close = function () {
    this.vm.visiable = false;
    return this;
  };
  PopoverLoadConstructor.prototype.destroyed = function () {
    document.body.removeChild(this.vm.$el);
    return this;
  };

  return popoverLoading();
};

export default receiveVueComponent;
