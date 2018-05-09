
var recordButton = document.getElementById('btnSaveLs');
var getButton = document.getElementById('btnGetLs');
recordButton.addEventListener('click',saveNameInLs);
function saveNameInLs(){
    var input = document.getElementById('lsInput').value;
    sessionStorage.setItem('name',input);
    console.log(input);
}
getButton.addEventListener('click',getNameFromLs);
function getNameFromLs(){
    var show = sessionStorage.getItem('name');
    alert(show);
}





























/*
//resenje 2
document.getElementById("btnSaveLs").addEventListener("click", saveNameInLs);
document.getElementById("btnGetLs").addEventListener("click", getNameFromLs);


function saveNameInLs(){
    var name = document.getElementById("lsInput").value;
    localStorage.setItem("name", name);
}

function getNameFromLs(){
    var name = localStorage.getItem("name");
    console.log(name);
}*/