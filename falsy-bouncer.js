// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

//result using .filter()
function bouncer(arr) {

    newArr = [];
    var checkFalse = function (input) {
        if (input) {
            newArr.push(input);
        }
    };

    arr.filter(checkFalse);
    return newArr;
}

bouncer([7, "ate", "", false, 9]);

//result without .filter()
function bouncer(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

bouncer([7, "ate", "", false, 9]);