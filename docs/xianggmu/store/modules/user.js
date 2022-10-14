export default {
  namespaced: true,
  state() {
    return {
      token: storage.getItem('token') || '',
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      storage.setItem('token' , token)
    },
  },
  actions: {
    loginAction(context, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password,
        })
          .then((res) => {
            context.commit('setToken', res.token)
            // 登录后跳转
            router.push('/')
            resolve()
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    async getUserInfoAction(context) {
      const res = await this.getUserInfoAction()
      context.commit('setUserInfo', res)
      return res  // 后面做权限是用到
    }
  },
};
