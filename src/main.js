import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
import store from './store/index'

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // console.log(to);
  let needLogin = to.matched.some(route => route.meta && route.meta.login);
  if(needLogin) {
    let isLogin = document.cookie.includes('login=true');
    if(isLogin) {
      next();
      return;
    }
    let toLoginFlag = window.confirm('登录吗？')
    if(toLoginFlag) {
      next('/login')
    }
    return;
  }
  next();
})

// router.beforeResolve((to, from, next) => {//全部加载完执行
//   next();
// })

// router.afterEach(() => {

// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
