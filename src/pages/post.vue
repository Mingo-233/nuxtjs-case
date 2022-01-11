<template>
  <!-- Your template -->
  <div>this is post vue

    <button @click="handle">btn</button>
  </div>
</template>
<script>
  import axios from 'axios'
export default {
    
  layout: "blog",
  async asyncData({ params ,app}) {
    //   console.log(app);
      app.$myInjectedFunction('works in asyncData')

    return { };
  },
  data() {
    return {
      name: "sss",
    };
  },
  methods:{
    async handle(){
      console.log('dd');
          let data  = await axios.post(`127.0.0.0/ap2/:id`,{id:'22'});
    console.log(data);
    },
  },
  mounted() {
    console.log(this.name);
    this.$myInjectedFunction('works in mounted')
  },
};
</script>
