const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] === str[i + 1] && i < str.length) {
      count++, i++;
    }
    if (count > 1) {
      arr.push(count);
    }
    arr.push(str[i]);
  }
  return result.join('');
}

module.exports = {
  encodeLine
}
