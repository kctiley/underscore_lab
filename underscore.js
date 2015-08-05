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


// contains - returns true is a given value is present in an array
// _.contains([7,55,99], 99);
// => true
  contains: function(inputArray, searchElement) {
    for (var i = 0; i < inputArray.length; i++){
      if (inputArray[i] == searchElement){
        return true;
      }      
    };
    return false; 
  }
};
