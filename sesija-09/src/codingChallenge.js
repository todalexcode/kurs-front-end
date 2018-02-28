
//CH1 local vs global ver 1
var test = "I'm global";

function testScope() {
  test = "I'm local";

  console.log(test);     
}

console.log(test);     
testScope();           
console.log(test);     


//CH 2 local vs global ver 2
var test = "I'm global";

function testScope() {
  var test = "I'm local";
  console.log(test);     
}

console.log(test);     
testScope();           
console.log(test); 

//CH 3 Prebrojavanje:
//Napisati funkciju koja prima niz stringova, 
//a vraca broj
//pojavljivanja reci "Code"
// function countWordCode(arr){

//}
//var test = ['Code', 'Rade, 'Code', 'Mirko']
//var res = countWordCode(test);
//console.log(res);


//CH 4  Write a JavaScript program to swap the first and last elements 
//of a given array of integers. The array length should be at least 1