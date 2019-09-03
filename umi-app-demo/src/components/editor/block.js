import React, { PureComponent, Fragment } from 'react';
import styles from './style.less'


class Block extends PureComponent {


  render(){
     const {children} = this.props
     return (<p>{children}</p>)
  }
}

export default Block;
