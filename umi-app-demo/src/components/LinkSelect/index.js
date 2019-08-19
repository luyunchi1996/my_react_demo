
import React, { PureComponent } from 'react';
import LinkSelectItem from './item'
import styles from './style.less';

import {warpedComponent} from  "./warpedComponent"



class LinkSelect extends PureComponent{
    data={}
    tree={}
    constructor(props){
       super(props)
       this.state={
          data:{}
       }
    }
    setTree =(tree)=>{
        debugger
    }

    setData =(data)=>{
       this.data={
          ...this.data,
          ...data
       }
       this.setState({data:this.data})

    }


    getData =()=>{
      return this.data
    }

    render(){
       const {children,value,selectData} = this.props
       let newComponentsList = []
       let isInitData = false
       if(JSON.stringify(this.data)==="{}")
           isInitData=true

       let values = value.split(" ")
       children.map((child,index)=>{
            const NewComponents=warpedComponent(child)
            const name = child.props.name
            let firstChild = ""
            if(index===0){
                firstChild = name
            }
            if(isInitData)
               this.data[name] = values[index]

            const newProps ={
                ...child.props,
                setData:this.setData,
                getData:this.getData,
                value: this.data[name],
                setTree:this.setTree,
                root:{[firstChild]:values[0]},
                selectData
            }
            newComponentsList.push(<NewComponents  {...newProps} />)
            return 0
       })
       return (
         <div className={styles["link-select"]} >
           {newComponentsList}
         </div>
       )
    }


}

export {LinkSelect,LinkSelectItem}
