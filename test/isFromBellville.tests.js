describe('isFromBellville', function(){

    it("should return 'true' when given 'regNum.startsWith('CY 23456')", function(){
        assert.equal(isFromBellville('CY 23456'), true);
    });
});
