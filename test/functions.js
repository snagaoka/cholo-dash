var chai = require('chai'),
  should = chai.should(),
  expect = chai.expect(),
  _ = require('../cholo-dash.js');

describe("Array functions", function(){

// ARRAY

  // compact
  it("should compact an array", function(){
    var expected = [1, 2, 3];
    var input = [0, 1, false, 2, '', 3];
    var result = _.compact(input);
    result.should.include(1);
    result.should.include(2);
    result.should.include(3);
    result.should.not.include(0);
    result.should.not.include(false);
    result.should.not.include('');
  });

  // difference
  it("should identify the difference between two different arrays", function(){
    var expected = [1, 3, 4];
    var input1 = [1, 2, 3, 4, 5]; 
    var input2 = [5, 2, 10];
    var result = _.difference(input1, input2);
    result.should.include(1);
    result.should.include(3);
    result.should.include(4);
    result.should.not.include(2);
    result.should.not.include(5);
    result.should.not.include(10);
  });

  // findIndex
  it("should return the index of the first element that passes the callback check", function(){
    var input1 = [
      { 'name': 'barney',  'age': 36, 'blocked': false },
      { 'name': 'fred',    'age': 40, 'blocked': true },
      { 'name': 'pebbles', 'age': 1,  'blocked': false }
    ];
    var result = _.findIndex(input1, function(chr){
      return chr.age < 20;
    });
    result.should.equal(2);
    result.should.not.equal(0);
    result.should.not.equal(1);
  });

  // findLastIndex
  it("should return the index of the first element that passes the callback check, counts from right to left", function(){
    var input1 = [
      { 'name': 'barney',  'age': 36, 'blocked': false },
      { 'name': 'fred',    'age': 40, 'blocked': true },
      { 'name': 'pebbles', 'age': 1,  'blocked': false }
    ];
    var result = _.findLastIndex(input1, function(chr){
      return chr.age > 30;
    });
    result.should.equal(1);
    result.should.not.equal(0);
    result.should.not.equal(2);
  });

  // first
  it("should return the first elememt or first n elements", function(){
    var input1 = [3, 4, 5];
    var result = _.first(input1, function(n){
      return n < 4 ; 
    });
    result.should.include(3);
    result.should.not.include(4);
    result.should.not.include(5);
  });

  // first
  it("should return the first elememt or first n elements", function(){
    var input1 = [3,4,5];
    var result = _.first(input1, 2);
    result.should.include(3);
    result.should.include(4);
    result.should.not.include(5);
  });

  // flatten
  it("should return a new array from an array with nested arrays", function(){
      var input1 = [3, [4], [5, [[6]]]];
      var result = _.flatten(input1, []);
      result.should.include(3);
      result.should.include(4);
      result.should.include(5);
      result.should.include(6);
  });

   // indexOf
  it("should return the index which the first occurrence of value is found using strict equality for comparisons, i.e. ===. ", function(){
    var input1 = [1, 2, 3, 1, 2, 3];
    var result = _.indexOf(input1, 2, 3)
    result.should.equal(4);
  });
  
  // pull
  it("Removes all provided values from the given array using strict equality for comparisons, i.e. ===.", function(){
    var input1 = [1, 2, 3, 1, 2, 3];
    var result = _.pull(input1, 2 , 3);
    result.should.include(1);
    result.should.include(1);
  });

  // remove
  it("Removes all elements from an array that the callback returns truey for and returns an array of removed elements. The callback is bound to thisArg and invoked with three arguments; (value, index, array).", function(){
    var input1 = [1, 2, 3, 4, 5, 6];
    var result = _.remove(input1, function(num) { return num % 2 == 0; });
    result.should.include(2);
    result.should.include(4);
    result.should.include(6);
  });


// COLLECTIONS

  // at
  it("should return a new array with the elements of a specified index", function(){
      var input1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
      var input2 = [0, 2, 4];
      var result = _.at(input1, input2); 
      result.should.include('a');
      result.should.include('c');
      result.should.include('e');
  });

  // contains
  it("should return true if the given value is present in the array", function(){
    var input1 = [1, 2, 3, 4, 5, 1];
    var input2 = 1;
    var input3 = 2;
    var result = _.contains(input1, input2, input3); 
    result.should.eq(true);
  });

  // map
  it("should create an array of values by running each element in the collection through the callback.", function(){
    var input1 = [1, 2, 3];
    var result = _.map(input1, function(num){ return num * 3; });

    result.should.include(3);
    result.should.include(6);
    result.should.include(9);
  });

  it("should return max value in a collection", function(){
    var input1 = [2, 4, 6, 8, 3];

    var result = _.max(input1);

    result.should.eq(8);
  });

  it("should return min value in a collection", function(){
    var input1 = [1, 2, 6, 8, 3];

    var result = _.min(input1);

    result.should.eq(1);
  });

});