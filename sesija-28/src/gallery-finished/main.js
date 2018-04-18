//example from
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1; i <= 5; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e){
      var imgSrc = e.target.getAttribute('src');
      //displayImage(imgSrc);
      displayedImage.setAttribute('src',imgSrc);
  }
}
 

// function displayImage(src){
//   displayedImage.setAttribute('src',src);
// }

/* Wiring up the Darken/Lighten button */
