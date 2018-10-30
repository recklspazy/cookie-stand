'use strict';

//global variable
var name = '1st and Pike';
var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function storeName(name) {
  return 'This is store named', +name+ '.';
}
// var minCustomerVisit = 23;
// var maxCustomerVisit = 65;
//console.log('Min', maxCustomerVisit);


var storeOne = {

  name: '1st and Pike',
  minCustomerVisit: 23,
  maxCustomerVisit: 65,
  averageCookieSold: 6.3,

  storeName: function(){
    return Math.floor(Math.random() * ((maxCustomerVisit - minCustomerVisit)+1) + minCustomerVisit);
  },
};

console.log('storeOne', storeOne);
console.log('storeName',storeName);
console.log('storeHours', storeHours);