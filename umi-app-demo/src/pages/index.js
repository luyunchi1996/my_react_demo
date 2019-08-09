import styles from './index.css';
import React, { PureComponent, Fragment } from 'react';

import { connect } from 'dva';
class Index  extends PureComponent{

  constructor(props){
    super(props)
    this.state={}
  }

  componentWillMount(){
    debugger
  }
  componentDidMount(){}
  componentWillReceiveProps(nextProps){}


   render (){
      return (<div>123</div>)
   }

}

export default Index

