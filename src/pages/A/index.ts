import Vue from "vue";

interface location {
  direction: string;
  triangleTop?: string;
}
let PopoverLoadConstructor: any;
const popoverLoading = () => {
  return new PopoverLoadConstructor();
};
const receiveVueComponent = (Component: any) => {
  PopoverLoadConstructor = Vue.extend(Component);

  PopoverLoadConstructor.prototype.init = function () {
    // if (this.vm) {
    //   console.log(this.vm);
    // }

    // debugger;
    this.vm = this.$mount();
    console.log(this.vm);
    let a = document.createElement("div");
    a.innerHTML = "xxx";
    document.body.appendChild(a);

    document.body.appendChild(this.vm.$el);
    return this;
  };
  PopoverLoadConstructor.prototype.init2 = function () {
    this.vm = this.$mount();
    console.log(this.vm);
    // let a = document.createElement("div");
    // a.innerHTML = "xxx";
    // document.body.appendChild(a);
    // document.body.appendChild(this.vm.$el);
    return this;
  };
  function initLocation(this: any, options: location) {
    const target = document.querySelector(".vip-header");
    if (!target) return;
    const domReact = target.getBoundingClientRect();
    console.log(domReact);

    const { top, left, width, height } = domReact;
    const elWidth = this.vm.$el.offsetWidth;
    this.vm.top = top + "px";
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
