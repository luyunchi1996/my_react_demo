<template>
   <Screen>

       <Content class="content" height="100%">
          <div class="warp">
            <div class="formItems">
               <Input class="item" placeholder="用户名"/>
               <Input class="item" type="password" placeholder="密码"/>
               <Checkbox v-model="autologin">自动登录</Checkbox>
               <Button class="item btn-login" type="primary">登录</Button>
            </div>
            <div class="formItems login-footer">
                 <p><span>用户名</span><span></span></p>
                 <p><a>注册</a></p>
            </div>
          </div>
       </Content>
   </Screen>
</template>
<script>

import {Screen,Content} from "@/components/s"

export default {
   name:"login",
   components:{
      Screen,
      Content
   },
   data(){
      return {
        data:{
          autologin:true
        },
       fixedHeight:true,
      }
   },
   methods:{

   }

}
</script>
<style>
   .content{
       display: flex;
       justify-content: center;
       align-items: center
   }
   .content .warp{
       background-color: #ffffff;
       position: relative;
       top: -15%;
       width: 320px;
       min-height: 280px;
       border-radius:5px;
       box-shadow: 0 0 3px #888
   }
   .formItems{
      padding: 20px;
   }
   .login-footer{
      display: flex;
      justify-content: space-between;
   }
   .item{
      margin: 10px 0;
      width: 100%;
   }
   .btn-login{
      font-size: 16px;
      height: 40px;
   }
   .item input{
      height: 40px;
      padding: 12px;
      font-size: 16px;
      color: #463535;
   }

</style>
