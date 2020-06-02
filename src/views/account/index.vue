<template>
  <div class="account">
    <div class="balance">
      <Row>
        <Col :md="{span:24}" :lg="{span:10}" class="outbox">
          <Card>
            <p slot="title">账户余额</p>
            <div class="card-content">123.00</div>
          </Card>
        </Col>
        <Col :md="{span:24}" :lg="{span:10}" class="outbox">
          <Card>
            <p slot="title">银行管理</p>
            <p class="card-content">卡号:237y289...1312o38i</p>
          </Card>
        </Col>
        <Col :md="{span:24}" :lg="{span:4}" class="outbox">
          <div class="btn-grounp-account">
            <Button type="success" long>充值</Button>
            <Button type="error" long>提款</Button>
          </div>
        </Col>
      </Row>
    </div>
    <div class="history">
      <Divider orientation="left">流水记录</Divider>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../style.less";
.account {
  padding: 60px 45px;
  .outbox {
    height: 165px;
    padding: 15px 25px;
    box-sizing: border-box;
  }
  .btn-grounp-account {
    display: flex;
    flex-direction: column;
    .ivu-btn {
      margin: 20px 0 20px 0;
      max-width: 160px;
      .element-height;
    }
  }
  .ivu-card {
    min-height: 165px;
    .card-content {
      height: 100%;
      text-align: center;
    }
  }
}
.history {
  margin-top: 45px;
}
@media (min-device-width: 300px) and (max-device-width: 768px) {
  .account {
    .outbox {
      height: 145px;
      padding: 15px 5px;
      box-sizing: border-box;
      margin-bottom: 35px;
    }
    padding: 25px 35px;
    .btn-grounp-account {
      .ivu-btn {
        margin: 0;
          max-width: 100%;
        margin-bottom: 5px;
        .element-height;
      }
    }
  }
  .history {
    margin-top: 0px;
  }
}
</style>