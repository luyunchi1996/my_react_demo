<template>
   <div class="screen" >
     <slot></slot>
   </div>
</template>


<script>
export default {
  name:"Screen",
  props:{},
  data (){
     return {}
  },
  created(){
    debugger
  },
 
  mounted(){
    debugger
  },


}
</script>

<style scoped>
  .screen{
     position:absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color:#11db54;
  }

</style>>
