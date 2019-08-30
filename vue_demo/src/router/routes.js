import index from '@/page/index'
import login from '@/page/login'
import chat from '@/page/chat'
import ParentView from '@/components/parent-view/index'
import UserSetting from "@/page/system/user"
import RoleSetting from "@/page/system/role"


const routes=[
  {
    path: '/',
    name: 'index',
    component:index,
    hideMenu:true,
  },
      {
        path: '/system',
        name: 'System',
        label:"x",
        component:index,
        children:[
           {
              path: '/system/user',
              name: 'UserSetting',
              label:"x1",
              component: UserSetting,
           },
           {
            path: '/system/role',
            name: 'RoleSetting',
            label:"x2",
            component: RoleSetting,
          },
        ]
      },
  {
    path: '/login',
    name: 'login',
    label:"login",
    component: login,
    hideMenu:true,
  }
]


export default routes
