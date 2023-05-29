const number = 55;
let result;

if (number >= 50) {
  result = "Greater than fifty!";
} else {
  result = "It could be worse";
} // is the same as below

result = number >= 50 ? "Greater Or Equal" : "Less than";

console.log(result);

/* Ternary Operator ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
num = 5;
if (num > 5 && num < 10) {
}

if (num > 5 || num < 10) {
}
/* Short circuit evaluation 

in an OR, if the first part of the statement is true, it will assume true.
In an AND, if the first part is false, it will not read the rest,
just assume the rest is false.



*/
