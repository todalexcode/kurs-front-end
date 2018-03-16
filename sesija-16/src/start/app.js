/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
*/

// function interviewQuestion(job) {
//     return function(name){
//         switch(job){
//             case 'designer': 
//                 console.log(name + ', can you please explain what UX design is?');
//                 break;
//             case 'teacher':
//                 console.log('What subject do you teach, ' + name + '?');
//                 break;
//             default:
//                 console.log('Hello ' + name + ', what do you do?');    
//         }
//     }
// }
// var iq = interviewQuestion('designer');
// var iq_for_teacher = iq('Marija');


// function Car(model, ccm, ks, color) {
//     this.model = model;
//     this.ccm = ccm;
//     this.ks = ks;
//     this.color = color;
// }
// Car.prototype.drive = function(kmh){
//     console.log(this.model + ' drives ' + kmh + ' km/h!');

// }
// var renault = new Car('Clio', 1400, 80, 'Green');

// console.log(renault);
// var r= renault.drive(100);

// var bmw = new Car('BMW', 2500, 220,'Black');
// console.log(bmw.drive(170));

function shuffleArray(dimension) {
    var outArr = [];
    var counter = 1;

    var rndNum;
    var isAlreadyHere;
    //begin the proces - take the first one, and push it to array
    rndNum = Math.floor(Math.random() * dimension);
    outArr.push(rndNum);

    //big loop - count total number of ranadom generated numbers
    while (counter < dimension) {

        isAlreadyHere = false;
        //console.log('Ostalo mi je jos: ' + (dimension - counter));
        while (!isAlreadyHere) {
            //take the next random ...
            rndNum = Math.floor(Math.random() * dimension);
            //is it new in the array?
            if (outArr.indexOf(rndNum) === -1) {
                outArr.push(rndNum);
                isAlreadyHere = true;
                // console.log('Dobar: ' + rndNum);
                counter++;
            }
            //it isn't :(
            else {
                //console.log('Pa ovaj vec imam: ' + rndNum);
            }
        }
    }
    return outArr;
}

// console.time('trajanje');
// var rnd_arr = shuffleArray(5000);
// console.log(rnd_arr);
// console.timeEnd('trajanje');


//domaci rad sa sesije 15
// function getAverage(array){
//     var av = 0;

//     for(var i = 1; i < array.length; i = i + 2){
//         av += array[i];
//     }

//     return av / (array.length/2);
// }

// var x = ['Jelana', 65, 'Darko', 77, 'Ivan', 81.78];

// console.log('Prosek testa je: ' + getAverage(x));
// console.log('Prosek testa je: ' + getAverage(x).toFixed(2));

function shuffleArrayBetterWay(dimension) {
    var array = [];
    for (i = 0; i < dimension; i++) {
        array.push(i);
    }
    var currentIndex = array.length;
    var tempVar;
    var rndIndex;

    while (currentIndex !== 0) {
        rndIndex = Math.floor(Math.random() * currentIndex);
        //console.log('Ostalo mi je jos: ' + (array.length - currentIndex));
        currentIndex -= 1;
        /*
        currentIndex -- ;
        currentIndex = currentIndex - 1;
        */
        tempVar = array[currentIndex];
        array[currentIndex] = array[rndIndex];
        array[rndIndex] = tempVar;
    }
    return array;
}

//var niz = [1, 2 , 3, 4 , 5];
console.time('trajanje');
var novi_niz = shuffleArrayBetterWay(5000000);
console.log(novi_niz);
console.timeEnd('trajanje');



