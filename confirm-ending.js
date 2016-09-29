// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {

  for(var i = str.length-1, j = target.length-1; j >=0; j--, i--) {
    if (str[i] !== target[j]) {
      return false;
    }
  }
  return true;
}

confirmEnding("Bastian", "n");