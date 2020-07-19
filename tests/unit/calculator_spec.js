var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('adds 1 to 4 to get 5', function() {
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5);
  })

  it('subtracts 4 from 7 and get 3', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  })

  it('multiply 3 by 5 and get 15', function() {
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.equal(calculator.runningTotal, 15);
  })

});
