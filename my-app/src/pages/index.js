import React,{PureComponent} from 'react';
import getAllPropsRec from '../components/getAllProps'
import SuperDemo from '../components/cop'
import {Button} from 'antd'
// import NewCompoment from '../components/demo'


// @NewCompoment()

@SuperDemo
class Index extends PureComponent {
     
    constructor(props){
        super(props)
        this.state={
            a:12
        }
    }
    componentDidMount(){

    //     const test ={
    //         a:"a",
    //         c:{
    //             ca:"ca1",
    //             cb:{
    //                 cba:"cba1",
    //                 cbb:"cbb1",
    //                 cbc:"cbc1"
    //             },
    //             cc:{
    //                 cca:"cca1",
    //                 ccb:{
    //                     ccba:"ccba1"
    //                 }
    //             },
    //             cd:"cd1"
    //         }
    //    }
    //     getAllPropsRec(test)
    }
    
    getData =()=>{
        const {component:{
            getData
        }} = this.props
        console.log(getData())
    
    }

    render(){
        const {component:{
            addComponentInList,
            renderList
        }} = this.props
        addComponentInList([{
            key: 'key',
            label: 'label',
            data:{
                init:()=>{},
                save:()=>{},
                rules:[]
            },
            show:()=>true,
            type: 'input',
            props:{}
        },
        ])


        return (
        <div>
           {renderList()}
           <Button type="primary" onClick={this.getData}>GetData</Button>
        </div>)

    }

}

export default Index