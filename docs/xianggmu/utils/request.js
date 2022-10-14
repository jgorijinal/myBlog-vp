import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout:5000
})


service.interceptors.request.use((config) => {
  // 统一注入 token
  if (store.getters.token) {
    config.headers.Authorization = 'Bearer ' + store.getters.token 
  }
  return config

}, (err) => {
  console.log(err)
})

// 响应
service.interceptors.response.use(res => {
  const { success, data, message } = res
  if (success) {
    return res.data 
  } else {
    // 请求成功, 业务失败
    ElMessage.error(message)
    return Promise.reject(new Error(message))
  }
}, (err) => {
  // token 超时处理
  ElMessage.error(err.message)
  return Promise.reject(err)
})


export default service