function f1(arg) {
	console.log(typeof arg);
	console.log(arg.constructor == Array);
}

f1('a');
f1([1 ,2]);
