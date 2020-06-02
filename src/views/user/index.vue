<template>
  <div class="user">
      <Row>
        <Col :md="{span:24}" :lg="{span:12}" :xl="{span:8}">
          <Card title="用户资料" icon="ios-options" :padding="0" shadow style="width: 100%;">
            <CellGroup>
                <Cell title="联系人手机号码">
                    <span slot="extra"> 182****3231</span>
                </Cell>
                <Cell title="用户密码" label="点击设置新密码"  to="/user/setpassword"/>
                <Cell title="用户身份" extra="资金方" />
                <Cell title="法人姓名" extra="张瀚峰" />
                <Cell title="法人身份证" extra="2421412" />
                <Cell title="紧急联系人" to="/components/button" />
                <Cell title="营业执照编号" extra="2421412" />
            </CellGroup>
          </Card>
        </Col>
        <Col :md="{span:24}" :lg="{span:10,offset: 2}" :xl='{span:8,offset:2}' class="second-col">
          <router-view></router-view>
        </Col>
      </Row>
     <div class="show-box">
        <Divider orientation="left">证件</Divider>
     </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.user {
  padding: 60px 45px;
}
@media (min-device-width: 300px) and (max-device-width: 768px) {
  .user {
    padding: 25px 35px;
  }
  .second-col{
    margin-top:25px
  }
}
</style>