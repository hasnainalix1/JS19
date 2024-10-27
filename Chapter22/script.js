// Chapter 22 
// Write a function that takes a string and returns its length and the first three characters.


function measureAndExtract(str) {
  const length = str.length;
  const firstThreeChars = str.slice(0, 3);
  return { length, firstThreeChars };
}

console.log(measureAndExtract("JavaScript")); 
// Output: { length: 10, firstThreeChars: "Jav" }