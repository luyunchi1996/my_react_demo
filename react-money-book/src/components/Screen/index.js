import React from "react";
import './index.css'

export const Screen=(props)=>{
    const {children} = props
    return (<div className="screen">{children}</div>)
}