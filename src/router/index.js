import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';

Vue.use(Router); //$router：放置的路由的函数
                //$route: 放置的路由的属性

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active-exact',
  linkActiveClass: 'active',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    {
      path: '/home',
      name: 'home',
      component: Home,
      beforeEnter (to, from, next) {
        next();
      }
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('../views/Learn')
    },
    {
      path: '/student',
      name: 'student',
      meta: {
        login: true
      },
      component: () => import('../views/Student')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About')
    },
    {
      path: '/community',
      name: 'community',
      meta: {
        login: true
      },
      redirect: '/community/academic',//重定向，跳转到指定的路径
      component: () => import('../views/Community'),
      children: [
        {
          path: 'academic',
          name: 'academic',
          component: () => import('../views/Academic')
        },
        {
          path: 'download',
          name: 'download',
          component: () => import('../views/Download')
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import('../views/Personal')
        },
      ],
    },
    {
      path: '*',//*代表所有设置的路径都匹配不上
      redirect (to) {
        // to: 跳转的信息
        if(to.path == '/') {
          return '/home'
        }else{
          return '/notfound'
        }
      }
    },
    {
      path: '/question/:id',
      name: 'question',
      component: () => import('../views/Question')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login')
    },
    {
      path: '/notfound',
      component: () => import('../views/NotFound')
    }
  ]
})























// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)//添加进去$router $route

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
