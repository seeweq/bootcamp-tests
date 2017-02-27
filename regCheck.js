var regCheck = function(regNum, location){
  var Registration =regNum.endsWith(location);
  console.log('Registration' + " " + location);
  return Registration;
};
regCheck('DV 23 NB GP', 'GP')
