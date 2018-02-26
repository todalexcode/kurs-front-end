function printNumber(number) {
    
    //1. Uzimam element iz HTML
    var square = document.getElementById("square");

    //2. Setujem innerHTML property
    square.innerHTML = number;
}
  
  //dodeljujem promenljivoj vrednost objekta 
  var button = document.getElementById('button');
  
  //definisem onclick
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  

  //definisem objekat dice
  var dice = {
    sides: 6,
    roll: function() {
     var randomNumber = Math.floor(Math.random() * 6) + 1;
      return randomNumber;
    }
  }