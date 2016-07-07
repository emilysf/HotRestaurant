// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer. 
// But you could have it be an empty array as well.
// ===============================================================================


var reservedArray = [
  {name: 'Emily', phone: '407-555-3221', email: 'emily@gmail.com', uniqueId: 'Em'},
  {name: 'Josh', phone: '407-335-6821', email: 'josh@gmail.com', uniqueId: 'Joshy'},
  {name: 'Walter', phone:'407-123-4567', email: 'walter@gmail.com', uniqueId:'Walt'}
];

// Note how we export the array. This makes it accessible to other files using require. 
module.exports = reservedArray; 