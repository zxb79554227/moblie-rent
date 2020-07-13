<template>
  <div>
    <ApplyForm v-if="applyState === 0"></ApplyForm>
    <Fall v-else-if="applyState === 1"></Fall>
    <Submited v-else-if="applyState ===2"></Submited>
  </div>
</template>

<script>
import ApplyForm from './applyform'
import Fall from './fall'
import Submited from './submited'
export default {
    data(){
        return{
            applyState:0
        }
    },
    components:{
        ApplyForm,
        Fall,
        Submited
    }
  
           
};
</script>