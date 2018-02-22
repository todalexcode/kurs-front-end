/*

1.  Napisati funkciju za sabiranje 2 broja, koja vraca zbir. 
    Ako bilo koji od argumenata nije broj, vratiti poruku pozivaocu. 
    Za proveru da li je ulazni parameter broj, koristiti ugradjenju funkciju Number.isInteger(number)

2.  Napisati funkciju za racunanje obima kruga, za zadati parameter kruga u cm. Koristi Math.PI za broj pi.

3.  Napisati funkciju koja spaja 2 reci combine(word1, word2)


*/

function zbir(sabirak1, sabirak2){
    //proveravamo da li je sabirak1 integer broj (ceo broj)
//      if(!Number.isInteger(sabirak1)){
//           return sabirak1 + " nije CEO broj!";   
//      }
//      //proveravamo da li je sabirak2 integer broj (ceo broj)
//      if(!Number.isInteger(sabirak2)){
//          return sabirak2 + " nije CEO broj!" ; 
//   }
    if(!isNaN(sabirak1 + sabirak2)){
         return sabirak1 + sabirak2;
    }
    else{
     return "Neki od sabiraka nije broj!"
    }

    
}