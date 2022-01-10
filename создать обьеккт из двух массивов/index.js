/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

// input: massive
// out: object

// 1. create empty object
// 2. iterate arrays
// 3. put key/value to the obj

// bad
/* function buildObject(keysList, valuesList) {
  const res = {};

  for (let index = 0; index < keysList.length; index += 1){
      res[keysList[index]] = valuesList[index];
  }
  return res;
} */

function buildObject(keysList, valuesList) {
  
  return keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }),{});  
}


// test

const arrKeys = ['country', 'name', 'age']
const arrVal = [ 'UKraine', 'Vetal', 18]

console.log(buildObject(arrKeys,arrVal));
