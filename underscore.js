// PUT YOUR CODE HERE!!!
//
// average - returns the average value in a given array
// _.average([4,6,1,1])
// => 3
var _ = {
  average: function() {
    var add = null;
    for (i = 0; i < arguments.length; i++){
      add = add + arguments[i];
    }    
    return add/arguments.length;
  }
};
