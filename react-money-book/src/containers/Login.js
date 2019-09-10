import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios'
import store from 'store'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlerInputChange=(e)=>{
      

  }

 handlerLoginClick=async (e)=>{

    const userName = this.userName.value
    const passWord = this.passWord.value
    const { history } = this.props;

    const info = await axios.get(`/login?userName=${userName}&passWord=${passWord}`)
    if(info.data instanceof Array && info.data.length!==0){
        const userInfo = info.data[0]
        store.set("userInfo",userInfo)
        history.push("/")
    }else{
       alert("该用户不存在")
    }
       

  }

  render() {
    return <div style={{height:"100%",display:"flex","justifyContent":"center"}} >
             <div style={{width:"100%",padding:"20px","paddingTop":"80px","display":"flex","flexDirection":"column" }}>
                 <input placeholder="用户名" onChange={this.handlerInputChange} style={{padding:"6px 12px",margin:"6px 0"}}   ref={(input) => {this.userName = input}} />
                 <input placeholder="密码" onChange={this.handlerInputChange} type="password" style={{padding:"6px 12px",margin:"6px 0"}}  ref={(input) => {this.passWord = input}} />
                 <button onClick={(event) => {this.handlerLoginClick(event)}} style={{padding:"6px 12px",margin:"6px 0"}}>登录</button>
             </div>
        </div>;
  }
}

export default withRouter(Login);
