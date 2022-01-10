 const array = [77, 66, 13, 4];
console.log(array);

//input: arr, func
//out: arr
//callback:
//input: el, index, arr
//out: boolean

//algo
//1. iterate
//2.apply callback for every el
//3. if callback true - add to the new arr

const filterArrayElements = (arr, callback) => {
  const result = [];
  for (let index = 0; index < arr.length; index += 1){
    const el = arr[index];
    console.log('el ' + el);
    if (callback(el, index, arr)) {
      console.log('el checked' + el);
      result.push(el);
    }
    
  }
  return result;
};

//data test

console.log(filterArrayElements([1, 4, 10, 30, 99], el => el % 2 === 2));



//внизу работает
/* let callback2 = (el) => {
  return el % 2 === 0;
};
const filterArrayElements = (arr, callback) => {
  const result = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    if (callback(el)) {
      console.log(el);
      result.push(el);
    }
  }
  return result;
};
console.log(filterArrayElements(array, callback2)); */