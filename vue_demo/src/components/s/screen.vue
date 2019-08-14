<template>
   <div class="screen" :style="style" >
     <slot></slot>
   </div>
</template>


<script>
export default {
  name:"Screen",
  props:{
     width:String,
     height:String,
     heightOpts:Object
  },
  provide: {
    heightOpt:{},

  },
  data (){
     return {
        style:{
           width:this.width,
           height:this.height,
        }
     }
  },
  created(){
    const window_innerHeight =this.height&&this.height.indexOf("%")===-1?parseInt(this.height):window.innerHeight
    let contentHeight=0
    let currentHeight = 0
    if(this.heightOpts){
      for(let key in this.heightOpts ){
        if(key==="Content")
            continue
        currentHeight += parseInt(this.heightOpts[key])
      }
      contentHeight = window_innerHeight - currentHeight
      let heightOpts =  this.heightOpts
      heightOpts ={
          ...this.heightOpts,
          Content:contentHeight
      }

      this._provided.heightOpt =heightOpts

    }

  },
 
  mounted(){
<<<<<<< HEAD
    debugger
=======

    //  this.$children.map((child)=>{
    //      console.log(child.$options._componentTag)
    //      debugger
    //     //  console.log(child.$options.propsData)
    //  })

>>>>>>> 5d6ded3871dca1464c5485f9b7294162f517dcb8
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
<<<<<<< HEAD
     background-color:#11db54;
=======
     z-index: 100;
>>>>>>> 5d6ded3871dca1464c5485f9b7294162f517dcb8
  }

</style>>
