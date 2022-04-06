<template>
  <div>
    <input type="text" v-model="todoMsg" />
    <button @click="add">添加</button>
    <button @click="clearHasDone">清理</button>
    <div v-if="lists.length">
      <div v-for="(item, index) in lists" :key="item.msg">
        <input type="checkbox" v-model="item.done" />
        <span :class="{ done: item.done }">{{ item.msg }}</span>
        <span @click="deleteItem(index)">❎</span>
      </div>
      <div>
        <span >全选</span>
        <input type="checkbox" v-model="isAllDone" @click="toggleAll"/>
        <span>{{ hasDone }} / {{ lists.length }}</span>
      </div>
    </div>
    <div v-else>暂无数据</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
interface listItem {
  msg: string;
  done: boolean;
}
export default Vue.extend({

  data() {

    return {
      todoMsg: "",
      lists: [] as listItem[],
      isAllDone: false,
    };
  },

  computed: {
    hasDone():number {
      return this.lists.filter(item => item.done).length;
    },
  },

  methods: {
    add() {
      if (this.todoMsg) {
        this.lists.push({
          msg: this.todoMsg,
          done: false,
        });
        this.todoMsg = "";
      }
    },

    deleteItem(index:number) {
      this.lists.splice(index, 1);
    },

    clearHasDone() {
      this.lists = []
    },

    toggleAll() {
      this.isAllDone = !this.isAllDone;
      this.lists.forEach(item => (item.done = this.isAllDone));
    },
  },
});
</script>
<style lang="less" scoped>
.done {
  text-decoration: line-through; // 删除线样式
  color: gray;
}
</style>
