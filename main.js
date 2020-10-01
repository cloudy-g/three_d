let {
  p
} = require('./db/read3Data');
let {
  get_3D
} = require('./controller/three_D');
// 测试三维
let res;
let edge = [60, 150, 30];
p.then(data => {
  res = get_3D(data, edge);
  console.log(res);
})