// There are following types of operators in JavaScript.

// Arithmetic Operators
// let a = 5;
// let b = 2;

// console.log(a + b); // Addition: 7
// console.log(a - b); // Subtraction: 3
// console.log(a * b); // Multiplication: 10
// console.log(a / b); // Division: 2.5
// console.log(a % b); // Modulus (Remainder): 1
// console.log(a ** b); // Exponentiation: 25

// // Comparison (Relational) Operators
// let x = "5";
// let y = 5;

// console.log(x > y); // Greater than: true
// console.log(x < y); // Less than: false
// console.log(x >= y); // Greater than or equal to: true
// console.log(x <= y); // Less than or equal to: false
// console.log(x === y); // Equal to (strict): false
// console.log(x !== y); // Not equal to (strict): true

// console.log(x == y); //check only value

// console.log(x === y); //check types also

// // Bitwise Operators
// let m = 5; // 0101 in binary
// let n = 3; // 0011 in binary

// console.log(m & n); // Bitwise AND: 1 (0001)
// console.log(m | n); // Bitwise OR: 7 (0111)
// console.log(m ^ n); // Bitwise XOR: 6 (0110)
// console.log(~m); // Bitwise NOT: -6 (11111111111111111111111111111010 in 32-bit signed representation)
// console.log(m << 1); // Left shift by 1: 10 (1010)
// console.log(m >> 1); // Right shift by 1: 2 (0010)

// // Logical Operators

// let p = true;
// let q = false;

// console.log(p && q); // Logical AND: false
// console.log(p || q); // Logical OR: true
// console.log(!p); // Logical NOT: false

// Assignment Operators
// let num = 10;
// let a = 5;
// let b = 10;
// console.log((a = b));
// num += 5; // Equivalent to: num = num + 5
// console.log(num); // 15

// num -= 3; // Equivalent to: num = num - 3
// console.log(num); // 12

// num *= 2; // Equivalent to: num = num * 2
// console.log(num); // 24

// num /= 4; // Equivalent to: num = num / 4
// console.log(num); // 6

// num %= 5; // Equivalent to: num = num % 5
// console.log(num); // 1

// Special Operators

// Conditional (Ternary) Operator:

let age = 20;
// let status = age >= 18 ? "Adult" : "Minor";
// console.log(status); // 'Adult'

if (age >= 18) {
  console.log("adult");
} else {
  console.log("minor");
}

let a = age >= 18 ? "ADULT" : "MINOR";
console.log(a);
