<template>
  <div class="login-box">
    <div class="login-pannel">
      <div class="flow-title super-font">{{account.accountRegister === false? '登录':'注册'}}</div>
      <div id="login" v-if="account.accountRegister == false">
        <div class="handle-input">
          <div class="label">账号</div>
          <Input v-model="account.accountNmae" :placeholder="account.accountHolder" clearable />
        </div>
        <div class="handle-input">
          <div class="label">密码</div>
          <Input
            v-model="account.passWord"
            :placeholder="account.passHolder"
            type="password"
            clearable
          />
        </div>
        <div class="forgot">忘记密码，点我找回</div>
        <div class="btn-grounp">
          <Button type="primary" long @click="loginSubmit">登录</Button>
          <Button long @click="toggleRegister">注册</Button>
        </div>
      </div>
      <div id="register" v-else>
        <div class="handle-input">
          <div class="label">账号</div>
          <Input v-model="account.accountNmae" :placeholder="account.accountHolder" clearable />
        </div>
        <div class="handle-input">
          <div class="label">密码</div>
          <Input
            v-model="account.passWord"
            :placeholder="account.passHolder"
            type="password"
            clearable
          />
        </div>
        <div class="handle-input">
          <div class="label">确认密码</div>
          <Input
            v-model="account.confirmPassWord"
            :placeholder="account.confirmPassHolder"
            type="password"
            clearable
          />
        </div>
        <div class="handle-input">
          <div class="label">验证码</div>
          <Row>
            <Col span="14" type="flex">
              <Input v-model="account.msg" :placeholder="account.msgHolder" />
            </Col>
            <Col span="6" offset="4">
              <Button type="primary" class="small-btn">验证码</Button>
            </Col>
          </Row>
        </div>
        <div class="btn-grounp">
          <Button type="primary" long>确认注册</Button>
          <Button long @click="toggleRegister">取消</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {TweenMax, Power2} from 'gsap'
// var loginAnimation = function(el,action){
//     let ani = TweenMax.to(el,{rotationY: 180,duration:0.8,ease:Power2})
//     ani.pause()
//       if(action === 'play'){
//             ani.play()
//         }
//         if(action === 'reverse'){
//             ani.reverse()
//         }
// }
export default {
  data() {
    return {
      account: {
        accountName: "",
        accountHolder: "请输入您的账户",
        passWord: "",
        passHolder: "请输入您的密码",
        flowTitle: "登录",
        confirmPassWord: "",
        confirmPassHolder: "请再次确认密码",
        accountRegister: false,
        msg: "",
        msgHolder: "验证码输入"
      }
    };
  },
  methods: {
    toggleRegister() {
      var { accountRegister } = this.account;
      if (accountRegister === false) {
        console.log(123);
        this.account.accountRegister = true;
      } else {
        console.log(222);
        this.account.accountRegister = false;
      }
    },
    loginSubmit() {
      sessionStorage.token = "123123123123";
      this.navigatingTo("/home");
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style.less";
.login-box {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: @themeGrey;
}
.login-pannel {
  position: relative;
  // min-height: 370px;
  min-width: 390px;
  max-width: 335px;
  max-height: 650px;
  box-sizing: border-box;
  padding: 35px 35px;
  background-color: @themeWhite;
  border-radius: 5px;
  .normal-shadow;
  .handle-input {
    margin: 10.5px 0;
  }
  .label {
    margin-bottom: 5px;
    padding-left: 15px;
  }
  .forgot {
    float: right;
    margin-right: 12px;
    cursor: pointer;
  }
  .flow-title {
    height: 60px;
    width: 50%;
    position: absolute;
    background-color: @themeWhite;
    text-align: center;
    line-height: 60px;
    border-radius: 5px;
    .small-shadow;
    top: -8%;
  }
}
@media screen and (max-width: 768px) {
  .login-pannel {
    min-width: 290px;
    max-height: 460px;
    box-sizing: border-box;
    padding: 15px 10px;
    background-color: @themeWhite;
    border-radius: 5px;
    .normal-shadow;
    .handle-input {
      margin: 9.5px 0;
    }
    .label {
      margin-bottom: 5px;
      padding-left: 10px;
    }
    .forgot {
      float: right;
      margin-right: 12px;
      cursor: pointer;
    }
    .flow-title {
      height: 45px;
      width: 50%;
      position: absolute;
      background-color: @themeWhite;
      text-align: center;
      line-height: 45px;
      border-radius: 5px;
      .small-shadow;
      top: -8%;
    }
  }
}
</style>

