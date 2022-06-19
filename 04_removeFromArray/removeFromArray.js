const removeFromArray = function(...args) {
// use forEach to loop each value, uses incude() to check if # already included,
// use push() to add the value in the new list, 
    //remove repeated numbers and NPV

    //forEach = loops thru each element in args
    //if element not already in args
    //add element in newArray
    // return to newArray
    const array=args[0];
    const newArray=[];
    array.forEach((element) => {    
        if (!args.includes(element)){ 
            newArray.push(element);    
        }
    });
    return newArray;                

};


// var removeFromArray = function(...args) {
//     //...args means any number of values
// any # in args[0] 1th argu goes to array
//filter(value that not already in the val, if already in val, break )

//     const array = args[0]   
//     return array.filter(val => !args.includes(val))     
//                 
// };




// Do not edit below this line
module.exports = removeFromArray;
