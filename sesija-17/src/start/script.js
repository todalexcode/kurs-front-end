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

function generate(){
    var divContainer = document.getElementById('cont');
    console.log(divContainer);
    var num = document.getElementById('number').value;
    var divContent;

    var arr = shuffleArray(num);

    console.log(arr);

    for(var i = 0; i < num; i++){
        divContent = document.createElement("div");
        divContent.textContent = arr[i];
        console.log(divContent);
        divContent.style.border = '1px';
        divContent.style.borderStyle = 'solid';
        divContent.style.margin = '10px';
        divContainer.appendChild(divContent);
    }
}