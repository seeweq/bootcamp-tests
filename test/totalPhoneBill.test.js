describe('totalPhoneBill',function(){

  it("should return 'R' + total.toFixed(2)' when give '(Phone.startsWith('call')'",function(){
    assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
  })
  it("should return 'R' + total.toFixed(2)' when give '(Phone.startsWith('sms')'",function(){
    assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
});
});
