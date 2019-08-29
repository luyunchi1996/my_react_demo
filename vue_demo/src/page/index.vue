<template>
    <Screen :heightOpts="screenHeights" >
        <Header></Header>
        <Content class="content-flex" :fixedHeight="fixedHeight">
          <div class="left-content">
             <Menu/>
          </div>
          <div class="main-content">
             <router-view></router-view>
          </div>
        </Content>
    </Screen>
</template>

<script>
// import {List} from "@/components/starndlist";
import {Screen,Header,Part,Content,Footer} from "@/components/s"
import {Menu} from "@/components/menu"
export default {
  name: 'index',
  components:{
    Screen,
    Header,
    Content,
    Menu
  },
  data () {
    return {
       screenHeights:{
         Header:64
       },
       fixedHeight:true,
       chatBoxs:[]
    }

  },
  methods:{
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-flex{
      display: flex;
  }
  .content-flex .left-content{
      width: 160px;
      background-color:#fff;
      border-right:1px solid #f1f1f1;
  }
  .content-flex .main-content{
     flex-grow: 1;
  }
</style>
