const palindromes = function (string) {
//Goal:abcBe --> edcba     change to lowercase
//split -->a b c d e, reverse --> e d c b a, join-->
    // processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    // return (
    // processedString
    //     .split("")
    //     .reverse()
    //     .join("") == processedString
    // );
    let lowerString=string.toLowerCase().replace(/[^a-z]/g, "");
    let reversedString=lowerString.split("").reverse().join("");

    if (lowerString===reversedString) {return true}
    else {return false}




};
// Do not edit below this line
module.exports = palindromes;
