//input: obj
// out: array

// algo
// 0. 
// 1. get keys and values
// 2. add id in every value (map)
// 3. sort


// good:
/* const getCustomersList = (obj) => {
  
  const keys = Object.keys(obj);

  return Object.values(obj)
    .map((el, index) => ({ ...el, id: keys[index] }))
    .sort((a, b) => a.age - b.age);
}; */

const getCustomersList = (obj) => {
  return Object.entries(obj)
    .map(([id, customer]) => ({ ...customer, id }))
    .sort((a, b) => a.age - b.age);
};

// destcructing
const arr = [10, 22, 11];
const [el1, el2] = arr;

console.log(el1, el2);

const obj = {
  name = 'James',
  age: 111,
  city: 'London',
}; 

const {age, name, city} = obj;
console.log(age);
console.log(name);
console.log(city);

// test data

const consumers = {
  "consumer-id-1": {
    name: "William",
    age: 54,
  },
  "consumer-id-2": {
    name: "Tom",
    age: 17,
  },
};

getCustomersList(consumers);