const convertToCelsius = function(tempInFah) {
  return Number((((tempInFah - 32) * 5) / 9).toFixed(1));
};

const convertToFahrenheit = function(tempinCel) {
  return Number((((tempinCel * 9)/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
