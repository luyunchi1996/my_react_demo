import styles from './index.css';
import React, { PureComponent, Fragment } from 'react';
import {Select,Input} from 'antd';
import {Header,Footer,Content,LeftContent,Screen} from '../components/skeleton'
import {LinkSelect,LinkSelectItem} from '../components/LinkSelect'
import { connect } from 'dva';
import { from } from 'rxjs';

const selectData =[{
		"code": "江苏省",
		"parentId": null,
		"value": 1
	},
	{
		"code": "南京市",
		"parentId": 1,
		"value": 2
	},
	{
		"code": "无锡市",
		"parentId": 1,
		"value": 3
	},
	{
		"code": "徐州市",
		"parentId": 1,
		"value": 4
	},
	{
		"code": "常州市",
		"parentId": 1,
		"value": 5
	},
	{
		"code": "苏州市",
		"parentId": 1,
		"value": 6
	},
	{
		"code": "南通市",
		"parentId": 1,
		"value": 7
	},
	{
		"code": "连云港市",
		"parentId": 1,
		"value": 8
	},
	{
		"code": "淮安市",
		"parentId": 1,
		"value": 9
	},
	{
		"code": "盐城市",
		"parentId": 1,
		"value": 10
	},
	{
		"code": "扬州市",
		"parentId": 1,
		"value": 11
	},
	{
		"code": "镇江市",
		"parentId": 1,
		"value": 12
	},
	{
		"code": "泰州市",
		"parentId": 1,
		"value": 13
	},
	{
		"code": "宿迁市",
		"parentId": 1,
		"value": 14
	},
	{
		"code": "姑苏区",
		"parentId": 6,
		"value": 15
	},
	{
		"code": "沧浪区",
		"parentId": 6,
		"value": 16
	},
	{
		"code": "平江区",
		"parentId": 6,
		"value": 17
	},
	{
		"code": "金阊区",
		"parentId": 6,
		"value": 18
	},
	{
		"code": "相城区",
		"parentId": 6,
		"value": 19
	},
	{
		"code": "吴中区",
		"parentId": 6,
		"value": 20
	},
	{
		"code": "工业园区",
		"parentId": 6,
		"value": 21
	},
	{
		"code": "虎丘区",
		"parentId": 6,
		"value": 22
	},
	{
		"code": "吴江区",
		"parentId": 6,
		"value": 23
	},
	{
		"code": "常熟区",
		"parentId": 6,
		"value": 24
	},
	{
		"code": "昆山市",
		"parentId": 6,
		"value": 25
	},
	{
		"code": "张家港市",
		"parentId": 6,
		"value": 26
	},
	{
		"code": "太仓市",
		"parentId": 6,
		"value": 27
	},
	{
		"code": "石路街道",
		"parentId": 15,
		"value": 28
	},
	{
		"code": "金阊街道",
		"parentId": 15,
		"value": 29
	},
	{
		"code": "桃花坞街道",
		"parentId": 15,
		"value": 30
	},
	{
		"code": "观前街道",
		"parentId": 15,
		"value": 31
	},
	{
		"code": "娄门街道",
		"parentId": 15,
		"value": 32
	},
	{
		"code": "虎丘街道",
		"parentId": 15,
		"value": 33
	},
	{
		"code": "留园街道",
		"parentId": 15,
		"value": 34
	},
	{
		"code": "友新街道",
		"parentId": 15,
		"value": 35
	},
	{
		"code": "吴门桥街道",
		"parentId": 15,
		"value": 36
	},
	{
		"code": "沧浪街道",
		"parentId": 15,
		"value": 37
	},
	{
		"code": "胥江街道",
		"parentId": 15,
		"value": 38
	},
	{
		"code": "双塔街道",
		"parentId": 15,
		"value": 39
	},
	{
		"code": "白洋湾街道",
		"parentId": 15,
		"value": 40
	},
	{
		"code": "苏锦街道",
		"parentId": 15,
		"value": 41
	},
	{
		"code": "火车站",
		"parentId": 15,
		"value": 42
  },


	{
		"code": "甪直镇",
		"parentId": 20,
		"value": 43
  },

]

// const selectData={
//    province:[{
//      name:"江苏省",value:"江苏省","id":1,"parentId":null

//   },
//   {
//     name:"河北省",value:"河北省","id":2
//   }
// ],
//   city:[
//     {
//       name:"苏州市",value:"苏州市","id":3,"parentId":1,

//    },{
//       name:"南通市",value:"南通市","id":4,"parentId":2,
//    }
//   ],
//   area:[
//     {
//       name:"吴中区",value:"吴中区","id":5,"parentId":3,
//     },
//     {
//       name:"平江区",value:"平江区","id":6,"parentId":3,
//     }
//   ],
//   street:[
//     {
//       name:"甪直镇",value:"甪直镇","id":7,"parentId":5,
//     },
//     {
//       name:"盘蠡镇",value:"盘蠡镇","id":8,"parentId":5,
//     }
//   ],
//   village:[
//     {
//       name:"淞南",value:"淞南","id":9,"parentId":7,
//     },
//     {
//       name:"淞北",value:"淞北","id":10,"parentId":7,
//     },
//   ]
// }
class Index  extends PureComponent{
  checkBox=false

  constructor(props){
    super(props)
    this.state={

    }
  }



 componentDidMount(){

 }

templateData=(data)=>{
   return {
      ...data,
      id:data.value,
      value:data.code,
      name:data.code,
      index:data.index
   }
}

  clickHandler(value){
      this.setState({value})
  }

   render (){
      return (
        <Fragment>
          <LinkSelect selectData={selectData} templateData={this.templateData} value="江苏省 苏州市 吴中区 甪直镇">
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
            {/* <LinkSelectItem name="address" format="province|city|area|street|village|detail:address" label="地址">
                <Input  placeholder="请输入详细地址"  />
            </LinkSelectItem> */}
          </LinkSelect>
        </Fragment>
      )
   }

}

export default Index

