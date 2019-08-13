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

  },
  mounted(){

     this.$children.map((child)=>{
         child.$options.propsData.height="10%"
         debugger
        //  console.log(child.$options.propsData)
     })

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
     background-color: green;
  }

</style>>
