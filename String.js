var firstName = "Rohit";
var lastName = "Thakur";
console.log("First Name: ", firstName);
console.log("Last Name: ", lastName);
//String Concatination
console.log("Full Name : ", firstName + lastName);
// Seperate String
console.log(firstName, lastName);
// Re-Assigning varibale
var fullName = firstName + lastName;
console.log("Full Name : ", fullName);
// Access varibale inside console.log
// Rohit <=====> Thakur
console.log("".concat(firstName, " <====> ").concat(lastName));
// Build below SQL Query
// SELECT * FROM User WHERE userName = 'Rohit';
var tableName = "User";
var columnName = "userName";
var value = "Rohit";
console.log("SELECT * FROM ".concat(tableName, " WHERE ").concat(columnName, " = '").concat(value, "'"));
