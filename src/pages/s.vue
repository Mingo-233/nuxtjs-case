<template>
  <div>
    hi, this is vuex test page
    <!-- <a-button type="danger">
      Danger
    </a-button> -->
    <Upload accept="image/png" multiple @change="handleUploadBefore">
      <Button>Click to Upload </Button>
    </Upload>
    <Button type="danger">Danger</Button>
  </div>
</template>

<script lang="ts">
import { Button, Upload } from "ant-design-vue";

export default {
  components: {
    Button,
    Upload,
  },
  methods: {
    handle() {},
    handleUploadBefore(a: any) {
      console.log(a);

      console.log(arguments);
      const { file, fileList } = a;

      console.log(file.status);
    },
  },
};
</script>

<style></style>
