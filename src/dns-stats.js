const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let listDomains = [];
  let temp = [];
  let obj = {};

  for (let i = 0; i < domains.length; i++) {
    listDomains.push(domains[i].split('.').reverse());
  }
  for (let i = 0; i < listDomains.length; i++) {
    let str = '';
    for (let j = 0; j < listDomains[i].length; j++) {
      str = str + '.' + listDomains[i][j];
      temp.push(str);
    }
  }
  temp.forEach((i) => { obj[i] = (obj[i] || 0) + 1; });
  return obj;
}

module.exports = {
  getDNSStats
};
