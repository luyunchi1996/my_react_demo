
import React,{PureComponent} from 'react';
import { Button } from 'antd';

class Cop2 extends PureComponent{

    constructor(props){
         super(props)
         this.state = {
             a:false
         }
    }
    
    componentWillReceiveProps(nextProps){
    }


    render(){
        const {handlerClick,a} = this.props
        return <Button onClick={handlerClick} >{a?'t':'f'}</Button>
    }
}

export default Cop2