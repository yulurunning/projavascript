function addGenerator(num) {
	return function(newOne) {
		return newOne + num;
	};
}

var f1 = addGenerator(5);
console.log(f1(2));

// Create a new anonymous function, to use as a wrapper
(function(){
    // The variable that would, normally, be global
    var msg = "Thanks for visiting!";
    console.log(msg);
// Close off the anonymous function and execute it
})();
