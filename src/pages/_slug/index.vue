<template>
  <div class="container">
    <p>_ slug.vue</p>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    console.log(params);
    console.log(params.slug);
    // 必须是number类型
    // return /^\d+$/.test(params.id);
    return  params.slug.startsWith('slug')
  },
  async asyncData({ params }) {
    console.log(params);
    // const slug = params.slug; // When calling /abc the slug will be "abc"
    // return { slug };
  },
  mounted(){

  }
};
</script>
