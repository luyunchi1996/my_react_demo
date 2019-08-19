import styles from './index.css';
import React, { PureComponent, Fragment } from 'react';
import {Select,Input} from 'antd';
import {Header,Footer,Content,LeftContent,Screen} from '../components/skeleton'
import {LinkSelect,LinkSelectItem} from '../components/LinkSelect'
import { connect } from 'dva';
import { from } from 'rxjs';

const selectData ={
  province:[{
     name:"江苏省",value:"江苏省","id":1,
  },
  {
    name:"河北省",value:"河北省","id":2
  }
],
  city:[
    {
      name:"苏州市",value:"苏州市","id":3,"parentId":1,

   },{
      name:"南通市",value:"南通市","id":4,"parentId":1,
   }
  ],
  area:[
    {
      name:"吴中区",value:"吴中区","id":5,"parentId":3,
    },
    {
      name:"平江区",value:"平江区","id":6,"parentId":3,
    }
  ],
  street:[
    {
      name:"甪直镇",value:"甪直镇","id":7,"parentId":5,
    },
    {
      name:"盘蠡镇",value:"盘蠡镇","id":8,"parentId":5,
    }
  ],
  village:[
    {
      name:"淞南",value:"淞南","id":9,"parentId":7,
    },
    {
      name:"淞北",value:"淞北","id":10,"parentId":7,
    },
  ]
}


class Index  extends PureComponent{
  checkBox=false

  constructor(props){
    super(props)
    this.state={

    }
  }



 componentDidMount(){

 }

  clickHandler(value){
      this.setState({value})
  }

   render (){
      return (
        <Fragment>
          <LinkSelect selectData={selectData} value="江苏省">
            <LinkSelectItem name="province"  label="省/直辖市">
               <Select/>
            </LinkSelectItem>
            <LinkSelectItem name="city" label="市">
               <Select/>
            </LinkSelectItem>
            <LinkSelectItem name="area" label="区/县">
               <Select/>
            </LinkSelectItem>
            <LinkSelectItem name="street" label="街道/乡镇">
                <Select/>
            </LinkSelectItem>
            <LinkSelectItem name="village" label="村">
                 <Select/>
            </LinkSelectItem>
            <LinkSelectItem name="address" format="province|city|area|street|village|detail:address" label="地址">
                <Input  placeholder="请输入详细地址"  />
            </LinkSelectItem>
          </LinkSelect>
        </Fragment>
      )
   }

}

export default Index

