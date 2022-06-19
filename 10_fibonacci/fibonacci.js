const fibonacci = function(index) {
    
    if(index<0){return 'OOPS'};   //negative
    if(index===0){return 0};
    //fibonacci = sum is the previous two #s;
    let a=0;    //initial values are 0 and 1
    let b=1;    
    for(let i=1; i<index;i++){
        let temp=b   //tempoarily let temp = 1
        b=a+b       // update b =0+1
        a=temp       //updaye a= 1
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
