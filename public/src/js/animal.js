var Animal = function(module) {
	
	var DEFAULTS = {
		speed: 10,
		legs: 4,
		position: {
			x: 0,
			y: 0,
			z: 0
		}
	};
	
	function Controller(config) {
		this.speed = config.speed || DEFAULTS.speed;
		this.position = config.position || DEFAULTS.position;
		this.legs = config.legs || DEFAULTS.legs;
	}
	
	Controller.prototype.move = function(axis, amount) {
		axis = axis || 'x';
		amount = amount || 1;
		this.position[axis] += this.speed * amount;
		return this.position;
	};
	
	module.Controller = Controller; 
	
	module.create = function(config) {
		return new Controller(config);
	};
	
	return module;
}(Animal || {});

module.exports = Animal;