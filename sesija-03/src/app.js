//primer za job promenjlivu
var job;

// 4 vrste job-a su dogovorene:
//"Programer"
//"Bankar"
//"Pekar"
//"Pecaros"
//---any other --...

job = "Pecaros";

/*
switch (job) {
    case "Bankar":
        console.log("Vi ste bankar, welcome!");
        break;
    case "Programer":
        console.log("Vi ste programer, welcome!");
        break;
    case "Pekar":
        console.log("Vi ste pekar, welcome!");
        break;
    case "Pecaros":
        console.log("Vi ste pecaros, welcome!");
        break;
    default:
        console.log("Pogledajte dozvoljena zanimanja");
        break;
}
*/

if (job === "Bankar") {
    console.log("Vi ste bankar, welcome!");
} else if (job === "Programer") {
    console.log("Vi ste Programer, welcome!");
} else if (job === "Pekar") {
    console.log("Vi ste Pekar,welcome!");
} else if (job === "Pecaros") {
    console.log("Vi ste pecaros,welcome!")
} else { 
    console.log("Pogledajte dozvoljena zanimanja") 
};






//Zadatak
//Napisati program za igricu koja se sastoji
//od racunanja skora za dva prijatelja koji se 
//zovu Stefan i Marko.
//Pobednik je onaj ciji zbir godina i petostruke 
//visine veci
//Na konzoli ispisati poruku 
//"Pobednik je {ime_pobednika} sa {poeni} poena!"
//Unos vrednosti za ulazne vrednosti hardcodirati kroz
//varijable

var starostStefan = 25;


//Zameniti sadrzaj dve flase;
var coke = "Coca Cola";
var fanta = "Fanta";

var pomFlasa = "";

pomFlasa = coke; // nakon ovoga u pomFlasi je "Coca Cola", u coke je i dalje Coca Cola!
coke = fanta;
fanta = pomFlasa;

console.log("U flasi Coca Cole je: " + coke);
console.log("U flasi Fante je: "    + fanta);
