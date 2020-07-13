<template>
     <div>
          <Row type="flex" class="form-container">
         <Col :lg="4" :md="0" class="form-bg"></Col>
     <Col :lg="16" :md="24" class="form-content">
         <div class="form-title super-font">申请已提交，请耐心等待</div>
         <div class="apply-img-container">
             <img src="../../assets/icon/passed.png" alt="">
         </div>
         <div class="apply-des">
             <div class="subTitle-font text-dark">我们的工作人员会在24小时内回复您的申请，在审核完成之前您的账号无法进行交易操作。</div>
             <div class="normal-font text-grey mgv-1">如果有任何问题，请联系客服热线：123-123-1234</div>
         </div>
         <div class="form-btns">
                <Row type='flex'>
                    <Col :lg='8'> 
                    </Col>
                    <Col :lg='8'> 
                    <Button type="primary" size='large' long>确认</Button>
                    </Col>
                     <Col :lg='8'> 
                    </Col>
                </Row>
            </div>
          </Col>
          <Col :lg="4" :md="0" class="form-bg"></Col>
    </Row>
     </div>
</template>

<script>
export default {

}
</script>

