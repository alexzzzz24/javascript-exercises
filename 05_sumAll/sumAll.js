const sumAll = function(min,max) {
    //return error with negative #
    if (min<0  || max<0) return 'ERROR';
    //return with error non-# value, 
    //Number.isInteger() check if value is #or not
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    
    //sum all from larger to smaller value
    // temporarily let min = max, allow them to work on the for loop below
    if (max<min){
        let temp= min;
        min=max;
        max=temp;
    }

    //sum up # in bewtween from smaller to larger value
    let counter=0; //store value
    for (let i =min; i<max+1;i++){
        counter +=i;
    }
    return counter




};

// Do not edit below this line
module.exports = sumAll;
