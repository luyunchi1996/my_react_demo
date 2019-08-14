<template>
    <div class="box">
      <Screen :heightOpts="screenHeights" >
            <Header>
              <div @click="showLeftContent" style="font-size:22px;">+</div>
              <div>当前会话: test</div>
            </Header>
            <Content :fixedHeight="fixedHeight" class="index_content">
              <div class="left_content" v-if="leftContentShow" >
                  <ul class="left_content_list">
                    <li class="item">
                       <img src="../assets/my.png"/>
                       <span>test</span>
                    </li>
                  </ul>
              </div>
              <div class="index_content_warp">
                <div v-for="(chats,index) in chatBoxs" :key="index" class="chatblock" :class="chats.contentDirect">
                   <img src="../assets/my.png" />
                   <p>{{chats.content}}</p>
                </div>
              </div>

            </Content>
            <Footer class="footer_index">
                <select v-model="sendValue" @change="sendChange">
                   <option value="right">发送方</option>
                   <option value="left">回复方</option>
                </select>
                <textarea v-model="sendMessage" />
                <button @click="handlerSubmit"  >submit</button>
            </Footer>
      </Screen>
    </div>
</template>

<script>
// import {List} from "@/components/starndlist";
import {Screen,Header,Part,Content,Footer} from "@/components/s"
export default {
  name: 'index',
  components:{
    Screen,
    Header,
    Part,
    Content,
    Footer,
  },
  data () {
    return {
       screenHeights:{
          Header:64,
          Footer:80
       },
       fixedHeight:true,
       leftContentShow:false,
       sendValue:"right",
       sendMessage:"",
       chatBoxs:[]
    }

  },
  methods:{
     showLeftContent(){
        this.leftContentShow = !this.leftContentShow
     },
     sendChange(value){
     },
     handlerSubmit(){
      if(this.sendMessage)
         this.chatBoxs.push(
         {
            content:this.sendMessage,
            contentDirect:this.sendValue
         }
         )
         this.sendMessage=""
     }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
     display: flex;
     flex-wrap: wrap;
  }
  .divs{
     font-size: 60px;
  }
  .index_content{
     display: flex;
     position: relative;

  }
  .index_content_warp{

    height: 100%;
    flex-grow: 1;
    overflow: hidden auto;
  }

  .index_content_warp .chatblock{

      width: 70%;
      margin: 12px 2%;
      display: flex;
      /* align-items: center; */
  }
  .index_content_warp .right{
     position: relative;
     left:26%;
     flex-direction: row-reverse;
  }
  .index_content_warp .chatblock p{
     background-color: #e3f1cb;
     padding: 6px;
     overflow:hidden;
     font-size: 14px;
     display: flex;
     align-items: center;
     word-break: break-all;
  }
  .index_content_warp .chatblock img{
     width: 32px;
     height: 32px;
     margin: 6px;
  }
  .left_content{
     width: 120px;
     height: 100%;
     background-color: rgba(0, 0, 0, 0.5);
     position: absolute;
     top:0;
     overflow: hidden auto;
  }

 .left_content_list .item{
    background-color: #efefef;
    display: flex;
    padding: 12px;
    border-bottom: 1px solid #dcdcdc;
 }
 .left_content_list .item img{
    width: 32px;
    height: 32px;
 }
  .left_content_list .item span{
    display: flex;
    align-items: center;
    padding:0 6px;
 }
 .footer_index select{
    float: left;
    width: 18%;
      height: 40px;
     border: 0;
     background-color: #dcdcdc;
 }
  .footer_index textarea{
     float: left;
     width: 67%;
     height: 40px;
     border: 0;
     background-color: #dcdcdc;
     text-indent: 14px;
  }
  .footer_index button{
     float: left;
     width: 15%;
     height: 40px;
     border: 0;
     color: #fff;
     background-color: #4073f9;

  }
</style>
