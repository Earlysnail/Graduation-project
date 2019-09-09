import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store'
import Home from '@/components/Home'
import index from '@/components/index'
import Login from '@/components/login'

import historyRecord from '@/components/historyRecord'
import historyPublicList from '@/components/historyRecord/publicList'
import invigilateExam from '@/components/invigilateExam'
import invigilatPublicList from '@/components/invigilateExam/publicList'
import sendNodeManage from '@/components/sendNodeManage'
import sendNodePublicList from '@/components/sendNodeManage/publicList'
import teacherCourse from '@/components/teacherCourse'
import teacherPublicList from '@/components/teacherCourse/publicList'
import teacherInformation from '@/components/teacherInformation'
import teacherInfoPublicList from '@/components/teacherInformation/publicList'
import userManage from '@/components/userManage'
import userManagePublicList from '@/components/userManage/publicList'


Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: 'login',
    component: index,
    children: [{
        path: 'home',
        component: Home,
        children: [{
            path: '',
            redirect: 'teacherCourse'
          },
          {
            path: 'teacherCourse',
            component: teacherCourse,
            children: [{
              path: ':teacher',
              component: teacherPublicList
            }]
          },
          {
            path: 'invigilateExam',
            component: invigilateExam,
            children: [{
              path: ':invigilate',
              component: invigilatPublicList
            }]
          },
          {
            path: 'sendNodeManage',
            component: sendNodeManage,
            children: [{
              path: ':sendNode',
              component: sendNodePublicList
            }]
          },
          {
            path: 'historyRecord',
            component: historyRecord,
            children: [{
              path: ':history',
              component: historyPublicList
            }]
          },
          {
            path: 'teacherInformation',
            component: teacherInformation,
            children: [{
              path: ':teacherInfo',
              component: teacherInfoPublicList
            }]
          },
          {
            path: 'userManage',
            component: userManage,
            children: [{
              path: ':user',
              component: userManagePublicList
            }]
          }
        ]
      },
      {
        path: '/login',
        component: Login,
      }
    ]
  }]
})


router.beforeEach((to, from, next) => {
  // let token = JSON.stringify(Store.state.user.token)
  let token = window.localStorage.token
  if (!token && to.path != '/login') {
    next({path: 'login'})
  } else{
    next()
  }
})


export default router
