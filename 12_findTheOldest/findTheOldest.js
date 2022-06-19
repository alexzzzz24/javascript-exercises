const findTheOldest = function(info) {
//use reduce method
    return info.reduce((oldest,current) => {    //use getAge to compare who is older
        let oldestAge= getAge(oldest.yearOfBirth,oldest.yearOfDeath);  // figure out the age for the first value
        let currentAge= getAge(current.yearOfBirth,current.yearOfDeath) // check the next value
        return oldestAge> currentAge ? oldest : current;


    })

};

let getAge= function(birth,death){  // find out the age of one person
    if(!death){
        death =new Date().getFullYear();  //get the year only 
    }
    return death-birth;
}


// Do not edit below this line
module.exports = findTheOldest;
