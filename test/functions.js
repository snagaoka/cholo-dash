var chai = require('chai'),
  should = chai.should(),
  expect = chai.expect(),
  _ = require('../cholo-dash.js');

describe("Array functions", function(){


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

it("should return the index of the first element that passes the callback check, counts from right to left", function(){

  var input1 = [
    { 'name': 'barney',  'age': 36, 'blocked': false },
    { 'name': 'fred',    'age': 40, 'blocked': true },
    { 'name': 'pebbles', 'age': 1,  'blocked': false }
  ];
  var result = _.findLastIndex(input1, function(chr){
    return chr.age > 30;
  })
  result.should.equal(1);
  result.should.not.equal(0);
  result.should.not.equal(2);

});

});