//CH 1 
//Napisati funkciju  koja prima niz brojeva a vraca njihov zbir

//CH 2
//Napisati funkciju  koja prima niz brojeva i vraca njihov maximum

//CH 3
//Napisati funkciju koja prima niz brojeva i vraca najmanji

//CH 4
//Napisati funkciju koja prima niz (moze i niz stringova), a vraca niz u obrnutom redosledu

//CH1 - potpis funkcije


/*
function sumaNiza(niz){
    var zbir = 0;
    for(i=0; i<niz.length; i++){
        zbir = zbir + niz[i];
    }

    return zbir;
}

//testiranje:
var niz = [1, 2, 3,5,-11,100,0.1];

niz.length
var suma = sumaNiza(niz);

console.log(suma);
*/


var arrayOfNums = [3000, 1, 2, 100, 3, 1200];

function maxArrayMember(arrayOfNums) {
    var max;
    max = arrayOfNums[0];
    for (var i = 1; i < arrayOfNums.length; i++) {
        if (arrayOfNums[i] > max) {
            max = arrayOfNums[i];
        }
    }
    return max;
}

var myMax = maxArrayMember(arrayOfNums);
console.log(myMax);



function minNiza(nizBrojeva) {

    var min;

    min = niz[0];

    for (var i = 1; i < nizBrojeva.length; i++) {
        if (niz[i] < min) {

            min = niz[i];
        }

    }
    return min;
}

var niz = [1, 2, 3];

//CH 4

var nizStringova = ['Rade', 'Olivera', 'Petar', 'Obren'];
var nizBrojeva = [1, 2, 3, 4, 5, 6];
function reverseArr(niz){
    returnArr = [];

    var j = 0;
    for(var i = niz.length - 1; i >= 0; i--){
        //returnArr.push(niz[i]);
        returnArr[j] = niz[i];
        j++;
    }

    return returnArr;
}

var rez1 = reverseArr(nizStringova);
var rez2 = reverseArr(nizBrojeva);

