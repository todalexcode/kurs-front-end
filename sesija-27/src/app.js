var imagePath = 'http://image.tmdb.org/t/p/w300';
var ajaxUrl = 'https://api.themoviedb.org/3/search/movie';
var api_key = 'f2c99cf74ee4c4214605f5ac1bc00fc6';
var container = document.getElementById('flex-container');
var h3 = document.getElementById('nema-tog-naslova');
var divRes;
document.getElementById('search').addEventListener('keypress', callApi);

function callApi(e) {
    if (e.key === 'Enter') {
        console.log('enter je pozvan!!');
        var xr = new XMLHttpRequest();
        xr.addEventListener('load', reqListener);
        xr.open('GET', ajaxUrl +
            '?api_key=' +
            api_key +
            '&query=' + document.getElementById('search').value);
        xr.send();
    }
}

//complete all operations related to server respone parsing ...
function reqListener() {
    if (document.getElementById('divRes') !== null) {
        resetHtml();
    }
    //console.log(this.responseText);
    var obj = JSON.parse(this.responseText);
    console.log(obj);
    var img;
    divRes = document.createElement('div');
    divRes.setAttribute('id', 'divRes');
    divRes.setAttribute('class', 'result');
    container.appendChild(divRes);

    if (obj.total_results > 0) {
        for (var i = 0; i < obj.results.length; i++) {
            //kreiraj sliku
            img = document.createElement('img');
            //setuj atribut class
            img.setAttribute('class', 'poster');
            //setuj atribut title
            img.setAttribute('title', obj.results[i].title);
            divRes.appendChild(img);
            if (obj.results[i].poster_path !== null) {
                //setuj src atribut slike na trenutni poster
                img.setAttribute('src', imagePath + obj.results[i].poster_path);
            }
            else {
                //setuj src atribut slike na 'no-image.jpeg' 
                img.setAttribute('src', 'no-image.jpeg');
            }
        }
    }
    else {
        //pozvati funkciju koja setuje HTML za situaciju kada nema
        //pogodaka (unesen je neki pogresan string)
        setNoResults(document.getElementById('search').value);
    }
}

function setNoResults(searchQ) {
    console.log(searchQ);
    console.log(h3);
    h3.style.visibility = 'visible';
    h3.innerHTML = 'Nema pogodaka za: <strong>' + searchQ + '</strong>';
}

function resetHtml() {
    divRes.parentNode.removeChild(divRes);
    h3.textContent = '';
    h3.style.visibility = 'hidden';
}