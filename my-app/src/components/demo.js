import React from "react";
import DataChain from "../lib/dataChain"

export default function NewCompoment() {

  let chain =new DataChain()


  return function(Component) {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
           a:12
        };
        
      }
      componentWillMount(){
        chain.setData({
           a:"Hello a"
        })
        chain.addChain("init",(data)=>{
           return {
              ...data,
              b:13
           }
        });
        console.log(chain.getData())
        chain.addProcess("init",(data)=>{
          return {
             ...data,
             a:"process init",
             eg:25
          }
        });
        chain.addChain("init",(data)=>{
          return {
             ...data,
             g:14,
          }
       });
        chain.addChain("save",(data)=>{
           return {
              ...data,
              c:14
           }
        });
        console.log(chain.getData())
  
        
      }
     


      render() {
        return (
          <div>
            <Component />
          </div>
        );
      }
    };
  };
}
