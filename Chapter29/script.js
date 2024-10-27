// Chapter 29 
// Write a function to convert the number 123.45 to a string and back to a number.


function convertTypes(num) {
  const toString = num.toString();
  const toNumber = Number(toString);
  return { toString, toNumber };
}

console.log(convertTypes(123.45)); 
// Output: { toString: "123.45", toNumber: 123.45 }
