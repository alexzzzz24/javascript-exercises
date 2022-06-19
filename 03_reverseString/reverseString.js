const reverseString = function(str) {
    let newStr='';                          //str=hello
    for(i = str.length - 1; i>=0;i--){  //str.lengt = 5, str.lenght-1 =4
         newStr += str[i]                  // str[4] = o, str[3]=l....etc
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
