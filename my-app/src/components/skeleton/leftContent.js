import React,{PureComponent,Fragment} from "react";
class LeftContent extends PureComponent{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
         const {children } = this.props
         let style = {width:"12%",overflow:"auto",backgroundColor:"#ceffba"}
         return (<div style={style} >{children}</div>)
    }
        
}


export default LeftContent