// 逐行读取数据
var fs = require("fs");
var path = require("path");
var readline = require("readline");
var {
  format
} = require('../methods/format_data');
let filesP = 'y_2';

const readliner = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, `../data/source/${filesP}/x.txt`)),
});

const readliner1 = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, `../data/source/${filesP}/y.txt`)),
});

const readliner2 = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, `../data/source/${filesP}/z.txt`)),
});

let res = {
  x: [],
  y: [],
  z: []
}
let ans = [];

readliner.on('line', function (chunk1) {
  //处理每一行数据
  res.x.push(chunk1);
});
readliner1.on('line', function (chunk1) {
  //处理每一行数据
  res.y.push(chunk1);
});
readliner2.on('line', function (chunk1) {
  //处理每一行数据
  res.z.push(chunk1);
});

let p = new Promise(resolve => {
  readliner.on('close', function () {
    readliner1.on('close', function () {
      readliner2.on('close', function () {
        //文件读取结束
        format(res.x);
        format(res.y);
        format(res.z);
        for (let i = 0; i < res.x.length; i++) {
          ans.push({
            x: res.x[i],
            y: res.y[i],
            z: res.z[i]
          })
        }
        resolve(ans);
      });
    });
  });
})
module.exports = {
  p
}