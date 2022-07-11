const ftoc = function(celsius) {

};

const ctof = function(fahrenheit) {
  let celsius = (fahrenheit-32)*5/9;
  return celsius.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
