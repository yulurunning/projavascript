function sendMessage(msg, obj) {
	if (arguments.length == 2) {
		obj.handleMsg(msg);
	}
	else {
		console.log(msg);
	}
}

sendMessage('hello world');
sendMessage('hello world', {
	handleMsg: function(msg) {
		console.log('The message is ' + msg);
	}
});

function makeArray() {
	var items = [];
	for (var i=0;i<arguments.length;i++) {
		items.push(arguments[i]);
	}
	return items;
}

console.log(makeArray(1, 2, 3, 4, 5));

function showMessage(msg) {
	if (typeof msg == 'undefined') {
		msg = 'An error occured.';
	}
	console.log(msg);
}

showMessage();
showMessage('abc');
