const fs = require('fs')

fs.readFile('./1.txt', 'utf8', function (err,dataStr) {
  if (err) {
      console.log('文件读取失败! ' + err.message)
  }
  // console.log('文件读取成功!')
  
  // 数据按空格分割
  // 分割后字符串, 遍历, 替换字符串
  // 新数组每一项, 进行合并
  const arrOld = dataStr.split('')
  const arrNew = []
  arrOld.forEach(item => {
    arrNew.push(item.replace('=',':'))
  })
  const newStr = arrNew.join('\r\n')

  // 写入文件
  fs.writeFile('./2.txt', newStr, function (err) {
    if (err) {
      return console.log('写入文件失败' + err.message)
    }
    console.log('写入成功')
  })
})