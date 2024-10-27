// Chapter 25 
//   Write a function to replace all occurrences of "dog" with "cat" in a string.



function replaceWord(str) {
  return str.replace(/dog/g, "cat");
}

console.log(replaceWord("I have a dog. My dog is friendly.")); 
// Output: "I have a cat. My cat is friendly."
