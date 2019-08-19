import React, { PureComponent } from 'react';
import {Select} from 'antd';
import styles from './style.less';
import {warpedComponent} from  "./warpedComponent"

class LinkSelectItem extends PureComponent{
    constructor(props){
      super(props)
      this.state={

      }
  }

  onChangeHandler=()=>{

  }


  onPressEnterHandler =e=>{
     const {setData,name,getData,format} = this.props
     let value = e.currentTarget.value

     if(format){
      let vals=[]
      const formats = format.split("|")
      let extraKey = ""
      const data = getData()
      formats.map((key)=>{


        if(key.indexOf(":")!==-1 )
           extraKey = key

        if(extraKey !== key&&data[key]){
            vals.push(data[key])
         }

        return 0
      })
      if(vals.length !==0){


        let values=vals.join("")
        let extra = value.substring(values.length, value.length)
        setData({[extraKey]:extra,[name]:value})
        return 0
      }

     }
     setData({[name]:value})
  }
  onSelectHandler = value=>{
    const {setData,name} = this.props
    setData({[name]:value})
  }

  render(){

    const {children,label,selectData,name,getData,format,setTree,root} = this.props

    let {value} = this.props

    const selects = selectData[name]

    if(format){
       const formats = format.split("|")
       const data = getData()
       let vals=[]
       formats.map((key)=>{
         if(data[key]){
            vals.push(data[key])
         }
         return 0
       })
       if(vals.length !==0){
          value=vals.join("")
       }
    }




    const NewComponents=warpedComponent(children)




    return (
      <div>
        <span className={styles["link-select-item-label"]}>{label}</span>{
          selects&&selects instanceof Array?
            <NewComponents value={value} onSelect={(e)=>this.onSelectHandler(e)}>
              {
                 selects.map((sel)=><Select.Option value={sel.value} >{sel.value}</Select.Option>)
              }
            </NewComponents>
          :<NewComponents   style={{width:"600px"}} defaultValue={value}  onPressEnter={(e)=>{this.onPressEnterHandler(e)}} />

        }
      </div>
    )
 }

}

export default LinkSelectItem
