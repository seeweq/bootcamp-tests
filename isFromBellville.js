var isFromBellville = function(regNum){
  var Registration = regNum.startsWith('CY');
  console.log(Registration);
  return Registration;
};
isFromBellville('CY 23456');