<template>
  <div>
    <div class="_base-count-down">
    <div class="content">
      <slot v-bind="{
        d: days, h: hours, m: mins, s: seconds,
        hh: `00${hours}`.slice(-2),
        mm: `00${mins}`.slice(-2),
        ss: `00${seconds}`.slice(-2),
      }"></slot>
    </div>
    <slot name="s1"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "count-down-clock",
  data() {
    return {
      days: "0",
      hours: "00",
      mins: "00",
      seconds: "00",
      timer: null,
      curTime: null,
    };
  },
  props: {
    time: {
      type: [Number, String],
      default: 0,
    },
    isMilliSecond: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    duration() {
      const time = this.isMiniSecond
        ? Math.round(+this.time / 1000)
        : Math.round(+this.time);
      return time;
    },
  },
  mounted() {
    this.countDown();
  },
  methods: {
    countDown() {
      this.curTime = Date.now();
      this.getTime(this.duration);
    },
    getTime(duration) {
      this.timer && clearTimeout(this.timer);
      if (duration < 0) {
        return;
      }
      const { dd, hh, mm, ss } = this.durationFormatter(duration);
      this.days = dd || 0;
      this.hours = hh || 0;
      this.mins = mm || 0;
      this.seconds = ss || 0;
      this.timer = setTimeout(() => {
        const now = Date.now();
        const diffTime = Math.floor((now - this.curTime) / 1000);
        this.curTime = now;
        this.getTime(duration - diffTime);
      }, 1000);
    },
    durationFormatter(time) {
      if (!time) return { ss: 0 };
      let t = time;
      const ss = t % 60;
      t = (t - ss) / 60;
      if (t < 1) return { ss };
      const mm = t % 60;
      t = (t - mm) / 60;
      if (t < 1) return { mm, ss };
      const hh = t % 24;
      t = (t - hh) / 24;
      if (t < 1) return { hh, mm, ss };
      const dd = t;
      return { dd, hh, mm, ss };
    },
  },
};
</script>

<style scoped lang="less">
._base-count-down {
  color: red;
}
</style>
