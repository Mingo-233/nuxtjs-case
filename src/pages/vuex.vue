<template>
<div>
    hi, this is vuex test page 
    <el-button @click="handle">btn </el-button>
</div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";

export default {
//   computed: {
//     todos() {
//       return this.$store.state.todos.list;
//     },
//   },
  methods: {
    ...mapMutations({
      printName: "printName",
    }),
    handle(){
    //   this.$store.commit("printName", 'ob');
      this.printName('ss');

    }

  },
};
</script>

<style>

</style>
