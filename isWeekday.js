var isWeekday = function(day){
  var weekend = day.startsWith('S');
  var weekday = !day.startsWith('S');
  console.log('is this a weekday:' + weekday);
  return weekday
};
isWeekday('Monday');
