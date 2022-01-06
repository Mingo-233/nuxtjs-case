<template>
  <div>_.vue</div>
</template>

<script>
// import Vue from 'vue';
export default {
  layout: 'error',
  mounted() {
    // log to sentry
  },
  // middleware: 'auth'
  // middleware: [
  //   ({ redirect, route, $log }) => {
  //     if (route.path.startsWith('/designer/users/')) {
  //       const uPath = '/u/' + route.fullPath.slice('/designer/users/'.length);
  //       $log(uPath);
  //       redirect(uPath);
  //     } else if (route.path.startsWith('/designer/works/')) {
  //       const uPath = '/w/' + route.fullPath.slice('/designer/works/'.length);
  //       $log(uPath);
  //       redirect(uPath);
  //     } else {
  //       $log('route fullPath %s', route.fullPath);
  //     }
  //   }
  // ]
};
</script>
