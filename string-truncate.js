// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.
// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, 
// then the addition of the three dots does not add to the string length in determining the truncated string.

// solution with .slice();
function truncateString(str, num) {
    if (num >= strLength) {
        return str;
    } else if (num <= 3) {
        console.log(str.slice(0, num) + '...');
        return str.slice(0, num) + '...';
    } else {
        console.log(str.slice(0, (num - 3) + '...'));
        return str.slice(0, (num - 3)) + '...';
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

// solution without .slice();
function truncateString(str, num) {
    var strLength = str.length;
    var newStr = '';

    if (num >= strLength) {
        return str;
    } else if (num <= 3) {
        for (var i = 0; i < num; i++) {
            newStr += str[i];
        }
    } else {
        for (var j = 0; j < num - 3; j++) {
            newStr += str[j];
        }
    }
    console.log(newStr + '...');
    return newStr + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);