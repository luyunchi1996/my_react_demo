import styles from './index.css';
import React, { PureComponent, Fragment } from 'react';
// import { Radio, Checkbox, Input } from 'antd';
import { Content,Screen } from '../components/skeleton';
import Editor from '../components/editor';
// import A from '../components/A';

class Index extends PureComponent {
  checkBox = false;

  constructor(props) {
    super(props);
    this.state = {
      userAnswer:[
        {id:1,answer:["A"]},
        {id:2,answer:["C","B"]},
      ],
      value:"123456",
      dataP:[
        // {h3:"header",attr:{id:"h3"}},
      ],
      // dataP:[
      //   {h3:"header",attr:{id:"h3"}},
      //   {p:[{b:"1234"},"headers"],attr:{id:"p1",line:"2"}},
      //   {img:"",attr:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567504829439&di=f66b7fdbb26a0f48be230c7a80d37830&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F53cdd1f7c1f21.jpg"}},
      //   {img:"",attr:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567504829439&di=f66b7fdbb26a0f48be230c7a80d37830&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F53cdd1f7c1f21.jpg"}},
      //   {a:"百度",attr:{href:"http://www.baidu.com"}},
      //   {p:"p4"},
      //   {p:"p5"},
      // ],
      data:[
        {
          title:"part1",
          questions:[
            {
             id:1,
             question:"xxx1",
             type:"radio",
             items:["aaaa","bbbb","cccc","dddd"],
            //  answer:["A"],
             score:2,
             description:"aaaaaaaaa"
            },
          ],
        }
      ]
    };
    this.focusRef=React.createRef()
  }

  componentDidMount() {

  }
  clickHandler(value) {
    this.setState({ value });
  }

  handlerChange =(e)=>{

  }

  handlerOnFocus =(e)=>{
    debugger
  }

  handlerKeyUp =(e)=>{
    console.log(e.key)
    var selObj = window.getSelection();
    console.log(selObj.anchorNode,selObj.focusNode,selObj.focusOffset)
  }




  handlerOnClick=(e)=>{
    var selObj = window.getSelection();
    console.log(selObj.anchorNode,selObj.focusNode,selObj.focusOffset)
    var range  = selObj.getRangeAt(0);
    // this.focusRef.current.focus();
  }

  render() {

    const {userAnswer,data,dataP,value}=this.state
    const that = this;
    return (
      <Fragment>
        <Screen>
          <Content>
            <div>
                <Editor data={dataP} />
               {/* <div ref={this.focusRef}  className={styles.inputBox} contentEditable={true} suppressContentEditableWarning >{value}</div> */}
            </div>
        </Content>
        </Screen>
      </Fragment>
    );
  }
}

export default Index;
