const log = require('./../index');

var chai = require('chai'),
	expect = chai.expect,
	sinonChai = require('sinon-chai'),
	sinon = require('sinon');


chai.use(sinonChai);

const message = 'Hello world';
const color = '#dddddd';

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

	it('Function error', () =>{
		log.error(message);
		
		// Comprobamos que llama a console log
		expect(console.log).to.be.called;
	});

	it('Function info', () => {
		log.info(message);
		
		// Comprobamos que llama a console log
		expect(console.log).to.be.called;
	});

	it('Function warning', () => {
		log.warning(message);
		
		// Comprobamos que llama a console log
		expect(console.log).to.be.called;
	});

	it('Function custom', () => {
		log.custom(message, color);

		expect(color).to.be.string;
		// Comprobamos que llama a console log
		expect(console.log).to.be.called;
	});
});