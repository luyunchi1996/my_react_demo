import React,{Component} from "react";


/**
 *   1.通过获取服务端数据,并根据不同的设置来渲染不同类型的列表,行 或 列 的显示方式
 *    在获取服务端数据时 加载一个 loading 之后根据服务端返回数据结果 以此显示返回的状态 无数据 和 有数据
 *   4.共享状态: loading 
 *   2.内部状态: 选中状态 isSelectRow|isSelectCol  
 *   3.外部 props: 列表数据 items:Array  显示方式 行 或 列  renderContentModel:row|col   内容函数 renderRow|renderCol 事件 onClick 
 * 
*/


class List extends Component{
    

    render(){
        return (<div></div>)
    }
}

export default List