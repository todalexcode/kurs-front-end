function randArray(dimension) {
    var outArr = [];
    var counter = 1;
    var rndNum;
    var isAlreadyHere
    
    rndNum = Math.floor(Math.random() * dimension);
    outArr.push(rndNum);
    //big loop - until we reach the max numbers
    while (counter < dimension) {
        isAlreadyHere = false;
        console.log('Ostalo mi je jos: ' + (dimension - counter) );
        while(!isAlreadyHere){
            rndNum = Math.floor(Math.random() * dimension);
            console.log(rndNum);
            //if not in array, put it. Don't foget to icrease counter 
            //and mark number as taken :)
            if (outArr.indexOf(rndNum) == -1) {
                outArr.push(rndNum);
                isAlreadyHere = true;
                counter++;
            }
        }
     }
    return outArr;
}
 console.time('trajanje');
var x = randArray(5);
console.timeEnd('trajanje');

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        console.log(randomIndex);
        console.log('Ostalo mi je jos: ' + (array.length - currentIndex) )
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

console.time('trajanje');
var y = shuffle([1,2,3,4,5]);
console.log(y);
console.timeEnd('trajanje');


//domaci rad sa sesije 15
function getAverage(array){
    var av = 0;

    for(var i = 1; i < array.length; i = i + 2){
        av += array[i];
    }

    return av / (array.length/2);
}

var x = ['Jelana', 65, 'Darko', 77, 'Ivan', 81.78];

console.log('Prosek testa je: ' + getAverage(x));
console.log('Prosek testa je: ' + getAverage(x).toFixed(2));