// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  str = str.split(' ');
  var longest = str[0].length;
  
  for(var i = 1; i < str.length; i++) {
    if (str[i].length > longest) {
      longest = str[i].length;
    }
  }
  
  console.log(longest);
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");