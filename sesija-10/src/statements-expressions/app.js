// greet();

// function greet() {
//     console.log('hi');   
// }

// var anonymousGreet = function() {
//     console.log('hi');   
// }

// greet.ivanIzBg = 'Ivan';


// anonymousGreet();



//Ver 1
// function log(a) {
//     console.log(a);     
//  }
 
//  log({
//      greet: 'Hi!'
//  });
 


//Ver 2
 function log(a) {
   a();    
 }

function b(){
    console.log('Kazi B');
}

 log(b);

 //CH1 
 //Napisati funkciju koja prima 3 broja i vraca
 //najveci medju njima
 //Primer poziva:
 //var a = maxNumbers(4,2,1)
 //vraca 4

 //CH2
 //Napisati funkciju koja prima 3 stringa i vraca
 //prvi u abecednom redosledu. HINT: stringovi 
 //se ponasaju
 //isto kao i brojevi u poredjenju
 //primer poziva:
 //var a = minStrings('Rade','Obren', 'Ana');
 //console.log(a) => 'Ana'
 //
