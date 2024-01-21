//primitive

// 1. String
// 2. Number  2**53
let a = 20;
console.log(typeof a);
// 3. Bigint  2

let b = 30n;
console.log(typeof b);

// 4. Boolean
// 5. Undefined

let c;
console.log(typeof c);
// 6. Null
// 7. Symbol  //symbol()

//non primitive
// 8. Object

// 1. An object
const employee = {
  "full name": "sanu",
  age: 25,
  add: "sdafaf",
  no: {
    primary: 445453454,
    secondry: 15645431,
  },
  hobbies: ["df", "dancing"],
};
console.log(employee["full name"]);
console.log(employee.hobbies[0]);

// 2. An array
const arr = [1, 2, 3, "abc", true];
console.log(arr);

//push(value) pop()
arr.push(100);
console.log(arr);
arr.pop();
arr.pop();
console.log(arr);

// shift()  unshift(value)

arr.unshift("sanu");
console.log(arr);

arr.shift();
console.log(arr);

console.log(typeof arr);
// 3. A date

// memory
// stack
//heap
