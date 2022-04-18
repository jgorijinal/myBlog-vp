# Vite环境变量
## 环境变量 .env文件
[官网](https://cn.vitejs.dev/guide/env-and-mode.html)

`.env`
```
VITE_SOME_KEY=123
VITE_ROUTE_AUTOLOAD=true
VITE_API_URL="/api"
```
加载的环境变量也会通过`import.meta.env` 以**字符串形式**暴露给客户端源码。