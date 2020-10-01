var magnify = function (data) {
  data.map((v, i) => {
    if (typeof v == 'object') {
      for (let key in v) {
        v[key] *= 1;
      }
    } else {
      data[i] *= 1;
    }
  });
}

module.exports = {
  magnify
}

// 求两个数的最大公约数
function div(a, b) {
  let c;
  while (a % b != 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return b;
}