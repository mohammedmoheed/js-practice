// Global scope
var a = 10;
let b = 20;
const c = 30;

//block scope
if (true) {
  var a1 = 100;
  let b1 = 200;
  const c1 = 300;
}

// functional scope
function abc() {
  console.log(a);
  var a2 = 1000;
  let b2 = 200;
  const c2 = 3000;
}

console.log(a, b, c); //10 20 30
//console.log(a1, b1, c1); //100 reference error
//console.log(a2, b2, c2); // reference error

b = 50;
console.log(b);

//c = 60;
//console.log(c); // typeError

const userName = "moheed"; // camelCase

{
  {
    let d = 1;
    console.log(c);
  }
}
//console.log(d); we cant use outside scope

function tryfun() {
  console.log(e);
}

var e = "abc";
