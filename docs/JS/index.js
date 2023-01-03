async function getData() {
  const response = await fetch('http://192.168.0.110:1888/01_params/postjson', { // 第二个参数 : 对象
    method: 'post', // post 方法
    headers: {
      "Content-type":"application/json"  // 设置 json 类型
    },
    body: JSON.stringify({  // 字符串
      name: 'frank',
      age:18
    })
  })
  const res = await response.json()
  console.log(res)
}

