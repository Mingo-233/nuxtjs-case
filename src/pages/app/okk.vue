<template>
  <div class="container">
    <p v-bind="{type:msg}">app . index vue</p>
    <p :type="2">pp . index vue</p>
    <count-down-clock time="20" v-slot:default="timeObj">
      <div class="count-down">
        <div class="icon"></div>
        {{ timeObj.d }}天{{ timeObj.hh }}小时{{ timeObj.mm }}分钟{{
          timeObj.ss
        }}秒
      </div>
      <div slot="s1">ssss</div>
    </count-down-clock>
  </div>
</template>

<script>
import countDownClock from "@/components/count-down-clock.vue";
import xx from "@/utils/index"
export default {
  data() {
    return {
      msg:'hhh',
      x:xx
    };
  },

  components: {
    countDownClock,

  },
};
</script>
