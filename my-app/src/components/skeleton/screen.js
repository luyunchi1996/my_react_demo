import React,{PureComponent,Fragment} from "react";
class Screen extends PureComponent{

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
         let {children} = this.props
         let childMap = {}
         let heightCount = 0
         let isArray = false
         if(children&&typeof(children) !=="string"){
            if(!(children instanceof Array)) 
               children=[children]
            if(children instanceof Array){
                isArray = true
                children.map((child)=>{
                    let props =child.props
                    let height =0
                    if(!props.height){
                        if(typeof(child.type) ==="string" )
                          return 0
                        if(child.type.name ==="Header")
                           height =8
                        if(child.type.name ==="Content")
                           height =80
                        if(child.type.name ==="Footer")
                           height =12
                    }else{
                         height = parseInt(props.height)
                    }
                    childMap[child.type.name] = height
                    heightCount +=height
                })
            }

         }
         if(isArray&&heightCount !==100){
              let subHeight = 100 - heightCount
              if(childMap["Content"])
                childMap["Content"] =childMap["Content"]+subHeight
         }

         let newComponentList = []
         if(isArray){
            children.map(child=>{
                 const NewComponent = this._warpedComponent(child)
                 const {height,...props} = child.props
                 let name = child.type&&child.type.name
                 if(name)
                   newComponentList.push(<NewComponent height={`${name?childMap[name]:0}%`}  {...props} />)
                 else
                   newComponentList.push(<NewComponent {...props} />)
                
            })
         }

    
         return (<div style={{height:"100%",backgroundColor:"yellow"}} >{newComponentList.length!==0?newComponentList:children }</div>)
    }
        
}


export default Screen