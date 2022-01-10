/**
 * @param {number} num
 * @return {undefined}
 */

//1. проверка числа на простоту:
//  а) напишу функцию для проверки рандомного числа на "простоту"
//   .....(in: number, out: boolean)

//2. проверка чисел на простоту на отрезке:
//  a) напишу функцию для проверки чисел на "простоту" на отрезке

//  .....(in: number, out: underfined)
//  б) добавлю простые числа в массив



function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  let primeNumbs = [];
  for (let index = 2; index <= num; index += 1) {
    if (isPrime(index)) {
      primeNumbs.push(index);
    }
  }
  console.log(primeNumbs);
}

getPrimes(12140);

/* function getPrimes(num) {
  for (let i = 2; i<= num; i += 1) {
    console.log('cheking number ' + i);

    const isPrime = true;
    for(let number = 2; number < i; number +=1){
      console.log("inner number " + number);

      if(i % number === 0){
        console.log(" number " + i + " is not prime");
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
}
//test
getPrimes(7) */