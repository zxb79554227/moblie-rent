<template>
  <div class="layout">
    <div v-if="accessability ===1">
      <div class="contianer">
        <div>为了确保交易安全请提交用户资料，完成注册</div>
        <Steps :current="0" class="step">
          <Step title="合同提交" content="下载填写，并且上传需要的合同"></Step>
          <Step title="用户信息" content="选择用户身份，并且完善用户的详细信息"></Step>
          <Step title="提交内容" content="提交申请内容,等待后台审核"></Step>
        </Steps>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
      userInfo: {
        identity: "资金方",
        tagColor: "#2b90d9",
        userName: "zhang"
      },
      activeItem: "order",
      accessability: 3,
      notiCount: 3
    };
  },
  watch: {
    activeItem(newValue) {
      console.log(newValue);
      if (this.accessability === 3) {
        this.navigatingTo(`/${newValue}`);
      }
    }
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    checkActive(e) {
      this.activeItem = e;
    },
    toUser() {
      this.activeItem = "user";
    }
  }
};
</script>

<style lang="less" scoped>
.layout {
  // border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  // border-radius: 4px;
  overflow: hidden;
}
#moblie-bar {
  display: none;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
#sidebar {
  .ivu-menu {
    margin-top: 150px;
  }
  .ivu-menu-vertical .ivu-menu-item,
  .ivu-menu-vertical .ivu-menu-submenu-title {
    margin: 48px 0;
    padding: 32px 24px;
  }
  .ivu-tag {
    width: 86px;
    height: 32px;
    line-height: 32px;
  }
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.contianer {
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  .step {
    width: 50%;
    margin: 0 auto;
    margin-top: 6rem;
  }
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
  text-align: center;
}
.mobile-menu {
  height: 100%;
}

.ivu-avatar-large {
  margin-top: 25%;
  margin-bottom: 8%;
  width: 58px;
  height: 58px;
  line-height: 58px;
}
</style>