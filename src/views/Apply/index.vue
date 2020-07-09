<template>
  <div>
    <Row type="flex" class="form-container">
         <Col :lg="4" :md="0" class="form-bg"></Col>
      <Col :lg="16" :md="24" class="form-content">
         <div class="form-title super-font">申请已提交，请耐心等待</div>
         <div>
             <img src="" alt="">
         </div>
      </Col>
          <Col :lg="4" :md="0" class="form-bg"></Col>
    </Row>
    <Row type="flex" class="form-container">
      <Col :lg="4" :md="0" class="form-bg"></Col>
      <Col :lg="16" :md="24" class="form-content">
            <div class="form-title super-font">完善注册</div>
            <div class="form-steps">
            <Steps :current="step">
                <Step title="提交合同" content="下载填写并上传合同"></Step>
                <Step title="用户详情" content="填写用户详细资料并上传佐证"></Step>
                <Step title="确认信息" content="确认并提交用户信息"></Step>
            </Steps>
            </div>
            <div class="form-steps-moblie">
                <Divider orientation="center" class="subTitle-font">提交合同</Divider>
            </div>
            <div class="form-material">
                <div class="box-1" v-if="step === 0">
                    <div class="title-font text-dark">合同下载</div>
                    <div class="contract-list">
                        <Row :gutter="16">
                            <Col :lg='6'>
                                <div class="contract-download">
                                    <img src="../../assets/icon/pdf-download.png" alt="">
                                    <div class="normal-font text-dark">租赁委托合同</div>
                                </div>
                            </Col>
                            <Col :lg='6'>
                                <div class="contract-download">
                                    <img src="../../assets/icon/pdf-download.png" alt="">
                                    <div class="normal-font text-dark">租赁委托合同</div>
                                </div></Col>
                            <Col :lg='6'>
                                <div class="contract-download">
                                    <img src="../../assets/icon/pdf-download.png" alt="">
                                    <div class="normal-font text-dark">租赁委托合同</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div class="title-font text-dark">上传合同</div>
                    <div class="update">
                        <Upload
                            multiple
                            type="drag"
                            action="//jsonplaceholder.typicode.com/posts/">
                            <div style="padding: 20px 0">
                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                <p>填写并上传合同文件</p>
                            </div>
                        </Upload>
                    </div>
                </div>
                <div class="box-2" v-if="step === 1">
                    <div class="form-input-controllor">
                    <div class="form-input-label normal-font text-grey ">选择账户身份:</div>
                        <Select v-model="accountIdentitySelected" style="width:200px">
                            <Option v-for="item in accountIdentity" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                    <div class="form-input-controllor">
                        <div class="form-input-label normal-font text-grey ">账号用户:</div>
                        <Input v-model="accountName" placeholder="输入用户名" style="width: 300px" />
                    </div>
                    <div class="form-input-controllor">
                        <div class="form-input-label normal-font text-grey ">电子邮箱:</div>
                        <Input v-model="accountEmail" placeholder="邮箱地址@163.com" style="width: 300px" />
                    </div>
                        <div class="form-input-controllor">
                            <div class="form-input-label normal-font text-grey ">联系人名:</div>
                        <Input v-model="accountUser" placeholder="联系人" style="width: 300px" />
                    </div>
                    <div class="form-input-controllor">
                        <div class="form-input-label normal-font text-grey ">联系电话:</div>
                        <Input v-model="accountPhone" placeholder="输入常用联系电话" style="width: 300px" />
                    </div>
                    <div class="form-input-controllor">
                        <div class="form-input-label normal-font text-grey ">身份证号:</div>
                        <Input v-model="accountPhone" placeholder="输入法人/用户身份证号码" style="width: 300px" />
                    </div>
                    <div class="form-upload-controllor">
                            <div class="form-upload-label normal-font text-grey ">文件证明: <span>(法人身份正反面，营业执照等证件证明)</span></div>
          
                            <Upload
                                ref="upload"
                                :show-upload-list="false"
                                :default-file-list="defaultList"
                                :on-success="handleSuccess"
                                :format="['jpg','jpeg','png']"
                                :max-size="1048"
                                :on-format-error="handleFormatError"
                                :on-exceeded-size="handleMaxSize"
                                :before-upload="handleBeforeUpload"
                                multiple
                                type="drag"
                                action="//jsonplaceholder.typicode.com/posts/"
                                style="display: inline-block;width:9rem;">
                                <div style="width: 9rem;height:9rem;line-height: 9rem;">
                                    <Icon type="ios-camera" size="32c"></Icon>
                                </div>
                            </Upload>
                            <div class="demo-upload-list" v-for="item in uploadList">
                                <template v-if="item.status === 'finished'">
                                    <img :src="item.url">
                                    <div class="demo-upload-list-cover">
                                        <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                                        <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                                    </div>
                                </template>
                                <template v-else>
                                    <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                                </template>
                            </div>
                            <Modal title="View Image" v-model="visible">
                                <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
                            </Modal>
                        </div>
                </div>
                <div class="box-2" v-if="step === 2"></div>
            </div>
            <div class="form-btns">
                <Row :gutter='20'>
                    <Col :lg='{span:8,offset: 3}'> 
                    <Button type="primary" size='large' long v-if="step === 0">取消</Button>
                    <Button type="primary" size='large' long v-else>上一步</Button>
                    </Col>
                    <Col :lg='{span:8,offset: 1}'> 
                        <Button type="success" size='large' long v-if="step === 2" >提交</Button>
                        <Button type="success" size='large' long v-else>下一步</Button>
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
            step:1,
            accountIdentity:[
                {
                    value:0,
                    label:'租赁商'
                },
                {
                    value:1,
                    label:'资金方'
                },
                {
                    value:2,
                    label:'供应商'
                },                
            ],
            accountIdentitySelected:null,
            accountName:'',
            accountEmail:'',
            accountPhone:'',
            accountUser:'',
            defaultList: [],
            imgName: '',
            visible: false,
            uploadList: []
            
        }
    },
    mounted () {
            this.uploadList = this.$refs.upload.fileList;
        },
                methods: {
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
            }
        }
};
</script>