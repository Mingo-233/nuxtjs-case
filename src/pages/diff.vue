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
  name: 'DiffA',
  components: {},
  data() {
    return {
      msg: '',
    };
  },
  mounted() {
    const a = 1;
  },
  methods: {
    toA() {
      this.msg = ' this is a  tab ';
    },
    toB() {
      this.msg = ' this is b  tab ';
    },
  },
};
</script>

<style scoped></style>
