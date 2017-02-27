var countAllPaarl = function(countregNum){
var allPaarlReg = [];
  var data = countregNum.split(", ");
  for(var i=0;i<data.length;i++){
  if(data[i].startsWith('CJ')){
  allPaarlReg.push(data[i]);
  }
  }
    //console.log(allPaarlReg);
  return allPaarlReg.length;
};
 var howManyPaarl = countAllPaarl('CL 2345, CJ 23458, CY 34567, CJ 45678, CJ 1645')
 console.log(howManyPaarl)
