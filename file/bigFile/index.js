/**
 * Created by xiaobxia on 2017/7/12.
 */
const fs = require('fs-extra');
const reader = fs.createReadStream(__dirname+'/a/cc.zip');
const writer = fs.createWriteStream(__dirname+'/b/dd.zip');
reader.pipe(writer);