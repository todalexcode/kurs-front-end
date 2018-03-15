/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
*/

function interviewQuestion(job) {
    return function(name){
        switch(job){
            case 'designer': 
                console.log(name + ', can you please explain what UX design is?');
                break;
            case 'teacher':
                console.log('What subject do you teach, ' + name + '?');
                break;
            default:
                console.log('Hello ' + name + ', what do you do?');    
        }
    }
}
var iq = interviewQuestion('designer')('Rade');
