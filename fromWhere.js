var fromWhere = function(regNum){
  switch(regNum){
    case "CY":
      return "Bellville";
    case "CJ":
      return "Paarl";
    case "CA":
      return "Cape Town";
    default:
      return "Some other place!";
}
};
assert.equal(fromWhere("CY"), "Bellville");
assert.equal(fromWhere("CJ"), "Paarl");
assert.equal(fromWhere("CA"), "Cape Town");
assert.equal(fromWhere("L"), "Some other place!");
