function findBiggestFraction(a, b) {
  // a > b ? console.log('a: ', a) : console.log('b: ', b);
  var result;
  a > b ? result = ['firstFraction', a] : result = ['secondFraction', b];
  return result;
}

var firstFraction = 3 / 4;
var secondFraction = 5 / 5;
//
// findBiggestFraction(firstFraction, secondFraction);
// findBiggestFraction(4 / 4, 3 / 4);

console.log(findBiggestFraction(firstFraction, secondFraction));
 var fractionResult = findBiggestFraction(firstFraction, secondFraction);
 console.log(fractionResult);
 
 console.log('bigger fraction name is ' + fractionResult[0] + ' with value equal ' + fractionResult[1]);