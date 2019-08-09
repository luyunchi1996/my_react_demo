import React,{PureComponent} from "react";
class Footer extends PureComponent{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
         const {children,height="12%"} = this.props
         return (<div style={{height:height,backgroundColor:"green"}} >{children}</div>)
    }

}


export default Footer
