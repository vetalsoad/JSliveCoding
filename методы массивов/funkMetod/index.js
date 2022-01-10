const numberList = [5, 0, 8, 10, -4, 50, 220]

//map (если нужно преобразовать)
//    input: callback   this(optional)
//           output: arr

//  callback: input: el     index(optional), array(optional)
//           output: el

const mapRes = numberList.map( el => {
  const res = el * el;
  return res;
});

//или

const mapRes = numberList.map( el =>  el * el);

//forEach  (пройтись по массиву)(его не юзают)
//    input: callback   this(optional)
//           output: arr

//  callback: input: el     index(optional), array(optional)
//           output: undefined

const newArr = [];
numberList.forEach(el => {
  if (el > 100) {
    newArr.push(el);
  }
});




//find (найдет первое число, которое подходит по условию)
//    input: callback   this(optional)
//           output: el

//  callback: input: el     index(optional), array(optional)
//           output: boolean

//найти первое нечетное число:

const findRes = numberList.find(el =>{
  if (el % 2 === 0){
    return true;
  }
  return false;
});

//или:
console.log(numberList.find(el => el % 2 === 0));
 
//та же задача плохое решение

console.log(numberList.filter(el => el % 2 === 0)[0]);


//reduce (его задача собрать в одно целое)
//    input: callback  acc init value   this(optional)
//           output: может быть все что угодно (in this task === number)

//  callback: input: acc, el
//           output: acc

const transaction = [5, 0, 8, 10, -4, 50, 220, 1203, 556 41];

 const summ = transaction.reduce((acc, el) => {
  console.log('acc: ' + acc);
  console.log('el: ' + el);

  return acc + el;
});

const summ = transaction.reduce((acc, el) => acc + el);

