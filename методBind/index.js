function printMessage(country, city) {
  console.log(this);

  console.log(
    `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
  );
}

const user = {
  firstName: "Andrey",
  age: 111,
  tempFunc: "some secret data",
};

// input: obj,  arg
// output: func

//option1
const bindedFunc1 = printMessage.bind(user);
bindedFunc1('UKraine', 'Odessa');

//option2
const bindedFunc2 = printMessage.bind(user, 'UK');
bindedFunc2('London');

//option3
const bindedFunc3 = printMessage.bind(user, "UK", "Liverpool");
bindedFunc3();

// input: func, obj,  arg
// output: func
function myBind(funk, context, ...bindArgs) {
  //
  // input: obj, arr
  // output: result of func
  func.apply(context,  args);
  return function (...funcArgs) {
    // input: obj, arr
    // output: result of func
    func.apply(context, [...bindargs, ...funcArgs]);
  };
}

// test data

//option 1

const myBindedFunc1 = myBind(printMessage, user);
myBindedFunc1("Ucraine", "Odessa");

//option 2

const myBindedFunc2 = myBind(printMessage, user, 'UK');
myBindedFunc2("London");

//option 3

const myBindedFunc3 = myBind(printMessage, user, 'UK', "Liverpool");
myBindedFunc3();