import React,{PureComponent} from 'react';
import NewCompoment from '../components/demo'

@NewCompoment
class Index extends PureComponent {
     
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        
        return (<div>Hello React</div>)

    }

}

export default Index