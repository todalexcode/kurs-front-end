// var str1 = 'Cika ';
// var str2 = 'Rade';

// var rez1 = str1.concat(str2);

// var rez2 = str2.concat(str1);

// //str1 += str2;
// console.log(str1);
// console.log(str2);
// console.log(rez1);
// console.log(rez2);

// var obj ={
//     sayHi: function(){
//         console.log(this);
//     },
//     ime: 'Rade',
//     prezime: 'Ostojic'
// }

// var str3 = "rade.ostojic@gmail.com@";

// var n = str3.indexOf('rade.ostojic.gmail.com');
// console.log(n);


var str4 = "rade.ostojic@gmail.com@";

// var n = str4.lastIndexOf('@');
// // console.log("Index poslednjeg \"@\" u reci je: " + n);
// console.log('Index poslednjeg "@" u reci je: '  + n);
// console.log('Duzina email adrese u karakterima : ' + str4.length);

var ca = str4.charAt(123);
console.log(ca);



//napisati funkciju koja vraca zadnji karakter stringa str
function lastCharOfStr(str){
    return str.charAt(str.length - 1);
}

var test1 = lastCharOfStr('Rade Ostojic');
var test2 = lastCharOfStr('rade@hotmail.com');
var test3 = lastCharOfStr(str4);

console.log(test1);
console.log(test2);
console.log(test3);

console.log(str4.endsWith('com@R')) ;

var str5 = 'rade.ostojic.zivi.u.zarkovu';

var strArr = str5.split('.');
console.log(strArr);

var recenica = 'Ivan Popovic Zivi u Zelezniku ';
var strArr1 = recenica.split(' ');

console.log(strArr1);

var newStr = recenica.trim()

var subStr1 = recenica.substring(13, 17);
var subStr2 = recenica.substr(13, 4);

var uppCase = recenica.toUpperCase();

var lowerCase = recenica.toLocaleLowerCase();

var stringSliceOnMDN = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice';

var data ={
    name: 'Rade', 
    email: 'r_ostojic@hotmail.com'
}

function sendData(data) {
    var XHR = new XMLHttpRequest();
    var FD  = new FormData();
  
    // Push our data into our FormData object
    for(name in data) {
      FD.append(name, data[name]);
    }
  
    // Define what happens on successful data submission
    XHR.addEventListener('load', function(event) {
      alert('Yeah! Data sent and response loaded.');
    });
  
    // Define what happens in case of error
    XHR.addEventListener('error', function(event) {
      alert('Oups! Something went wrong.');
    });
  
    // Set up our request
    XHR.open('POST', 'https://send.pageclip.co/wf4047MiM7zfzwrtRaHjyye1agghoGH9');
    XHR.setRequestHeader('Access-Control-Allow-Headers','X-REQMETHOD,X-REQTRANSPORT,X-HASFETCH,Content-Type');
    XHR.setRequestHeader('Access-Control-Allow-Origin','*');
    XHR.setRequestHeader('Origin','http://localhost:3000');
    
    // Send our FormData object; HTTP headers are set automatically
    XHR.send(FD);
  }