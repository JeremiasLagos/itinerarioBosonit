
const toFixed = (numFloat, numDecimals) => {
  return Math.floor(numFloat * (Math.pow(10, numDecimals))) / (Math.pow(10, 					numDecimals))
};                                      
console.log(toFixed(2.123456789,3));