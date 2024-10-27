// Chapter 30 
//Write a function to return a number with exactly two decimal places.


function formatDecimals(num) {
  return num.toFixed(2);
}

console.log(formatDecimals(3.14159)); 
// Output: "3.14"
