<template>
  <div class="container">
    <p>_ id.vue</p>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    console.log(params);
    console.log(params.id);
    // 必须是number类型
    return /^\d+$/.test(params.id);
    // return true
  },
  // async asyncData({ params }) {
  //   console.log(params);
  //   const slug = params.slug; // When calling /abc the slug will be "abc"
  //   return { slug };
  // },
};
</script>
