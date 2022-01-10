/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */


// input: obj, key(string), value
// output: object
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

/* function addPropertyV2(obj, key, value) {
  const sourceObj = { [key]: value };
  // input: target obj, source obj1 ... source objN
  // output: target obj
  Object.assign(obj, sourceObj);
  return obj;
} */

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}


function addPropertyV3(obj, key, value) {
  return {...obj, [key]: value };
}

// test data
const transaction = {
  value: 170,
};
console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction);


