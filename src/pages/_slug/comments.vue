<template>
  <div class="container">
    <p>_ comments.vue</p>
  </div>
</template>

<script>
export default {
  async asyncData(content) {
    console.log(content);
    content.$myInjectedFunction("works in comments asyncData");
  },
  mounted(){

  }
};
</script>
