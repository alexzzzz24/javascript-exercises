const caesar = function(str,shift) {
    // return to the final result, map() = char shift
    return str.split('').map(char => shiftChar(char,shift)).join('');
};

    //arrow function to find the charCodeAt #
let codeSet= code =>(code < 97 ? 65:97); //determine cap or lower letter


const mod = (n, m) => (n % m + m) % m; // works well with negative #



    // use arrow function find the shifted str
let shiftChar=(char,shift) => {
        // change char to dex #
    let code =char.charCodeAt(); //conver input to dex#

        //check code lies within the dex parameter
    if ((code >= 65 && code<=90) || (code>=97 && code<=122)){
            // perfrom the shifting
        return String.fromCharCode(// String.fromCharCode  is get back the letter with a string
            mod(code+shift - codeSet(code),26)+codeSet(code)
        );
            


    }
    return char;

};

    


// Do not edit below this line
module.exports = caesar;
