<template>
  <div id="app">
    <index></index>
  </div>
</template>
<script>
import index from "./views";
export default {
  components: {
    index
  },
  created(){
    this.detectDevice()
  },
  methods:{
    detectDevice(){
      let deviceInfo = window.navigator
      console.log(window.navigator);
      sessionStorage.language = deviceInfo.language
    }
  }
};
</script>

