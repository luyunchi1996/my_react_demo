import React from 'react';

export default function Cop3(){

    return class extends React.PureComponent{

        constructor(props){
             super(props)
             this.state={}
        }

       render() {
        const { handlerClick, a} = this.props
        return (<button onClick={handlerClick} >{a?'t':'f'}</button>)
       }

    }


}