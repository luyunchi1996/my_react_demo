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
  inject: ['heightOpt'],
  data (){
     return {
        style:{
           height:this.height
        },
     }
  },
  computed:{
  },
  created(){
    const tagName = this.$options._componentTag
    const heightOpts =this.heightOpt

    if(heightOpts[tagName]){
        this.style["height"] = heightOpts[tagName]+"px"
    }

  },
  watch: {
  },

}
</script>
<style scoped>
   .header{
      height: 8%;
      background-color:  #4073f9;

   }
</style>>
