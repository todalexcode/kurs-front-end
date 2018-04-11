var header = document.querySelector('header');
var section = document.querySelector('section');


function populateHeader(jsonObj) {
 
}

function showHeroes(jsonObj) {
  var heroes = jsonObj['members'];
  for(var i = 0; i < heroes.length; i++) {
 
    myH2.textContent = heroes[i].name;
 
    var superPowers = heroes[i].powers;
    for(var j = 0; j < superPowers.length; j++) {
   
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
    section.appendChild(myArticle);
  }
}