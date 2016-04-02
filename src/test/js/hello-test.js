require('./test-setup')
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
//var hello = require('../../main/js/hello');
var hello = require('../../main/js/hello');

describe('Hello Module', function () {
  it('Should have true = true', function () {
    expect(true).to.equal(true)
  });
  
  it('Should have hello defined', function () {
	  var actual = hello.greet();
	  var expected = "Hello, world!"
	  expect(actual).to.be.equal(expected);
  });
})
