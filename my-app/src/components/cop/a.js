import React,{PureComponent} from 'react';
import {Input} from 'antd'

export default class A extends PureComponent {
      
    constructor(props){
        super(props)
        this.state={}
    }
     
    componentDidMount(){
    }

    render(){
       const {value,onChange} = this.props
       return (<Input />)     
    }
}