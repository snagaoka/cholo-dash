var chai = require('chai'),
  should = chai.should(),
  _ = require('../cholo-dash.js');

describe("Array functions", function(){


  it("should compact an array", function(){
    var expected = [1, 2, 3];
    var input = [0, 1, , false, 2, '', 3];
    var result = _.compact(input);
    result.should.include(1);
    result.should.include(2);
    result.should.include(3)
    result.should.not.include(0);
    result.should.not.include(false);
    result.should.not.include('');

  });

  it("should identify the difference between two different arrays", function(){
    var expected = [1, 3, 4];
    var input1 = [1, 2, 3, 4, 5]; 
    var input2 [5, 2, 10];
    var result = _.difference(input)
    result.should.include(1);
    result.should.include(3);
    result.should.include(4);
    result.should.not.include(2);
    result.should.not.include(5);
    result.should.not.include(10);


});

});