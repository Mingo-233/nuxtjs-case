<template>
  <div class="css-demo">

    <el-input v-model="a"
              @blur="blurHandle" />
    <button @click="submit">TIJIAO</button>

    <hr>
    <el-input v-model="b"
              @blur="blurHandle2" />
    <button @click="submit2">TIJIAO</button>
  </div>
</template>

<script>

export default {
  name: 'promise-demo',
  data () {
    return {
      a: '',
      ajaxLoading: null,
      b: '',
      ajaxLoading2: Promise.resolve()
    }
  },
  methods: {
    submit () {
      if (this.ajaxLoading) {
        this.ajaxLoading.then(res => {
          console.log('submit');
        })
      } else {
        console.log('submit');
      }
    },
    blurHandle () {
      console.log('ajax start');
      this.ajaxLoading = new Promise((resolve) => {
        console.log(this);
        this.ajaxRequest().then(res => {
          resolve()
          console.log('ajax end');
        }).finally(() => {
          this.ajaxLoading = null
        })
      })
    },
    submit2 () {
      console.log(this.ajaxLoading2);
      this.ajaxLoading2.then(res => {
        console.log('submit');
      })

    },
    blurHandle2 () {
      console.log('ajax start');
      this.ajaxLoading2 = new Promise((resolve) => {
        console.log(this);
        this.ajaxRequest().then(res => {
          resolve()
          console.log('ajax end');
        }).finally(() => {
          this.ajaxLoading2 = Promise.resolve()
        })
      })
    },
    ajaxRequest () {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('ok')
        }, 2000);
      })
    }
  },
};
</script>

<style lang="less" scoped>
</style>
