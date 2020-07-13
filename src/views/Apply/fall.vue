<template>
    <div>
            <Row type="flex" class="form-container">
         <Col :lg="4" :md="0" class="form-bg"></Col>
      <Col :lg="16" :md="24" class="form-content">
         <div class="form-title super-font">申请被拒绝</div>
         <div class="apply-img-container">
             <img src="../../assets/icon/refused.png" alt="">
         </div>
         <div class="apply-des">
             <div class="subTitle-font text-dark">您的材料没有通过运营平台的审核，请重新提交相关文件进行审核。</div>
                <ul>
                    <li v-for="i in reason" :key="i" class="text-dark normal-font">
                        -{{i}}
                    </li>
                </ul>
             <div class="normal-font text-grey mgv-1">如果有任何问题，请联系客服热线：123-123-1234</div>
         </div>
         <div class="form-btns">
                <Row type='flex'>
                    <Col :lg='8'> 
                    </Col>
                    <Col :lg='8'> 
                    <Button type="success"  size='large' long>重新申请</Button>
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
data(){
    return{
         reason:['没有身份证件照','身份证号码核实失败']
    }
}
}
</script>

