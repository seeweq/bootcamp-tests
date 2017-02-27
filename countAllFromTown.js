var countAllFromTown = function(countReg,location){
  var anyTown =[];
  var splitData = countReg.split(',');
  for( var i=0;i<splitData.length;i++){
    var eachVal = splitData[i].trim(' ');
    if(eachVal.startsWith(location)){
        anyTown.push(eachVal);
    }
  }
  console.log(anyTown.length);
  return anyTown.length

};
var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
