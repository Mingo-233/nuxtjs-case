<template>
  <!-- Your template -->
  <div>this is post vue</div>
</template>
<script>
  import axios from 'axios'
export default {
    
  layout: "blog",
  async asyncData({ params ,app}) {
    //   console.log(app);
      app.$myInjectedFunction('works in asyncData')
    // let data  = await axios.get(`https://www.baidu.com`);
    // console.log(data);
    return { };
  },
  data() {
    return {
      name: "sss",
    };
  },
  mounted() {
    console.log(this.name);
    this.$myInjectedFunction('works in mounted')
  },
};
</script>
