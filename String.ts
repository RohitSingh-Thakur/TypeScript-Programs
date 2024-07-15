var firstName: string = "Rohit";
var lastName: string = "Thakur";

console.log("First Name: ", firstName);
console.log("Last Name: ", lastName);

//String Concatination
console.log("Full Name : ", firstName + lastName);

// Seperate String
console.log(firstName, lastName);

// Re-Assigning varibale
var fullName: string = firstName + lastName;
console.log("Full Name : ", fullName);

// Access varibale inside console.log
// Rohit <=====> Thakur
console.log(`${firstName} <====> ${lastName}`);

// Build below SQL Query
// SELECT * FROM User WHERE userName = 'Rohit';

var tableName: string = "User";
var columnName: string = "userName";
var value: string = "Rohit";

console.log(`SELECT * FROM ${tableName} WHERE ${columnName} = '${value}'`);
