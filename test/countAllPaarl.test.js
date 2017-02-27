describe('countAllPaarl',function(){
  it("should return 'allPaarlReg.length'when given 'data[i].startsWith('CJ')'",function(){
    assert.equal(countAllPaarl('CL 2345, CJ 23458, CY 34567, CJ 45678, CJ 1645'),3);
  });
});
