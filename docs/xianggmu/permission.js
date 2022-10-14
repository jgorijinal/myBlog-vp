import router from './router'


router.beforeEach((to, from, next) => {
  if (store.getters.token) { // 已登录
    if (to.path === 'login') {
      next('/')
    } else {
      if (!store.getters.hasUserInfo) {
        store.dispatch('user/getUserInfoAction')
      }
      next()
    }
  } else { // 没有登录
    if (whiteList.inCludes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})