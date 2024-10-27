// Chapter 23 
//  Write a function to find if a word is present in a sentence.


function findSegment(sentence, word) {
  return sentence.includes(word);
}

console.log(findSegment("I love coding in JavaScript", "coding")); 
// Output: true