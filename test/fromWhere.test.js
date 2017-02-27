describe('fromWhere', function(){

  it("should return 'Some other place!' when given 'CY'", function(){
    assert.equal(fromWhere("CY"), 'Bellville');
  });
  it("should return 'Some other place!' when given 'CJ'",function(){
    assert.equal(fromWhere("CJ"),'Paarl');
  });
  it("should return 'Some other place!' when given 'CA'",function(){
      assert.equal(fromWhere("CA"),'Cape Town');
  })
  it("should return 'Some other place!' when given 'L'",function(){
      assert.equal(fromWhere("L"),'Some other place!');
  });
});
