//function
//declare

// function greet(name) {
//   //logic
//   //   console.log("hi i am " + name);
//   `hi i am ${name}`;
// }

// function add(val1, val2) {
//   const addition = val1 + val2;
//   return addition;
// }
// // console.log(name1); //rererence
// // greet("sanu"); // call
// // console.log(add(1, 2));
// const answer = add(5, 10);
// console.log(answer);

// // rest parameters
// function rest(username, pass, ...vals) {
//   console.log(vals);
//   console.log(username);
// }

// rest(1, 2, 45, 78, 96, "hi");

// //Expression
// const sanu = function () {};
// //arow

// const arrow = (a) => `hi i am ${a}`;

// console.log(arrow("sanu"));

// // IFFE

// (function (a, b) {
//   return;
// })();

//callback

function call(a, b, c) {
  const val1 = a;
  const val2 = b;
  const hello = function (c) {
    reuturn("hello" + c);
  };
}
const abc = call(1, "abc", function () {
  console.log("hello");
});

call.hello();
