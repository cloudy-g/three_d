let {
  deepCopy
} = require('../methods/deepCopy');

// data 存储数据的数组  [{x:...,y:...,z:...},{...}]
// edge 为岩块的尺寸，以三维平面图长宽高存储为一个数组 [l,w,h]
var get_3D = function (data, edge) {
  // 对数据进行整理
  data = data.map(v => {
    return {
      x: v.x,
      y: v.y,
      z: v.z
    }
  })
  // 过滤有无数据
  data = data.filter(v => {
    if (v.x >= 0 && v.x <= 30) {
      if (v.y >= 0 && v.y <= 150) {
        if (v.z >= 0 && v.z <= 50) {
          return true;
        }
      }
    }
    return false;
  });

  // 对data进行排序，x从小到大,x相同的y从小到大
  data.sort((a, b) => {
    if ((a.x - b.x) == 0) {
      if ((a.y - b.y) == 0) {
        return a.z - b.z;
      }
      return a.y - b.y;
    }
    return a.x - b.x;
  })
  // 数据放大 
  for (let i = 0; i < data.length; i++) {
    const ele = data[i];
    ele.x *= Math.pow(2, 8);
    ele.y *= Math.pow(2, 8);
    ele.z *= Math.pow(2, 8);
  }
  for (let i = 0; i < edge.length; i++) {
    edge[i] *= Math.pow(2, 8);
  }
  // r初始值
  let r = Math.pow(2, 5);
  // 初始参数
  let RTCorner, flag, copy, count,
    res = [];

  console.log(data);
  console.log(edge);

  // 控制循环次数 0 - 9(不包括) 9 次 
  let times = 0;
  while (times < 9) {

    flag = false;
    copy = deepCopy(data);
    count = 0;
    // 三层循环
    for (let i = 0; i < edge[0]; i += r) {
      for (let j = 0; j < edge[1]; j += r) {
        for (let m = 0; m < edge[2]; m += r) {

          RTCorner = [i + r, j + r, m + r];

          for (let k = 0; k < copy.length;) {
            const element = copy[k];
            if (element.x <= RTCorner[0] && element.y <= RTCorner[1] && element.z <= RTCorner[2]) {
              copy.splice(k, 1);
              flag = true;
            } else if (element.x > RTCorner[0] && element.y > RTCorner[1] && element.z > RTCorner[2]) {
              break;
            } else {
              k++;
            }
          }
          if (flag) {
            count++;
            flag = false;
          }
        }
      }
    }
    console.log(r, count);
    res.push([r, count]);
    r *= 2;
    times++;
  }
  return res;
}

module.exports = {
  get_3D
}