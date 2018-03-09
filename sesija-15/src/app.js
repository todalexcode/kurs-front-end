function reqListener () {
    console.log(this.responseText);
  }
  
  var apiKey = 'f2c99cf74ee4c4214605f5ac1bc00fc6';

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://api.themoviedb.org/3/search/movie?api_key=" + apiKey +  "&query=leon");
  oReq.send();