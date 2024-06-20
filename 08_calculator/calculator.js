const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

const multiply = function(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let result = 1;
  if (a > 0) {
    for (let i = a; i > 1; i--) {
      result *= i;
    };
  }
  else if (a == 0) {
    result = 1
  }
  else {
    return "ERROR";
  }
  return result;
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
