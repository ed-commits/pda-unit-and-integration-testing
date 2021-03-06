const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('has number buttons that update the display of the running total', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#number9')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1234567890')
  })

  it('has arithmetical operations that update the display with the result of the operation', function(){
    running_total = element(by.css('#running_total'))
    // Enter the number 11
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    // Press +
    element(by.css('#operator_add')).click();
    // Enter the number 22
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    // Press =
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('33')
  })

  it('can chain multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    // Enter the number 5
    element(by.css('#number5')).click();
    // Press *
    element(by.css('#operator_multiply')).click();
    // Enter the number 3
    element(by.css('#number3')).click();
    // Press *
    element(by.css('#operator_multiply')).click();
    // Enter the number 2
    element(by.css('#number2')).click();
    // Press -
    element(by.css('#operator_subtract')).click();
    // Enter the number 8
    element(by.css('#number8')).click();
    // Press =
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('22')
  })

  it('supports large negative numbers', function(){
    running_total = element(by.css('#running_total'))
    // Enter the number 1
    element(by.css('#number1')).click();
    // Press -
    element(by.css('#operator_subtract')).click();
    // Enter the number 99999999
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    // Press =
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-99999998')
  })

  it('supports decimal numbers', function(){
    running_total = element(by.css('#running_total'))
    // Enter the number 1
    element(by.css('#number1')).click();
    // Press /
    element(by.css('#operator_divide')).click();
    // Enter the number 8
    element(by.css('#number8')).click();
    // Press =
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.125')
  })

  it('supports huge numbers', function(){
    running_total = element(by.css('#running_total'))
    // Enter the number 1000000000000000
    element(by.css('#number1')).click();
    for(i = 0; i < 15; i++) {
      element(by.css('#number0')).click();
    }
    // Press *
    element(by.css('#operator_multiply')).click();
    // Enter the same number
    element(by.css('#number1')).click();
    for(i = 0; i < 15; i++) {
      element(by.css('#number0')).click();
    }
    // Press =
    element(by.css('#operator_equals')).click();
    // Such a huge number will be expressed in scientific notation with an exponential
    expect(running_total.getAttribute('value')).to.eventually.equal('1e+30')
  })

  it('detects division by zero', function(){
    running_total = element(by.css('#running_total'))
    // Enter the number 1
    element(by.css('#number1')).click();
    // Press /
    element(by.css('#operator_divide')).click();
    // Enter the number 0
    element(by.css('#number0')).click();
    // Press =
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('ERROR 1: UNDEF')
  })

});
