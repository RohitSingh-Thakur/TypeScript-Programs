var numbers: Array<number> = [10, 20, 30, 40, 50];

// Print All Using console.log()
console.log("0th index => ", numbers[0]);
console.log("1st index => ", numbers[1]);
console.log("2nd index => ", numbers[2]);
console.log("3rd index => ", numbers[3]);
console.log("4th index => ", numbers[4]);
console.log("================================");

// Print All Using For Loop
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log("================================");

// Print All Using forEach loop
numbers.forEach((element, index) => {
  console.log("index => ", index, "||", "element => ", element);
});
console.log("================================");
