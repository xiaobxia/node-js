/**
 * Created by xiaobxia on 2017/6/20.
 */
const fs = require('fs')
const path = require('path')
//不建议在调用 fs.open() 、fs.readFile() 或 fs.writeFile() 之前使用
//fs.stat() 检查一个文件是否存在。(针对文件)
//作为替代，用户代码应该直接打开/读取/写入文件，当文件无效时再处理错误。
fs.stat(path.join(__dirname, '/test/test.js'), function (err, stat) {
  if (err) {
    console.log('失败');
  } else {
    console.log(stat);
  }
});
//检查是否存在，并不操作它时
fs.access(path.join(__dirname, '/test/test.js'), (err) => {
  if (!err) {
    console.error('存在');
  } else {
    console.log('不存在');
  }
});
