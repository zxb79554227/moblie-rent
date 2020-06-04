<template>
  <div class="account">
    <div class="balance">
      <Row>
        <Col :md="{span:24}" :lg="{span:8}" class="outbox">
          <Card>
            <div class="card-header">
              账户余额
              <div class="card-grounp-account">
                <Button type="success" long>充值</Button>
                <Button type="error" long>提款</Button>
              </div>
            </div>
            <div class="card-content">123.00</div>
          </Card>
        </Col>
        <Col :md="{span:24}" :lg="{span:8}" class="outbox">
          <Card>
            <div class="card-header">
              银行管理
              <div class="card-grounp-account">
                <Button type="success" long>添加</Button>
                <Button type="error" long>删除</Button>
              </div>
            </div>
            <div class="card-content">卡号:237y289...1312o38i</div>
          </Card>
        </Col>
        <Col :md="{span:24}" :lg="{span:8}" class="outbox">
          <Card>
            <div class="card-header">
              <div class="card-grounp-account">
                <Button type="success" long>更改</Button>
              </div>利率设置
            </div>
            <div class="card-content">15%</div>
          </Card>
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
  .card-header {
    border-bottom: 1px solid @themeWhite;
    font-size: 1.25rem;
    padding: 0px 0px 15px 0;
    font-weight: 600;
    position: relative;
  }
  .card-grounp-account {
    display: flex;
    position: absolute;
    top: -3px;
    right: 0px;
    .ivu-btn {
      width: 65px;
      margin-right: 5px;
    }
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