import React,{PureComponent} from "react";
class Footer extends PureComponent{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
         const {children,height="12%",backgroundColor="blue"} = this.props
         return (<div style={{height,backgroundColor}} >{children}</div>)
    }

}


export default Footer
