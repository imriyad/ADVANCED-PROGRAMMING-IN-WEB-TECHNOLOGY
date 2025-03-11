// In var we can do both Redeclare and Reassign 
var a = 10;
var a = 20;
console.log(a); // Output: 20

// In let we can do only Reassign but cannot Redeclare
let b = 40;
b = 30;
console.log(b); // Output: 30

const c = 9;
// c = 7; // Uncommenting this will cause an error because const cannot be reassigned
console.log(c); // Output: 9

let d = 10;
if (true) {
    let d = 99;  // as it is in a different block, we can redeclare with let
    console.log(d); // Output: 99
}
console.log(d); // Output: 10

const e = 8;
if (true) {
    const e = 88; // as it is in a different block, we can redeclare with const
    console.log(e); // Output: 88
}
console.log(e); // Output: 8

// Function
function f(m, n) {
    return m * n;
}
let x = f(9, 8);
console.log(x); // Output: 72

function func() {
    return "Hello UStad";
}
console.log(func()); // FIXED: Now calling the function

// Arrow Function
const g = () => "Print with Arrow Function";
console.log(g()); // Correct usage
