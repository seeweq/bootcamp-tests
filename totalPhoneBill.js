var totalPhoneBill = function(cost){
var Bill = cost.split(',');
  var total = 0;
  for(var i=0;i<Bill.length;i++){
    var Phone = Bill[i].trim();
    if(Phone.startsWith('call')){
     total = total + 2.75
    }
      else if(Phone.startsWith('sms')){
        total = total + 0.65
      }
        else{
          total = total + 0.00
        }
      }
  console.log(total);
  return 'R' + total.toFixed(2);
};
totalPhoneBill('call, sms, call, sms, sms');
