/**
 * Created by xiaobxia on 2017/6/18.
 */
const fs = require('fs');
const path = require('path');
console.log(__dirname);
//node的path都是相对于项目的路径，可以通过__dirname得到当前文件的路径
fs.rename(path.join(__dirname,'/test'), path.join(__dirname,'/test2'),function (err) {
    if(err){
        console.log('重命名错误');
    } else {
        console.log('重命名成功');
    }
});