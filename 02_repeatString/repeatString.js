// const repeatString = function(string,num) {
//     if (num<0){
//         return "ERROR"
//     }

//     else {return string.repeat(num)}



// };

const repeatString = function(string,num) {
    if (num<0){
        return "ERROR"
    }

    let word='';
    for (i =0; i<num;i++){ //depend how many time, word repeats num times
        word += string       // word repeats 1 time then goes to word, then again
                                // until reached num times. 
    }
    return word;


};



// Do not edit below this line
module.exports = repeatString;
