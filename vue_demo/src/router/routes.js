import index from '@/page/index'
import login from '@/page/login'
import chat from '@/page/chat'

const routes=[
  {
    path: '/',
    name: 'index',
    component: index,
    hideMenu:true,
    children:[
      {
        path: '/chat',
        name: 'chat',
        label:"chat",
        component: chat,
        children:[{
          path: '/chats',
          name: 'chats',
          label:"chats",
          component: chat,
        }

        ],
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    label:"login",
    component: login,
    children:[{
      path: '/s',
      name: 's',
      label:"s",
      component: chat,
      children:[{
        path: '/s1',
        name: 's1',
        label:"s1",
        component: chat,
      }
      ],
    }
    ],
  }
]


export default routes
