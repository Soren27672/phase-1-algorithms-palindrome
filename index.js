function isPalindrome(word) {
  let backwards = [];
  
  for(let i = 0;i < word.length;++i) {
    backwards[word.length - 1 - i] = word.toLowerCase()[i];
  }
  backwards = backwards.reduce((ac,cv) => ac += cv);
  return backwards === word.toLowerCase();
}

/* 
  Lowercase the string
  Make a new array called backwards
  Iterate through the string, putting the current letter into backwards at an index that equals the length minus the iterator
  reduce backwards into a string
  return the value of strictly comparing the two strings
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Racecar\nExpecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("mMmmM\nExpecting: true");
  console.log("=>", isPalindrome("mMmmM"));

  console.log("a\nExpecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Robot\nExpecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("nmnm\nExpecting: false");
  console.log("=>", isPalindrome("nmnm"));
}

module.exports = isPalindrome;
