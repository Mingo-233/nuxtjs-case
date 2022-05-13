<template>
  <div>
    <h1>context: {{ msg }}</h1>
    <div>
      <button @click="toA">a</button>
      <button @click="toB">b</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    toA() {
      this.msg = " this is a  tab ";
    },
    toB() {
      this.msg = " this is b  tab ";
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
