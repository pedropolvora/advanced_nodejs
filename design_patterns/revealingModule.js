// An improved version of the module pattern.
var myRevealingModule = function () {

	var privateVar = "Ben Cherry",
		publicVar  = "Hey there!";

	function publicGreeting(name){
		console.log('Hello '+name);
	}

	function privateFunction() {
		// console.log( "Name:" + privateVar );
		publicGreeting(privateVar);
	}

	function publicSetName( strName ) {
		privateVar = strName;
	}

	function publicGetName() {
		privateFunction();
	}

	// Reveal public pointers to
	// private functions and properties

	return {
		setName: publicSetName,
		greetingSay: publicGreeting,
		greeting: publicVar,
		getName: publicGetName
	};

}();

myRevealingModule.setName( "Paul Kinlan" );
myRevealingModule.getName();

// DRAWBACK: If we have a private function referring to public function
// and that public function gets overridden or patched, the private function
// will still refer to the inital public one.
// As we can see in the example bellow.


myRevealingModule.greetingSay('Pedro');
myRevealingModule.greetingSay = function(name){
	console.log('Hi '+ name);
}
myRevealingModule.greetingSay('Pedro');
myRevealingModule.getName();

