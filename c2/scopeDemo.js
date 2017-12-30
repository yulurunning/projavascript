var foo = 'a';
if (true) {
	var foo = 'new a';
}
console.log(foo);

function test() {
	var foo = 'old a';
	console.log(foo);
}
test();
console.log(foo);
