//Return the factorial of the provided integer.

function factorialize(num) {
  var newArr = [];
  
  if (num === 0) {
    return 1;
  }
  
  while (num > 1) {
    newArr.push(num);
    num--;
  }
  newArr = newArr.reduce(function(a, b) {
    return a*b;
  });
 return newArr;
}

factorialize(5);