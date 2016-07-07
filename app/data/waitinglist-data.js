// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer. 
// But you could have it be an empty array as well.
// ===============================================================================


var waitingArray = [
  {name: 'Laurie', phone: '407-234-5678', email:'laurie@gmail.com', uniqueId:'Ann'},
  {name: 'Alan', phone: '407-333-4444', email:'alan@gmail.com', uniqueId: 'Al'}
];


// Note how we export the array. This makes it accessible to other files using require. 
module.exports = waitingArray;
