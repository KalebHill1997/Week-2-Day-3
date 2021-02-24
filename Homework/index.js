console.log('Homework 1');
console.log('Challenge 1');

var numOfCups = prompt('How many cups of coffee?');
if(numOfCups < 3) {
    console.log("Yes I'll take another cup of coffee.");
}
else {
    console.log("I think I'm okay for now.");
}

console.log('Challenge 2');

var numOfMiles = prompt('How many cups of coffee?');
if(numOfMiles > 500) {
    console.log("Yes I think I need an oil change.");
}
else {
    console.log("My car doesn't need an oil change yet.");
}

console.log('Homework 2');
var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

for (var i = 0; i < myArray.length; i++)
{
    console.log(myArray[i]);
}