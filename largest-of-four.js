// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  var largestArr = [];
  
  arr.forEach(function(item) {
    var biggest = item[0];
    for (var i = 0; i < item.length; i++) {
      if (item[i] > biggest) {
        biggest = item[i];
      }
    }
    largestArr.push(biggest);
  });
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);