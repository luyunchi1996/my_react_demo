<template>
   <div class="footer" :style="style">
     <slot></slot>
   </div>
</template>


<script>
export default {
  name:"Footer",
  props:{
     height:String
  },
  data (){
     return {
        style:{
           height:this.height
        }
     }
  },

}
</script>
<style scoped>
   .footer{
      height: 12%;
      background-color: #bcaeff;
   }
</style>>
