<template>
  <div class="a-index">
    git reset --soft

    <div class="codelist">codelist</div>
    <Button @click="open"> open </Button>
    <Button @click="clsoe"> close </Button>
    <Button @click="destroyed"> destroyed </Button>
    <Button @click="initAA"> initAA </Button>
    <Button @click="initAA2"> initAA2 </Button>
  </div>
</template>

<script lang="ts">
import { Button, Dialog, Popover } from 'vant';
import receiveVueComponent from './load';
import com from './com.vue';

const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

const a = receiveVueComponent(com);
console.log(a);

export default {
  name: 'Aand',
  components: {
    Button,
    Dialog: Dialog.Component,
    Popover,
  },
  data() {
    return {
      msg: '#108ee9',
      colors: '',
      customColors,
      show: false,
      active: true,
      showPopover: true,
      // 通过 actions 属性来定义菜单选项
      actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
    };
  },
  mounted() {
    a.init();
  },
  methods: {
    handle() {
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容',
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    clsoe() {
      a.close();
    },
    open() {
      const options = {
        direction: 'right',
        triangleTop: '25px',
        tragetEl: document.querySelector('.codelist'),
      };
      a.show(options);
    },

    destroyed() {
      a.destroyed();
    },
    onSelect() {
      // Toast(action.text);
    },
    initAA() {
      a.init();
    },
    initAA2() {
      a.init2();
    },
  },
};
</script>

<style lang="less">
.a-index {
  position: relative;
  background: #ccc;
  height: 100vh;
  .codelist {
    position: absolute;
    width: 100px;
    height: 300px;
    border: 1px solid #f50;
    top: 300px;
    right: 300px;
  }
}
</style>
