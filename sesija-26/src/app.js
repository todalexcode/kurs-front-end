var imagePath = 'http://image.tmdb.org/t/p/w300';
var ajaxUrl = 'https://api.themoviedb.org/3/search/movie';
var api_key = 'f2c99cf74ee4c4214605f5ac1bc00fc6';
var container = document.getElementById('flex-container');
var h3 = document.getElementById('nema-tog-naslova');
var divRes;

document.getElementById('search').addEventListener('keypress', callApi);

function callApi(event) {
    if (event.key === 'Enter') {
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

function reqListener(){
    //console.log(this.responseText);
    var obj = JSON.parse(this.responseText);
    console.log(obj);
    var img;
    divRes = document.createElement('div');
    divRes.setAttribute('id', 'divRes');
    divRes.setAttribute('class', 'result');
    container.appendChild(divRes);

    if(obj.total_results > 0){
        for(var i = 0; i < obj.results.length; i++){
            //kreiraj sliku
            //setuj atribut class
            //setuj atribut title
            divRes.appendChild(img);
            if(obj.results[i].poster_path !== null){
                //setuj src atribut slike na trenutni poster
            }
            else{
                //setuj src atribut slike na 'no-image.jpeg' 
            }
        }
    }
}