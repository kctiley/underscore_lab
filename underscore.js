// PUT YOUR CODE HERE!!!
//
// average - returns the average value in a given array
// _.average([4,6,1,1])
// => 3
var _ = {
  average: function() {
    var add = null;
    for (var i = 0; i < arguments.length; i++){
      add = add + arguments[i];
    }    
    return add/arguments.length;
  },
//
//
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
  },
//  
//
//first - returns the first element in an array
//_.first([5, 4, 3, 2, 1]);
//=> 5
  first: function(inputArray) {   
    return inputArray[0];
  },
//
//
// last - returns the last element in an array
// _.last([5, 4, 3, 2, 1]);
// => 1
  last: function(inputArray) {
    return inputArray[inputArray.length - 1];    
  }
//
//
//max - returns the maximum value in an array
///var numbers = [10, 5, 100, 2, 1000];
// _.max(numbers);
// => 1000
  max: function(inputArray) {
    var result = [];
    var highNumber = 0;
    for (var i = 0; i < inputArray.length; i++){
      if (inputArray[i] > highNumber){
        highNumber = inputArray[i];
      };
    };
    result = highNumber;
    return result;
  },
//
//  
//
// min - returns the minimum value in an array
// var numbers = [10, 5, 100, 2, 1000];
// _.min(numbers);
// => 2
  min: function(inputArray) {
    var lowNumber = inputArray[0];
    for (var i = 0; i < inputArray.length; i++){
      if (inputArray[i] <= lowNumber){
        lowNumber = inputArray[i];
      };
    };
    return lowNumber;
  },

//
//
// sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
// _.sample([1, 2, 3, 4, 5, 6]);
// => 4

// _.sample([1, 2, 3, 4, 5, 6], 3);
// => [1, 6, 2]
  sample: function(inputArray, numSamples) {
    var result = [];
    numSamples = numSamples || 1;
    for (var i = 0; i < numSamples; i++) {
      var randomIndex = Math.floor(inputArray.length  * Math.random());
      result.push(inputArray[randomIndex]);
    }
    return result;  
  },
};





