var fruitsName = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
console.log();
console.log("=======================================");
console.log("Print All Using Console.log()");
console.log(fruitsName[0]);
console.log(fruitsName[1]);
console.log(fruitsName[2]);
console.log(fruitsName[3]);
console.log(fruitsName[4]);
console.log("=======================================");
console.log("Print All Using for loop");
for (var i = 0; i < fruitsName.length; i++) {
    console.log(fruitsName[i]);
}
console.log("=======================================");
console.log("Print All Using forEach loop");
fruitsName.forEach(function (element, index) {
    console.log(element);
});
console.log("=======================================");
console.log("Print All In LowerCase Using forEach loop");
fruitsName.forEach(function (element, index) {
    console.log(element.toLowerCase());
});
console.log("=======================================");
console.log("Print All In UpperCase Using forEach loop");
fruitsName.forEach(function (element, index) {
    console.log(element.toUpperCase());
});
console.log("=======================================");
console.log("Print All except Apple for loop");
for (var i = 0; i < fruitsName.length; i++) {
    if (fruitsName[i].toLowerCase() == "apple") {
        continue;
    }
    console.log(fruitsName[i]);
}
console.log("=======================================");
console.log("Print All except Banana forEach loop");
fruitsName.forEach(function (element, index) {
    if (element.toLowerCase() == "banana") {
        return;
    }
    console.log(element);
});
console.log("=======================================");
console.log("Print All except mango for loop");
for (var i = 0; i < fruitsName.length; i++) {
    var fruit = fruitsName[i].toLowerCase();
    if (fruit === "mango") {
        continue;
    }
    console.log(fruitsName[i]);
}
console.log("=======================================");
