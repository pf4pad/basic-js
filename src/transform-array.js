const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = [];
  const disPrev = '--discard-prev';
  const disNext = '--discard-next';
  const doublePrev = '--double-prev';
  const doubleNext = '--double-next';



  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === disPrev) {
      newArr.pop();
      newArr.push(arr[i]);
    }
    if (arr[i] === disNext) {
      newArr.push(arr[i]);
      arr[i + 1] = '';
    }
    if (arr[i] === doublePrev) {
      newArr.push(newArr[newArr.length - 1]);
      newArr.push(arr[i]);
    }
    if (arr[i] === doubleNext) {
      newArr.push(arr[i]);
      newArr.push(arr[i + 1]);
    } else newArr.push(arr[i]);



  }

  newArr = newArr.filter(item => {
    if (item != disPrev && item != disNext && item != doublePrev && item != doubleNext) return item;

  })
  return newArr
}

module.exports = {
  transform
};
