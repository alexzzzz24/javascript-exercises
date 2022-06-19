const ftoc = function(a) {
  let c1=(a-32)*5/9
  return Math.round(c1*10)/10;
  console.log(Math.round(c1*10)/10)
};

const ctof = function(b) {
  let f1=(b*(9/5)+32)
  return Math.round(f1*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
