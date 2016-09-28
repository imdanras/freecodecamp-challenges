// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {

    str = str.split('');
  
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].toLowerCase();
    
            if (i === 0) {
                str[i] = str[i].toUpperCase();
            } if (str[i-1] == ' ') {
                str[i] = str[i].toUpperCase();
            }
        }
    return str.join('');
}

titleCase("I'm a little tea pot");