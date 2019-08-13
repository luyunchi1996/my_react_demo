<template>
   <div class="part">
     <slot></slot>
   </div>
</template>
<script>
export default {
  name:"Part",
  props:{},
  data (){
     return {}
  },
}
</script>

<style>
   .part{
      width: 100%;
      height: 100%;
      background-color: yellow;
   }
</style>
