const numbersList1 = [1, 2, 3, 4, 5];

//.push  input: num
//       output: num

const res = numbersList1.push('sasss');
console.log(res);

console.log(numbersList1);

// console.log(numbersList1);
/* const res = numbersList1.pop(); */
// console.log(numbersList1);
// console.log("res= " + res);

// =========
const numbersList2 = [1, 2, 3, 4, 5];

console.log("before push", numbersList2);
const res2 = numbersList2.push(100);
console.log(res2);
console.log("after push ", numbersList2);

// =========
const numbersList3 = [1, 2, 3, 4, 5];
console.log("before shift ", numbersList3);
const res3 = numbersList3.shift();
console.log(res3);

// =========
const numbersList4 = [1, 2, 3, 4, 5];
//input num, num(optional)
//output array
console.log("before " + numbersList4);
const res4 = numbersList4.slice(2);
const res4v2 = numbersList4.slice(2, 4);
console.log("before " + numbersList4);
console.log(res4);

//==============callback

//input: number,number, callback
//output: undefined

function sum(from, to, printer) {
  // put your code here
  let result = 0;
  for (let index = from; index <= to; index += 1) {
    result += index;
  }
  printer(result);
}

function printResult(res) {
  // put your code here

  alert(res);
}

//test data
sum(5, 8, printResult);

//============
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

//input callback
//output array

// call back
// input: number,(index, array - optional)
// output: boolean
console.log("before filter ", anotherNumbersList);
// OPTION 1
// function filterCallback(element) {
//   console.log(element);
//   if (element > 5) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const filterCallback = (element) => element > 5;
const filterRes = anotherNumbersList.filter((el) => el > 5);
console.log(filterRes);

console.log("after filter ", anotherNumbersList);
