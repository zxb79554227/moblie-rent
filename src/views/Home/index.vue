<template>
  <div class="layout-flex screen">
    <div class="sidebar-lg">
      <div class="logo-container">
        <img src="../../assets/icon/placeholder.png" alt="">
        <div class="title-font text-dark">应用名称</div>
      </div>
      <div class="display-mode mgv-3">系统跳转</div>
      <div class="navibar mgv-9">
        <ul>
          <li class="mgv-1 navigator">路由1</li>
          <li class="mgv-1 navigator">路由2</li>
          <li class="mgv-1 navigator">路由3</li>
        </ul>
      </div>
      <div class="controller-container">
        登出
        <div class="version-container">
          V.1.0.0
        </div>
      </div>
    </div>
    <div class="headbar-moblie">
      <div class="block-one">
        <div class="logo-container">
              <img src="../../assets/icon/placeholder.png" alt="">
        </div>
        <div class="display-mode">系统跳转</div>
        <div class="controller-container"> 
          登出
        </div>
      </div>
      <div class="block-two">
          <div class="navibar">
                <span>路由1</span>
                <span>路由2</span>
                <span>路由3</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {

  },
  computed: {

  },
  methods: {

  }
};
</script>

<style lang='less' scoped>

</style>