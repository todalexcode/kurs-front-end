var selectElement = document.getElementById("flags");
var img = document.getElementById("slika")

function prikaziZastavu() {

    img.src = selectElement.value
}

document.getElementById("set").addEventListener("click", prikaziZastavu)
