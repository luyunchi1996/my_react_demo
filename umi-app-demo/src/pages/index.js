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
 componentDidMount(){

 }

  clickHandler(value){
      this.setState({value})
  }

   render (){
      return (
        <Fragment>
          <Screen>
             <Header></Header>
             <Content></Content>
             <Footer></Footer>

          </Screen>
        </Fragment>
      )
   }

}

export default Index

