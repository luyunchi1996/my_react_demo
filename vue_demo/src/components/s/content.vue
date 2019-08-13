<template>
   <div class="content">
     <slot></slot>
   </div>
</template>


<script>
export default {
  name:"Content",
  props:{},
  data (){
     return {}
  },

}
</script>
<style scoped>
   .content{
      height: 80%;
      background-color: #efefef;
   }
</style>>
