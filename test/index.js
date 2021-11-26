const log = require('./../index');

var chai = require('chai'),
	expect = chai.expect,
	sinonChai = require('sinon-chai'),
	sinon = require('sinon');


chai.use(sinonChai);

const message = 'Hello world';

describe('Functions tests', () => {
	beforeEach( function () {
		sinon.spy(console, 'log')
	});
	afterEach( function() {
		console.log.restore();
	});

	it('Function success', () => {
		log.success(message);
		
		// Comprobamos que llama a console log
		expect(console.log).to.be.called;
	});

	xit('Function error', () =>{

	});

	xit('Function info', () => {
	
	});

	xit('Function warning', () => {
	
	});

	xit('Function custom', () => {
	
	});
});