const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a,b) {
  let counter=0;
  for (let i=0;i<a.length;i++){
    counter+=a[i];
  }
  return counter;
};

const multiply = function(a) {
  let counter=1;
  for (let i=0;i<a.length;i++){
    counter*=a[i];
  }
  return counter;
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  let counter =1;
	for(let i=0; a>i;a--){
    counter *= a; 
  }
  return counter;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
