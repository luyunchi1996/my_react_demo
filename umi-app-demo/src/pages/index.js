import styles from './index.css';
import React, { PureComponent, Fragment } from 'react';
import {Header,Footer,Content,LeftContent,Screen} from '../components/skeleton'
import { connect } from 'dva';



class Index  extends PureComponent{

  constructor(props){
    super(props)
    this.state={}
  }

   render (){
      return (
        <Fragment>
          <Screen>
            <Header></Header>
          </Screen>
        </Fragment>
      )
   }

}

export default Index

