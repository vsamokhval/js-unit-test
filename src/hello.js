//var _ = require('lodash');

function sayHello(to) {
	return _.template("Hello, <%= name %>!")({name: to});
	//return 'Hello, world';
}