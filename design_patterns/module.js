// ** The module pattern **
// Originally defined as a way to provide public and private
// encapsulation for classes

// In Javascript it's used to provided an emulation of classes

var testModule = (function () {
  var counter = 0;
  return {
    incrementCounter: function () {
      return ++counter;
    },
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };
})();

// Usage:

// Increment our counter
testModule.incrementCounter();
// Check the counter value and reset
// Outputs: 1
testModule.resetCounter();


