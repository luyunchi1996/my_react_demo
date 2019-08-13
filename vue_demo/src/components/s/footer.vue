<template>
   <div class="footer">
     <slot></slot>
   </div>
</template>


<script>
export default {
  name:"Footer",
  props:{},
  data (){
     return {}
  },

}
</script>
<style scoped>
   .footer{
      height: 12%;
      background-color: #bcaeff;
   }
</style>>
