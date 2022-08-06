module.exports = function reverse (n) {
  let result = "";
  n = Math.abs(n) + '';
  for (let i = 0; i < n.length; ++i)
  {
    result = result + n[n.length - i - 1];
  }
  return +result;
}