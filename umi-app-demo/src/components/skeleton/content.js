import React,{PureComponent} from "react";
import {LeftContent} from './'

class Content extends PureComponent{

    constructor(props){
        super(props)
        this.state={}
    }

    
    _warpedComponent(children){
        const Type = children.type;
        return class extends React.PureComponent{
            render(){
                return (<Type {...this.props}/>)
    
            }
        }
    }
    
    

    render(){
         const {height="80%",fixHeight=false} = this.props
         let {children} = this.props
         let style = {minHeight:height,display:"flex"}
         if(fixHeight)
            style = {height:height,overflow:"auto",display:"flex"}

         const leftContent =<LeftContent/>
         let newComponentList = []
         if(children&&typeof(children) !=="string"){

            if(!(children instanceof Array))
               children=[children]

            if(children instanceof Array){
                children.map((child)=>{
                    if(typeof(child.type)!=="string"){
                       if(child.type.name===leftContent.type.name){
                            const NewComponent = this._warpedComponent(child)
                            newComponentList.push(<NewComponent   {...child.props}/>)
                        }else{
                            const NewComponent = this._warpedComponent(child)
                            newComponentList.push(<NewComponent style={{flexGrow:1}} {...child.props}/>)
                        }

                    }else{
                        const NewComponent = this._warpedComponent(child)
                        newComponentList.push(<NewComponent style={{flexGrow:1}} {...child.props}/>)
                    }
                    return 0
                })

            }

         }
        return (<div style={style} >{newComponentList.length!==0?newComponentList:children}</div>)
    }

}


export default Content
