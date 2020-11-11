
let {
  get_3D
} = require('./controller/three_D');
// 三维
 let {
   p
 } = require('./db/read3Data');
 let {
   writeData
 } = require('./db/writeData');
 
 {
   let res;
   let edge = [60, 150, 30];
   p.then(data => {
   res = get_3D(data, edge);
	writeData(res[1]);
    
   })
}

// 测试三维
/*
{
	let res;
let data = [];
let edge = [60, 150, 30];
// ans.push({
//   x: res.x[i],
//   y: res.y[i],
//   z: res.z[i]
// })
for (let j = 0; j < 150; j+=3) {
  for (let k = 0; k < 30; k+=3) {
    data.push({
      x: 30,
      y: j,
      z: k
    })
  }
}
res = get_3D(data, edge);
console.log(res);
}
*/