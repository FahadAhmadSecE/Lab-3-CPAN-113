//Task 1
let colors = new Array("Red", "Green", "Blue");
let sizes = ["small", "medium", "large"];
let numbers = Array.of(5, 10, 15);

//Task 2
colors.push("Purple");
let big = sizes.pop();

//Task 3 
console.log("Task 3");
console.log("");
let filteredNumbers = numbers.filter(x => x > 10);

let squaredNumbers = numbers.map(x => x ** 2);

colors.forEach(function(color) {
    console.log(color);
});

//Task 4
console.log("");
console.log("Task 4")
console.log("");

for (let num of numbers) {
    console.log(num);
}

for (let i = 0; i < sizes.length; i++) {
    console.log(sizes[i]);
}

let cNum = colors.entries();

for(let c = 0; c < colors.length; c++) {
    console.log(cNum.next().value);
}