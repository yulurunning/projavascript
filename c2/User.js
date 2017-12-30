// Person
function Person(name) {
	this.name = name;
}
Person.prototype.getName = function() {
	return this.name;
}
// User
function User(name, password) {
	this.name = name;
	this.password = password;
}
User.prototype = new Person();
User.prototype.getPassword = function() {
	return this.password;
}

var user1 = new User('abc', 'def');
console.log('Name:', user1.getName());
console.log('Password:', user1.getPassword());
