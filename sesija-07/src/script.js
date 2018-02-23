
//ver 1.0

// for (var i = 0; i < 6 ; i++){
//     document.write("<h" + (i+1) +  "> The number is " + (i+1) + "</h" + (i+1) + "/>") ;
//     document.write("<br />");
// }

//ver 2.0

// for (var i = 1; i <= 6 ; i++){
//     document.write("<h" + i +  "> The number is " + i + "</h" + i + ">") ;
//     document.write("<br />");
// }

//ver 3.0
// for (var i = 1000; i > 0 ; i--){
//     document.write("Ovo je prolaz broj: " + i) ;
//     document.write("<br />");
// }

//while ver 1.0

// var i = 0;
// while(i < 100){
//     console.log("while loop: " + i);
//     if(i === 50){
//         break;
//     }    
//     i++;
// }
// console.log('nakon while sada je i=' + i);

// for (var i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }

// var nizLevaStrana = ['Darko', 'Ivan','Stefan','Nikola','Nemanja','Vojkan'];

// var covek = {
//     ime: 'Ivan',
//     prezime: 'Ivanovic',
//     tvshow: 'Vece sa II'
// }

// for(var i=0; i< nizLevaStrana.length; i++){
//     document.write('Sa leve strane sedi: ' + nizLevaStrana[i]);
//     document.write('<br/>');
// }


// function objReturn(){
//     return  {
//         ime: "Rade",
//         prezime: "Ostojic",
//         starost: 52
//     };
// }

// var objekat = objReturn();

// console.log(objekat.starost);

///////////////////////////////////////
// Lecture: Loops

/*
for (var i = 0; i < 10; i++) {
    console.log("for loop: "+ i);
}

var i = 0;
while(i < 10){
    console.log("while loop: " + i);
    i++;
}
*/

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/

/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


// while loops
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// break and continue
for (var i = 1; i <= 5; i++) {
    console.log(i);
    
    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    
    console.log(i);
}
*/



///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), 
as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, 
executes the steps 2., 3. and 4. and returns an array of true/false boolean values: 
true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results 
in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], 
but also to set values in an array, like y[i] = ... 
You can also use the specific array methods.
*/



var yearsForInput = [1966, 1936, 1998, 2001, 2008];

function printFullAges(years){
    var ages =[];
    var fullAges = [];
    //idem kroz ulazni niz od pocetka do kraja
    for(var i= 0; i < years.length; i++){
        //formiran novi niz, koji je bio prazan na pocetku funkcije!
        ages[i] = 2018 - years[i];
    }
    
    for(var i= 0; i < ages.length; i++){
        if(ages[i] >= 18){
            fullAges[i] = true;
            console.log('person no ' + (i + 1) + ' is full age');
        }
        else{
            fullAges[i] = false;
            console.log('person no ' + (i + 1) + ' is NOT full age');
        }
    }

    return fullAges;
}

//var full_1 = printFullAges(yearsForInput);
var full_2 = printFullAges([2016, 2014, 1936, 1966, 1986, 2017]);

//za domaci, vratiti iz funkcije NIZ OBJEKATA tipa:
// var person = {
//    age: 34,
//    isFullAge: false
//}

//testiranje:
// var full_3 = = printFullAges([2016, 2014, 1936, 1966, 1986, 2017]);
// full_3[0].age
// full_3[0].isFullAge