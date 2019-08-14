<template>
   <div class="header" :style="style">
     <slot></slot>
   </div>
</template>


<script>
export default {
  name:"Header",
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
  computed:{

  },
  created(){
  },
  watch: {
  },

}
</script>
<style scoped>
   .header{
      height: 8%;
      background-color: blue;
   }
</style>>
