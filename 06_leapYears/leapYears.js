const leapYears = function(year) {


    // divisible by 4 and not divisible by 100 is leap year
    //year%4==0 && (year%100 !==0)

    //divisible by 4 and divisible by 400 is leap year
    //year%4==0 && (year%400==0 )
    if( year%4==0 && ((year%100 !==0) || year%400==0 )){
        return true;
    }
    else{return false;}


};

// Do not edit below this line
module.exports = leapYears;
