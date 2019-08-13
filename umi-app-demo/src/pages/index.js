import styles from './index.css';
import React, { PureComponent, Fragment } from 'react';
import {Header,Footer,Content,LeftContent,Screen} from '../components/skeleton'
import { connect } from 'dva';



class Index  extends PureComponent{
  checkBox=false

  constructor(props){
    super(props)
    this.state={
    }
  }

//   _warpedComponent(children){
//     const Type = children.type;
//     return class extends React.PureComponent{
//         render(){
//             return (<Type {...this.props}/>)
//         }
//     }
// }

 componentDidMount(){
    //  setInterval(()=>{
    //   this.clickHandler(Math.floor(Math.random()*255))
    //  },5000)
 }

  clickHandler(value){
      this.setState({value})
  }

   render (){
      const {value,boxIn} = this.state
    //   let that = this

    //   function _renderList(value){
    //    const NewComponent =  that._warpedComponent(<div />)
    //    const rgb =  `rgb(${ Math.floor(Math.random()*255)},${ Math.floor(Math.random()*255)},${ Math.floor(Math.random()*255)})`
    //    return <NewComponent className={`${styles.box} ${styles.boxIn} ${styles.blue}` } style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:rgb}} >{value}</NewComponent>
    //  }

      return (
        <Fragment>
          {/* <div className={`${styles.boxs}`}>
              {
                _renderList(value)
              }
          </div>
          <p >
            <i onClick={()=>this.clickHandler(0)}>1</i>
            <i onClick={()=>this.clickHandler(1)}>2</i>
            <i onClick={()=>this.clickHandler(2)}>3</i>
            <i onClick={()=>this.clickHandler(3)}>4</i>
            <i onClick={()=>this.clickHandler(4)}>5</i>
          </p> */}
          <Screen>
            <Header />
            <Content>
               <LeftContent />
               <div>content</div>
            </Content>
          </Screen>
        </Fragment>
      )
   }

}

export default Index

