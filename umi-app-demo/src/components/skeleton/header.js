import React,{PureComponent} from "react";
class Header extends PureComponent{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
         const {children,height="8%"} = this.props
         return (<div style={{height:height,backgroundColor:"blue"}}>{children}</div>)
    }

}


export default Header
