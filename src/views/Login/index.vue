<template>
  <div class="login-box">
    <div class="login-pannel">
      <div class="flow-title subTitle-font text-dark">{{existUser === 2? '注册':'登录'}}</div>
      <div id="login" v-if="account.accountRegister == false">
        <div class="handle-input">
          <Input
            v-model="account.accountNumber"
            :placeholder="account.accountHolder"
            type="tel"
            maxlength="11"
            @on-change="accountInput"
            :class="verifyStyle"
          >
            <span slot="prepend">{{account.countryCode}}</span>
          </Input>
          <div class="formError" v-if="account.formError">{{account.formErrorText}}</div>
        </div>
        <div class="handle-input" v-if="existUser === 1 || existUser ===2">
          <Input v-model="account.passWord" :placeholder="account.passHolder" type="password" />
        </div>
        <div class="handle-input" v-if="existUser === 2">
          <Input
            v-model="account.confirmPassWord"
            :placeholder="account.confirmPassHolder"
            type="password"
          />
        </div>
        <div class="handle-input" v-if="existUser === 3 || existUser ===2">
          <Row type="flex" justify="center" align="middle">
            <Col span="17">
              <Input v-model="account.msg" :placeholder="account.msgHolder" />
            </Col>
            <Col span="6" offset="1" :class="countDown>0 && countDown<30?'msg-btn-actived':''">
              <Button
                type="primary"
                class="small-btn"
                @click="getMsg"
              >{{countDown === 30?'验证码':countDown}}</Button>
            </Col>
          </Row>
        </div>
        <div class="forgot text-grey" v-if="existUser === 1" @click="forgetPass">忘记密码，点我找回</div>
        <div class="btn-grounp">
          <Button type="primary" long @click="loginSubmit" v-if="existUser === 1">登录</Button>
          <Button type="primary" long @click="toggleRegister" v-if="existUser === 2">注册</Button>
          <Button
            type="primary"
            long
            @click="cancelRecover"
            v-if="existUser === 3 || existUser === 2"
            class="cancel-btn"
          >取消</Button>
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
        accountNumber: "",
        accountHolder: "请输入您的手机号码",
        countryCode: "+86",
        passWord: "",
        formError: false,
        formErrorText: "请输入正确的手机格式",
        passHolder: "请输入您的密码",
        flowTitle: "登录",
        confirmPassWord: "",
        confirmPassHolder: "请再次确认密码",
        accountRegister: false,
        msg: "",
        msgHolder: "验证码输入"
      },
      verifyStyle: "",
      existUser: 0,
      msgActived: false,
      countDown: 30
    };
  },
  watch: {
    countDown(newV) {
      console.log(newV);
      if (newV === 0) {
        this.countDown = 30;
        clearInterval(this.count);
      }
    }
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
      this.navigatingTo("/apply");
    },
    forgetPass() {
      this.existUser = 3;
    },
    getMsg(e) {
      console.log(e);

      if (this.countDown === 30) {
        this.count = setInterval(() => {
          if (this.countDown > 0) this.countDown--;
        }, 1000);
      }
    },
    cancelRecover() {
      this.existUser = 0;
      this.account.accountNumber = null;
      this.account.verifyStyle = "";
      this.account.passWord = "";
      this.account.confirmPassWord = "";
      this.account.msg = "";
    },
    accountInput() {
      var telStr = /^[1]([3-9])[0-9]{9}$/;
      this.verifyStyle = "";
      this.existUser = 0;
      if (this.account.accountNumber.length === 11) {
        if (!telStr.test(this.account.accountNumber)) {
          this.verifyStyle = "input-error";
          this.account.formError = true;
        } else {
          this.verifyStyle = "input-verified";
          //接口查询是否注册并且把结果保存到existUser中:0为没有验证，1为通过验证，2为没有通过验证, 3为通过但是忘记密码
          this.existUser = 1;
          if (this.existUser === 1) {
            console.log("已经注册");
          } else {
            this.verifyStyle = "";
            console.log("新用户");
          }
        }
      } else {
        this.account.formError = false;
      }
    }
  }
};
</script>


