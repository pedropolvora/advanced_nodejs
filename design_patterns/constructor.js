function Car( model, year, miles ) {

	this.model = model;
	this.year = year;
	this.miles = miles;

}

// this property (function toString) 
// will be made available to ALL instances of CAR

Car.Prototype.toString = function () {
	return this.model + " has done " + this.miles + " miles";
};

// The constructor pattern:
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

console.log( civic.toString() );
console.log( mondeo.toString() );
