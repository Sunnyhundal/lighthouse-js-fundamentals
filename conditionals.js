const raining = true;
const cold = true;
const temperature = 41;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  if (temperature < 0) {
    console.log("Make sure you pick out a scarf!");
  } else if (temperature < 15) {
    console.log("Short sleeves won't cut it!");
  } else {
    console.log("Short sleeves are fine.");
  }
}

console.log("Now you're ready to go outside!");
// Checking two conditions (both need to be be true) in an if statement
const isCitizen = true;
const age = 17;

if (isCitizen && age > 18){
  console.log("You are eligible to vote.");
}else{
console.log("You are eligible not to vote.");
}
// Checking two conditions in an if statement (only one statement needs to be true)
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}
// printing a message if there is no rain
if (!raining) {
  console.log("Leave your umbrella at home!");
}