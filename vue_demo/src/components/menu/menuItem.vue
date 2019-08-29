<template>
   <ul>
       <li class="menu-list" @click="handlerListClick($event)">
           <a :href="href" :class="setChildIcon">
              <span>{{name}}</span>
           </a>
           <slot v-if="clickStatus"></slot>
       </li>
   </ul>
</template>

<script>
export default {
    name:"MenuItem",
    data(){
       return{
           clickStatus:false
       }
    },
    props:{
      href:String,
      name:String,
      isParent:Boolean,
    },
    computed:{
       setChildIcon(){
         if(this.isParent)
           return this.clickStatus?"menu-child-spell-icon":"menu-child-icon"
         else
           return ""
       }
    },

    methods:{
      handlerListClick(e){
         e.stopPropagation()
         if(this.isParent)
            this.clickStatus=!this.clickStatus
         this.$emit("onClickMenuItem",e)
      }
    }
}
</script>

<style scoped>
 .menu-list{
      list-style: none;
      margin: 4px 8px;
      font-size: 14px;
      text-align: left;
  }
  .menu-list a{
    display: inline-block;
    width: 100%;
  }
  .menu-child-icon::after{
    content: "»";
    display:block;
    float: right;
  }
  .menu-child-spell-icon::after{
    content: "﹀";
    display:block;
    float: right;
  }

</style>
