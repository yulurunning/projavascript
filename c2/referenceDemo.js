var obj1 = new Object();
var obj2 = obj1;

obj1.prop1 = true;
console.log('obj1.prop1:', obj1.prop1);
console.log('obj2.prop1:', obj2.prop1);

var items = new Array('one', 'two', 'three');
console.log('item:', items);

var myBook = {
	name: 'Pro Javascript',
	price: 24.2,
	press: 'O\'Reilly'
};
console.log('myBook:', myBook);
console.log('myBook:', JSON.stringify(myBook));

var item = 'test';
var itemRef = item;
item += 'ing';

console.log('item:', item);
console.log('itemRef:', itemRef);
