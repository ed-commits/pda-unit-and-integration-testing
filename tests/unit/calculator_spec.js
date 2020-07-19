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

  it('divide 21 by 7 and get 3', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  it('concatenates multiple number button clicks', function() {
    calculator.runningTotal = 0;
    calculator.newTotal = true;
    calculator.numberClick('3');
    calculator.numberClick('4');
    calculator.numberClick('5');
    calculator.numberClick('1');
    calculator.numberClick('7');
    assert.equal(calculator.runningTotal, 34517);
  })

  it('chains multiple operations together', function() {
    calculator.runningTotal = 0;
    calculator.newTotal = true;
    calculator.numberClick('1');
    calculator.operatorClick('+');
    calculator.numberClick('2');
    calculator.operatorClick('+');
    calculator.numberClick('3');
    calculator.operatorClick('+');
    calculator.numberClick('4');
    calculator.operatorClick('+');
    calculator.numberClick('5');
    calculator.operatorClick('*');
    calculator.numberClick('3');
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 45);
  })

  it('clears the running total without affecting the calculation', function() {
    calculator.runningTotal = 0;
    calculator.newTotal = true;
    // Input 100
    calculator.numberClick('1');
    calculator.numberClick('0');
    calculator.numberClick('0');
    // Choose addition
    calculator.operatorClick('+');
    // Input 5
    calculator.numberClick('5');
    // Clear that
    calculator.clearClick();
    // Add 2 instead
    calculator.numberClick('2');
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 102);
  })

});
