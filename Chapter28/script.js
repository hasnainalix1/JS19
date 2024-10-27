// Chapter 28 
// Write a function to convert the string "123.45" to an integer and a decimal.


function convertString(str) {
  const integer = parseInt(str);
  const decimal = parseFloat(str);
  return { integer, decimal };
}

console.log(convertString("123.45")); 
// Output: { integer: 123, decimal: 123.45 }
