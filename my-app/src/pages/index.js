import React,{PureComponent,Fragment} from 'react';
// import getAllPropsRec from '../components/getAllProps'
// import SuperDemo from '../components/cop'
// import {Button} from 'antd'
// import NewCompoment from '../components/demo'
// import Cop2 from '../components/cop2'
// import Cop3 from '../components/cop2/indexFun'
   
import Header from '../components/skeleton/index'
import './index.css'

// @NewCompoment()
// const C = Cop3()
  
// @SuperDemo
class Index extends PureComponent {
    initLoad = false 

    constructor(props){
        super(props)
        this.state={
            a:false,
        }
    }
    componentWillMount(){
        this.initLoad = true
    }
    componentDidMount(){
        this.initLoad = false
    }

    handlerClick =(value)=>{
        const {a} = this.state
        this.setState({a:!a})
    }
    render(){
        const {a} = this.state
        return (
            <Fragment>
                <div style={{width:"100%",height:"100%",backgroundColor:"red"}}></div>
             {/* {
               !this.initLoad?<div className={`box ${a?'':'boxOut'} `}  >   
                   123  
                </div>:""
             } */}
             {/* <div className='box1'>
                 <div className='wrap'>
                     <p>1</p>
                     <p>2</p>
                     <p>3</p>
                     <p>4</p>
                 </div>
             </div> */}
             
             {/* <IndexRef childShow={(value)=>value.indexOf("role4")!==-1} setAccess={
                 ()=>{
                     return {
                        "key1":"role2|role3|role4",
                        "key2":"role1|role3|role4",
                        "key3":"role1|role2|role4",
                        "key4":"role1|role2|role3",
                    } 
                 }
             }>
                 <div webKey="key1" onClick={(value)=>{console.log(value,this,1)}}>role2|role3|role4</div>
                 <div webKey="key2" onClick={(value)=>{console.log(value,this,2)}}>role1|role3|role4</div>
                 <div webKey="key3" onClick={(value)=>{console.log(value,this,3)}}>role1|role2|role4</div>
                 <div webKey="key4" onClick={(value)=>{console.log(value,this,4)}}>role1|role2|role3</div>
             </IndexRef> */}
               {/* <Header></Header> */}
               {/* <Footer></Footer> */}
               {/* <button onClick={this.handlerClick}>on</button> */}
            </Fragment>
        )
    }
}

export default Index