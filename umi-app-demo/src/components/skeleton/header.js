import React,{PureComponent} from "react";
class Header extends PureComponent{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
         const {children,height="8%",backgroundColor="blue"} = this.props
         return (<div style={{height,backgroundColor}}>{children}</div>)
    }

}


export default Header
