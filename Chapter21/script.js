// Chapter 21
// Write a function that takes a string as input and returns it in all uppercase and lowercase.



function changeCase(str) {
    const upperCase = str.toUpperCase();
    const lowerCase = str.toLowerCase();
    return { upperCase, lowerCase };
  }
  
  console.log(changeCase("Hello World!")); 
  // Output: { upperCase: "HELLO WORLD!", lowerCase: "hello world!" }