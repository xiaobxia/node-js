/**
 * Created by xiaobxia on 2017/6/20.
 */
//var fs = require('fs')
const fs = require('fs-extra')
const path = require('path')
//删除文件
/*
 fs.unlink(path.join(__dirname, '/test/test.js'),function (err) {
 if(err){
 console.log('删除失败');
 } else {
 console.log('删除成功');
 }
 })
 */
//只能用于删除空文件夹
/*
 fs.rmdir(path.join(__dirname, '/test'), function (err) {
 if(err){
 console.log('删除文件夹失败');
 } else {
 console.log('删除文件夹成功');
 }
 })
 */

const deleteFolderRecursive = function (path) {
  fs.access(path, function (err) {
    if (err) {
      console.error(err);
      return false;
    }
    fs.readdir(path, function (err, files) {
      if (err) {
        console.error(err);
        return false;
      }
      files.forEach(function (file, index) {
        let curPath = path + "/" + file;
        if (fs.statSync(curPath).isDirectory()) {
          deleteFolderRecursive(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    })
  })
};

//删除文件夹和文件都可以(也能删除非空文件夹)
fs.remove(path.join(__dirname, '/test/'))
  .then(() => {
    console.log('success!');
  })
  .catch(err => {
    console.error(err)
  })



