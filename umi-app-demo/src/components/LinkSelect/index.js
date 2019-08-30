
import React, { PureComponent } from 'react';
import LinkSelectItem from './item';
import _ from 'lodash';
import styles from './style.less';

import {warpedComponent} from  "./warpedComponent"



class LinkSelect extends PureComponent{
    data={}

    parentIds={}

    selectDatas={}

    treeTemplate=[]

    linkProps=[]

    treeTemplate ={}

    treeTemplateChild={
      name:"",
      children:[]
    }

    constructor(props){
       super(props)
       this.state={
        // eslint-disable-next-line react/no-unused-state
        data:{}
       }
    }



    componentWillMount(){
      const {children,selectData} = this.props

      children.map((child,index)=>{

       const {name} = child.props

       let firstChild = ""
       this.linkProps.push(name)
       if(index===0){
         firstChild = name
         this.setParentIds({[firstChild]:0})
       }else{
         this.setParentIds({[name]:0})
       }
       return 0
      })

      if (selectData instanceof Array){
        this.selectDatas = this.setSelectedData(selectData,{})
      }else{
          this.selectDatas =selectData
      }

    }

    setTree =()=>{

    }

    setSelectedData(selectData,treeDict){
        const {templateData} = this.props
        const selectDataTemp = []
        let that = this
        let dictStack=[]
        createTreeDict(selectData,treeDict,0)

        function uniq(array){
          var temp = []; //一个新的临时数组
          for(var i = 0; i < array.length; i++){
              if(temp.indexOf(array[i]) === -1){
                  temp.push(array[i]);
              }
          }
          return temp;
       }



        function createTreeDict(selectData,treeDict,index){

            function putMapDict(treeDict,obj,count,keyMap){
              if(dictStack.length!==0&& !treeDict[dictStack[0]]){
                  count+=1;
              }


               for(let key in treeDict){
                    // console.log(key+"--"+data.parentId)
                    if(key ==="type") continue
                    if(key === `${obj.parentId}`){
                        const type = that.linkProps[count]
                        treeDict[key] = {...treeDict[key],[`${obj.id}`]:{"type":type }}
                        // console.log("treeDicts: ",key," oid: ",obj.id)
                        selectDataTemp.push({...obj,
                          "type":type
                        })
                      }else{
                        // console.log("putMapDict: ",key," oid: ",obj.id)
                        dictStack.push(key)
                        if(dictStack.length>=2){
                            dictStack.shift()
                        }
                        putMapDict(treeDict[key],obj,count,keyMap)
                      }
                }

            }
            // 取出任一一条数据
            let data = templateData(selectData.shift())
            if(!data.index){
              data.index = index
              index+=1
            }

             // 当其可放入时则将其放入
             // 否则将其放回,当数组为空时,则递归终止

             if(!data.parentId){

                treeDict[`${data.id}`]={
                   type:that.linkProps[0]
                }
                selectDataTemp.push({...data,
                  "type":that.linkProps[0]
                })

            }else{
                 // 当parentId不为空时,遍历所有的元素,如果其等于该key时则将其放入,否则放回原数组
                //  dictStack.push(data.parentId)
                    dictStack=[]
                //  dictStack = uniq(dictStack)
                 putMapDict(treeDict,data,1,[])
             }

             if(selectData.length===0){
               return treeDict
             }
            createTreeDict(selectData,treeDict,index)
        }


         let results = _.groupBy(selectDataTemp,"type")
         return results
    }

    setData =(data)=>{
       this.data={
          ...this.data,
          ...data
       }
       // eslint-disable-next-line react/no-unused-state
       this.setState({data:this.data})

    }

    getParentIds =()=>this.parentIds

    setParentIds =(pid)=>{
        this.parentIds={
          ...this.parentIds
          ,...pid}
    }

    getData =()=>this.data


    render(){
       const {children,value} = this.props
       const newComponentsList = []
       let isInitData = false
       if(JSON.stringify(this.data)==="{}")
           isInitData=true
       const values = value.split(" ")
       children.map((child,index)=>{
            const NewComponents=warpedComponent(child)
            const {name} = child.props
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
                root:firstChild,
                linkProps:this.linkProps,
                getParentIds:this.getParentIds,
                setParentIds:this.setParentIds,
                selectData:this.selectDatas
            }
            newComponentsList.push(<NewComponents {...newProps} />)
            return 0
       })
       return (
         <div className={styles["link-select"]}>
           {newComponentsList}
         </div>
       )
    }


}

export {LinkSelect,LinkSelectItem}
