<template>
   <div class="content" :style="style">
     <slot></slot>
   </div>
</template>


<script>
export default {
  name:"Content",
  props:{
     height:String,
     fixedHeight:Boolean
  },
  inject: ['heightOpt'],
  data (){
     return {
        style:{
           "height":this.height
        }
     }
  },
  created(){
    const tagName = this.$options._componentTag
    const heightOpts =this.heightOpt



    if(heightOpts[tagName]){

        if(!this.fixedHeight){
            this.style["min-height"] =  heightOpts[tagName]+"px"
            this.style["height"] = "auto"
        }else{
            this.style["height"] =  heightOpts[tagName]+"px"
            this.style["overflow-y"] ="auto"
            this.style["overflow-x"] ="hidden"
        }
    }

    if(!this.fixedHeight&&this.height){
        this.style["overflow-y"] ="auto"
        this.style["overflow-x"] ="hidden"
    }
  },

}
</script>
<style scoped>

   .content{
      height: 80%;
      background-color: #efefef;
      position: relative;
      top:0;
      z-index:300;

   }
   .content_anim_top_in{
      animation: top_in cubic-bezier(0.34, 0.86, 0.94, 1.01) 0.6s;
      -moz-animation: top_in cubic-bezier(0.34, 0.86, 0.94, 1.01) 0.6s;	/* Firefox */
      -webkit-animation: top_in cubic-bezier(0.34, 0.86, 0.94, 1.01) 0.6s;	/* Safari 和 Chrome */
      -o-animation: top_in cubic-bezier(0.34, 0.86, 0.94, 1.01) 0.6s;	/* Opera */
   }

   .content_anim_top_out{
      top:-10000px;
      animation: top_out cubic-bezier(0.34, 0.86, 0.94, 1.01) 1s;
      -moz-animation: top_out cubic-bezier(0.34, 0.86, 0.94, 1.01) 1s;	/* Firefox */
      -webkit-animation: top_out cubic-bezier(0.34, 0.86, 0.94, 1.01) 1s;	/* Safari 和 Chrome */
      -o-animation: top_out cubic-bezier(0.34, 0.86, 0.94, 1.01) 1s;	/* Opera */
   }

   @keyframes top_in{
      0%{
          top:-10000px;
      }
      100%{
          top:0px
      }
   }
   @keyframes top_out{
      0%{
         top:0px;
         opacity:1;
      }
      80%{
         opacity:0.8;
      }
      100%{
         top:-1000px;
         opacity:0;
      }
   }

</style>>
