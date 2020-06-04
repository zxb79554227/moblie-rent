<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed" id="sidebar">
        <div @click="toUser">
          <Avatar size="large">{{userInfo.userName?userInfo.userName:'用户'}}</Avatar>
        </div>
        <Tag :color="userInfo.tagColor">{{userInfo.identity}}</Tag>
        <Menu
          :active-name="activeItem"
          theme="dark"
          width="100%"
          :class="menuitemClasses"
          @on-select="checkActive"
        >
          <MenuItem name="order">
            <Icon type="ios-cart"></Icon>
            <span>我的订单</span>
          </MenuItem>
          <MenuItem name="account">
            <Icon type="ios-card"></Icon>
            <span>我的账户</span>
          </MenuItem>
          <MenuItem name="notify">
            <Icon type="md-notifications" />
            <span>我的通知</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Menu
        :active-name="activeItem"
        mode="horizontal"
        theme="dark"
        id="moblie-bar"
        width="100%"
        :class="menuitemClasses"
        @on-select="checkActive"
      >
         <div @click="toUser" class="avatar-box">
          <Avatar icon="ios-person" />
         </div>
        <Tag :color="userInfo.tagColor">{{userInfo.identity}}</Tag>
        <div class="layout-nav">
          <MenuItem name="order">
            <Icon type="ios-cart"></Icon>
          </MenuItem>
          <MenuItem name="account">
            <Icon type="ios-card"></Icon>
          </MenuItem>
          <MenuItem name="notify">
            <Icon type="md-notifications" />
          </MenuItem>
        </div>
      </Menu>
      <Layout>
        <!-- <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">123123123</Header>
        <Content :style="{padding: '0 16px 16px'}">
          <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <div style="height: 600px">Content</div>
          </Card>
        </Content>-->
        <div class="child-page">
          <div v-if="accessability === 0">申请角色</div>
          <div v-else-if="accessability === 1">等待审核</div>
          <div v-else>
            <router-view></router-view>
          </div>
        </div>
      </Layout>
    </Layout>
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
        this.navigatingTo(`/${newValue}`)
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
    toUser(){
      this.activeItem = 'user'
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
@media (min-device-width: 300px) and (max-device-width: 768px) {
  #sidebar {
    display: none;
  }
  .layout-nav {
    display: inline;
  }
  .avatar-box{
    display: flex;
    justify-items: center;
  }
  .layout {
    border: none;
    background: #515a6e;
  }
  .ivu-avatar {
    margin-left: 32px;
  }
  #moblie-bar {
    position: fixed;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .menu-item span {
    height: 32px;
    width: 32px;
  }
  .ivu-tag {
    margin: 0 55px 0 0;
  }
  .ivu-layout-header {
    border: none;
    margin-top: 60px;
  }
  .child-page {
    margin-top: 60px;
  }
  .ivu-menu-vertical .ivu-menu-item,
  .ivu-menu-vertical .ivu-menu-submenu-title {
    padding: 0 24px;
  }
  .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active,
  .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover,
  .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active,
  .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover {
    background-color: #363e4f;
    color: #2d8cf0;
  }
}
</style>