function strict(types, args) {
	if (types.length != args.length) {
		throw 'Invalid number of arguments. Expected ' + types.length + ' arguments, received ' + args.length;
	}
	for (var i=0;i<args.length;i++) {
		if (types[i] != args[i].constructor) {
			throw 'Invalid argument type. Expected ' + types[i].name + ', received ' + args[i].constructor.name;
		}
	}
}

function userList( prefix, num, users ) {
    // Make sure that the prefix is a string, num is a number,
    // and users is an array
    strict( [ String, Number, Array ], arguments );
    // Iterate up to 'num' users
    for ( var i = 0; i < num; i++ ) {
        // Displaying a message about each user
        console.log(prefix + ": " + users[i]);
    }
}
