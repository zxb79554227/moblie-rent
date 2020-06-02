<template>
  <div>
      <Card style="100%" title="设置密码">
        <div class="handle-input">
          <div class="label">原密码</div>
          <Input
            v-model="passWord"
            type="password"
            clearable
          />
        </div>
        <div class="handle-input">
          <div class="label">新密码</div>
          <Input
            v-model="newpassWord"
            type="password"
            clearable
          />
        </div>
        <div class="handle-input">
          <div class="label">再次输入新密码</div>
          <Input
            v-model="confirmPass"
            type="password"
            clearable
          />
        </div>
        <div class="setPass-btn-grounp">
          <Button type="primary">确认</Button>
          <Button @click="navigatingTo(-1)">取消</Button>
        </div>
      </Card>
  </div>
</template>

<script>
export default {
    data(){
        return{
            passWord:'',
            newpassWord:'',
            confirmPass:''
        }
    }
}
</script>

<style lang="less" scoped>
.setPass-btn-grounp{
    margin:15px 0 5px 0;
    display: flex;
    justify-content: space-between;
    .ivu-btn{
        width: 45%;
        box-sizing: border-box;
        padding: 0 25px;
        height: 36px;
    }
}
</style>