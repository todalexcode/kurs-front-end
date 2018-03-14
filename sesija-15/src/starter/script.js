var Person = function (name){
    this.name = name;
}

Person.prototype.getName = function(){
    return 'Ime je: ' + this.name;
}

var pera = new Person('Pera');
var djura = new Person('Djura');

//perfomanse: 1 nacin

// function ExampleFn(){
//     this.print = function(){
//         console.log("Calling print");
//     }
// }

// var objects = [];
// console.time('x');

// for(var i = 0; i < 2000000; i++){
//     objects.push(new ExampleFn());
// }
// console.timeEnd('x');


//perfomanse: 2 nacin

function ExampleFn(){
 
}

ExampleFn.prototype.print =  function(){
    console.log("Calling print");
}

var objects = [];
console.time('x');

for(var i = 0; i < 2000000; i++){
    objects.push(new ExampleFn());
}
console.timeEnd('x');

(function () {
 
    var counter = 0;
   
    return {
   
      incrementCounter: function () {
        return ++counter;
      },
   
      getCounter: function(){
          return counter;
      },

      resetCounter: function () {
        console.log( "counter value prior to reset: " + counter );
        counter = 0;
      }
    };
   
  })();
   
  // Usage:
   
  // Increment our counter
  //testModule.incrementCounter();
   
  // Check the counter value and reset
  // Outputs: counter value prior to reset: 1
  //testModule.resetCounter();