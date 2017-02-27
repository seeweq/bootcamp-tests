var yearsAgo = function(year){
var date = new Date();
  var whichYear= date.getFullYear();
  var result = whichYear - year;
  return result;
};
var test = yearsAgo('1909');
console.log(test)
