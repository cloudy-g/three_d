// 深拷贝数组中的对象数据
function deepCopy(source) {
  let target = [];
  for (let i = 0; i < source.length; i++) {
    const element = source[i];
    target[i] = {};
    for (const key in element) {
      target[i][key] = element[key];
    }
  }
  return target;
}

module.exports = {
  deepCopy
}