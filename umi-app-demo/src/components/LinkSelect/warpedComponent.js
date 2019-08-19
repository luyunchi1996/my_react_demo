import React, { PureComponent } from 'react';



export function warpedComponent(children){
  const Type = children.type;
  return class extends PureComponent{
      render(){
          return (<Type {...this.props}/>)

      }
  }
}
