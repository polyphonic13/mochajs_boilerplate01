var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var Animal = require('../public/src/animal.js');

describe('Animal', function() {
	beforeEach(function() {
		return animal = Animal.create({});
	});
	describe('create animal instance', function() {
		it('should return an Animal Controller instance', function() {
			assert.instanceOf(animal, Animal.Controller, 'animal is an instance of Animal.Controller');
		});
	});
	describe('defaults', function() {
		it('should have a default of 4 legs', function() {
			expect(animal).to.have.property('legs');
			expect(animal.legs).to.equal(4);
		});
		it('should have a default speed of 10', function() {
			expect(animal).to.have.property('speed');
			expect(animal.speed).to.equal(10);
		});
		it('should have a position property', function() {
			expect(animal).to.have.property('position');
		});
		it('should have a default x location of 0', function() {
			expect(animal.position).to.have.property('x');
			expect(animal.position.x).to.equal(0);
		});
		it('should have a default y location of 0', function() {
			expect(animal.position).to.have.property('y');
			expect(animal.position.y).to.equal(0);
		});
		it('should have a default z location of 0', function() {
			expect(animal.position).to.have.property('z');
			expect(animal.position.z).to.equal(0);
		});
	});
	describe('move', function() {
		it('should move the animal 1 default unit when move called', function() {
			animal.move('x', 1);
			expect(animal.position.x).to.equal(10);
		});
	});
});