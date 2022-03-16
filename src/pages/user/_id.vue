<template>
  <div class="container">
    <p>_ id.vue</p>
    <p>{{aid}}</p>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    // console.log(params);
    // console.log(params.id);
    // this.aid = params.id
// console.log(this.aid);

    // 必须是number类型
    return /^\d+$/.test(params.id);
    // return true
  },
  async asyncData({ params }) {
    console.log('asyncData');
    console.log(params);
    console.log(typeof params);
    console.log(params.id);

    // this.id = params.id
    // const slug = params.slug; // When calling /abc the slug will be "abc"
    // return { slug };
  },
  data(){
    return{
      aid:'3'
    }
  },
  mounted(){

  }
};
</script>
