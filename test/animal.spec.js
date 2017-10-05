var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var Animal = require('../public/src/js/animal.js');

describe('Animal', function() {
	describe('default', function() {
		beforeEach(function() {
			return animal = Animal.create({});
		});
		// describe('create animal instance', function() {
		// 	it('should return an Animal Controller instance', function() {
		// 		assert.instanceOf(animal, Animal.Controller, 'animal is an instance of Animal.Controller');
		// 	});
		// });
	// 	describe('initial properties and values', function() {
	// 		it('should have a default of 4 legs', function() {
	// 			expect(animal).to.have.property('legs');
	// 			expect(animal.legs).to.equal(4);
	// 		});
	// 		it('should have a default speed of 10', function() {
	// 			expect(animal).to.have.property('speed');
	// 			expect(animal.speed).to.equal(10);
	// 		});
	// 		it('should have a position property', function() {
	// 			expect(animal).to.have.property('position');
	// 		});
	// 		it('should have a default x location of 0', function() {
	// 			expect(animal.position).to.have.property('x');
	// 			expect(animal.position.x).to.equal(0);
	// 		});
	// 		it('should have a default y location of 0', function() {
	// 			expect(animal.position).to.have.property('y');
	// 			expect(animal.position.y).to.equal(0);
	// 		});
	// 		it('should have a default z location of 0', function() {
	// 			expect(animal.position).to.have.property('z');
	// 			expect(animal.position.z).to.equal(0);
	// 		});
	// 	});
	// 	describe('move', function() {
	// 		it('should move the animal x position 1 default unit when move() called with no args', function() {
	// 			var newPost = animal.move();
	// 			expect(newPost.x).to.equal(10);
	// 		});
	// 	});
	// });
	// describe('custom', function() {
	// 	beforeEach(function() {
	// 		return animal = Animal.create({
	// 			legs: 6,
	// 			speed: 5,
	// 			position: {
	// 				x: 1,
	// 				y: 9,
	// 				z: 10
	// 			}
	// 		});
	// 	});
	// 	describe('create animal instance', function() {
	// 		it('should return an Animal Controller instance', function() {
	// 			assert.instanceOf(animal, Animal.Controller, 'animal is an instance of Animal.Controller');
	// 		});
	// 	});
	// 	describe('initial properties and values', function() {
	// 		it('should have a custom of 6 legs', function() {
	// 			expect(animal).to.have.property('legs');
	// 			expect(animal.legs).to.equal(6);
	// 		});
	// 		it('should have a custom speed of 5', function() {
	// 			expect(animal).to.have.property('speed');
	// 			expect(animal.speed).to.equal(5);
	// 		});
	// 		it('should have a position property', function() {
	// 			expect(animal).to.have.property('position');
	// 		});
	// 		it('should have a custom x location of 1', function() {
	// 			expect(animal.position).to.have.property('x');
	// 			expect(animal.position.x).to.equal(1);
	// 		});
	// 		it('should have a custom y location of 9', function() {
	// 			expect(animal.position).to.have.property('y');
	// 			expect(animal.position.y).to.equal(9);
	// 		});
	// 		it('should have a custom z location of 10', function() {
	// 			expect(animal.position).to.have.property('z');
	// 			expect(animal.position.z).to.equal(10);
	// 		});
	// 	});
	// 	describe('move', function() {
	// 		it('should move the animal z position 5 custom units when move("z") called', function() {
	// 			var newPost = animal.move('z', 1);
	// 			expect(newPost.z).to.equal(15);
	// 		});
	// 	});
	});
});