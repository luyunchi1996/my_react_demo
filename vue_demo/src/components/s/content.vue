<template>
   <div class="content" :style="style">
     <slot></slot>
   </div>
</template>


<script>
export default {
  name:"Content",
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
   .content{
      height: 80%;
      background-color: #efefef;
   }
</style>>
