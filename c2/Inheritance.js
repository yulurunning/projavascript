function Person(name) {
	this.name = name;
}

Person.method('getName', function() {
	return name;
});





var person1 = new Person('abc');
console.log('Name:', person1.getName());
