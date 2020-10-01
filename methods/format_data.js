var format = function (data) {
  for (let i = 0; i < data.length; i++) {
    if (Math.abs(data[i]) > 10000) {
      data[i] /= 10000;
    } else if (Math.abs(data[i]) > 1000) {
      data[i] /= 100;
    }
    data[i] = Number(Number(data[i]).toFixed(3));
  }
}
module.exports = {
  format
}