<template>
  <ul>
    <li v-for="(todo,i) in todos" :key="i">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list;
    },
  },
  methods: {
    addTodo(e) {
      this.$store.commit("todos/add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "todos/toggle",
    }),
  },
  mounted(){
    setInterval(() => {
      console.log('!!');
    }, 1000);
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
  color: green;
}
</style>
