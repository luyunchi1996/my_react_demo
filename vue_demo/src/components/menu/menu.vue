<template>
 <div class="menu">
   <MenuItem v-for="(o,i) in data" :key="i" :name="o.label||o.name" :href="o.href" :isParent="o.isParent" >
      <MenuItem v-for="(o1,j) in o.children" :key="j" :name="o1.label||o1.name" :href="o1.href" :isParent="o1.isParent">
         <MenuItem v-for="(o2,k) in o1.children" :key="k" :name="o2.label||o2.name" :href="o2.href" ></MenuItem>
      </MenuItem>
   </MenuItem>
 </div>
</template>

<script>

import MenuItem from "./menuItem"
import routes from "../../router/routes"
import { defer } from 'q';

function setRouteData(routes){
  let flag=true
  function setRouteList(rlist,routeList,parentItem){
     function setItems(routeList,rou,parentItem){
       routeList.forEach((rous)=>{

          if(rous.name===rou.parent){
              rous.isParent=true
              rou.isParent=false
              rous.children.push(rou)
              flag=true
          }else{
            //  rou.isParent=false
             setItems(rous.children,rou,rous)
          }
        })
       if(routeList.length===0){
           flag=false
       }
     }

      if(rlist.length===0){
        return routeList;
      }
      const rou = rlist.shift()
      if(routeList.length===0){
         routeList.push(rou)
      }else{
      setItems(routeList,rou,routeList[0])

      if(!flag){
         routeList.push(rou)
      }

      }




      return setRouteList(rlist,routeList)
  }
  let allRoute=[]
  function getAllRoute(rs,parent){
      rs.forEach(route => {
          let newR =JSON.parse(JSON.stringify(route))
          newR.children=[]
          newR.component={}
          newR.parent=route.name
          newR.href = `#${route.path}`
          newR.parent=parent
          if(route.children){
            newR.href = `#`
            if(!route.hideMenu)
               allRoute.push(newR)
            getAllRoute(route.children,route.name)
          }else{
            if(!route.hideMenu)
             allRoute.push(newR)
          }
      })
  }

   
  getAllRoute(routes,"")

  const list = setRouteList(allRoute,[])
  return list;

}
export default {
    name:"Menu",
    components:{
      MenuItem
    },
    data(){

      const routeDatas= setRouteData(JSON.parse(JSON.stringify(routes)))
      return{
        isParent:true,
        data:routeDatas
      }

    }

}
</script>

<style scoped>
  .menu{
      padding: 12px;

  }
</style>
