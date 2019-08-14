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
  inject: ['heightOpt'],
  data (){
     return {
        style:{
           height:this.height
        }
     }
  },
  created(){
    const tagName = this.$options._componentTag
    const heightOpts =this.heightOpt
    if(heightOpts[tagName]){
        this.style["height"] = heightOpts[tagName]+"px"
    }
  },


}
</script>
<style scoped>
   .footer{
      height: 12%;
      background-color: #bcaeff;

   }
</style>
