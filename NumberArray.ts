var numbers: Array<number> = [10, 20, 30, 40, 50];

console.log("Print All Using console.log()");
console.log("0th index => ", numbers[0]);
console.log("1st index => ", numbers[1]);
console.log("2nd index => ", numbers[2]);
console.log("3rd index => ", numbers[3]);
console.log("4th index => ", numbers[4]);
console.log("================================");

console.log("Print All Using For Loop");
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log("================================");

console.log("Print All Using forEach loop");
numbers.forEach((element, index) => {
  console.log("index => ", index, "||", "element => ", element);
});
console.log("================================");

console.log("Print All Number Except 30 using For Loop");
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] == 30) continue;
  console.log(numbers[i]);
}
console.log("================================");

console.log("Print All Number Except 30 using ForEach");
numbers.forEach((element, index) => {
  if (element == 30) return;
  console.log(element);
});
console.log("================================");

console.log("print only 10 and 50 skip remaining numbers using forLoop");
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] == 20 || numbers[i] == 30 || numbers[i] == 40) {
    continue;
  }
  console.log(numbers[i]);
}
console.log("================================");

console.log("print only 10 and 50 skip remaining numbers using forEach");
numbers.forEach((element, index) => {
  if (element == 20 || element == 30 || element == 40) {
    return;
  }
  console.log(element);
});
