

// Resenje:

var heightJohn = 170;
var heightMike = 195;
var ageJohn = 36;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;


if (scoreJohn > scoreMike) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreJohn === scoreMike) {
    console.log('There is a draw.');
}
/*
var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;


if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
    console.log('It\'s a draw.');
}
*/

function godineStarosti(godinaRodjenja) {
    /*
    var trenutnaGodina = 2018;
    var starost = trenutnaGodina - godinaRodjenja;
    return starost;
    */
    return (2018 - godinaRodjenja);
}


/*
function godinaDoPenzije(godinaRodjenja) {
    var starost = godineStarosti(godinaRodjenja);
    var locGodinaDoPenzije;
    
    //if (starost > 65){
    //    return "vec ste u penziji ili lovite u vecnim lovistima!";
   // }
    //else if (starost===65){
    //    return "ove godine cete u penziju!";
    //}
    //else {
    //    return 65 - starost + " godina do penzije!";
    //}
    

    if (starost > 65) {
        locGodinaDoPenzije = "vec ste u penziji ili lovite u vecnim lovistima!";
    }
    else if (starost === 65) {
        locGodinaDoPenzije = "ove godine cete u penziju!";
    }
    else {
        locGodinaDoPenzije = 65 - starost + " godina do penzije!";
    }

    return locGodinaDoPenzije;
}
*/


var godinaDoPenzije = function (godinaRodjenja){
    var starost = godineStarosti(godinaRodjenja);
    var locGodinaDoPenzije;
    
    if (starost > 65) {
        locGodinaDoPenzije = "vec ste u penziji ili lovite u vecnim lovistima!";
    }
    else if (starost === 65) {
        locGodinaDoPenzije = "ove godine cete u penziju!";
    }
    else {
        locGodinaDoPenzije = 65 - starost + " godina do penzije!";
    }

    return locGodinaDoPenzije;
}

