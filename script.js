//complete this code
class Animal {
	constructor(spacies) {
		this.spacies = spacies;
	}

	set spacies(spacies) {
		this.spacies = spacies;
	}

	get spacies() {
		return this.spacies;
	}
	makeSound() {
		console.log(`${this.spacies}`)
	}
}

class Dog extends Animal {
	bark() {
		console.log("woof");
	}
}

class Cat extends Animal {
	purr() {
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
