<template>
  <div class="container" data-app="true">
    <p>_ comments.vue</p>
<!-- :value="visable" -->
    <v-tooltip top open-on-click  :open-on-hover="false">
      <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on" open-on-click>
          123
          <slot></slot>
        </span>
      </template>
      <span>123123123</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  async asyncData(content) {
    // console.log(content);
    content.$myInjectedFunction("works in comments asyncData");
  },
  mounted() {
    // alert("mounted");
  },
  data() {
    return {
      // visable: true,
    };
  },
  beforeDestroy() {
    // alert("beforeDestroy");
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>
