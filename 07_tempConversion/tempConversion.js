const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit-32)*5/9;
  return celsius.toFixed(1);
};

const ctof = function(celsius) {
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
