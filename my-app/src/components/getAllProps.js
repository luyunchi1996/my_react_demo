

export default function getAllPropsRec(o){
    console.log(o)
    let propsList =[]
    let propsMap ={}
    console.log(t(o,"root"))
    function t(o,parent){
       let count = 0
       for (let k in o){
           if(typeof(o[k]) === "object"){
               t(o[k],k)
           }
           count+=1
           propsList.push(k)
       }
       propsMap[parent] ={count}
       return {propsList,propsMap} 
    }


}