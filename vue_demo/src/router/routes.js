import index from '@/page/index'
import login from '@/page/login'
import chat from '@/page/chat'
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
        label:"系统管理",
        component:index,
        children:[
           {
              path: '/system/user',
              name: 'UserSetting',
              label:"用户管理",
              component: UserSetting
           },
           {
            path: '/system/role',
            name: 'RoleSetting',
            label:"角色管理",
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
