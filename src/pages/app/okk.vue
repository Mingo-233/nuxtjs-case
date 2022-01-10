<template>
  <div class="container">
    <p>app  . index vue</p>
    <count-down-clock></count-down-clock>
  </div>
</template>

<script>
import countDownClock from '@/components/count-down-clock'
// import CountDownClock from '../../components/count-down-clock.vue';
export default {
  components:{
    countDownClock
    // CountDownClock
  }
};
</script>
