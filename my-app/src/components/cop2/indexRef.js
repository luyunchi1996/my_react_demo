import React,{PureComponent} from 'react';



class IndexRef extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            marginTop:"12px"
        }
        this.myRef = React.createRef();


    }

    componentDidMount(){
        
    }
    componentWillReceiveProps(nextProps){

    }

    warppedComponent(children){
        const Type = children.type;
        return class extends React.PureComponent{
            render(){
                return (<Type {...this.props}/>)
            }
        }
    }

    onClick =(call)=>{
        call(1)
    }

    render(){
        const {marginTop}=this.state
        let {children,childShow,setAccess} = this.props

        let childrenList =[]
        if(children&&typeof(children)!=="string"){
            if(!(children instanceof Array)){
                children =[children]
            }
            
            children.map((child)=>{
                const NewComponent = this.warppedComponent(child)
                const {onClick,webKey,...props} = child.props;
                const accessDict = setAccess();
                if(childShow(accessDict[webKey]))
                   childrenList.push(<NewComponent onClick={()=>this.onClick(onClick)} {...props} />)
            })
        }
        return (<div style={{marginTop:marginTop}} >{childrenList}</div>)

    }

}

export default IndexRef  