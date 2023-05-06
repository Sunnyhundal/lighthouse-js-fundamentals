const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Bannana bread ingredients:");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write a for loop that prints out the contents of ingredients:
console.log("Bannana bread ingredients:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Bannana bread ingredients backwards:");
let y = ingredients.length-1;
while (y >= 0) {
  console.log(ingredients[y]);
  y--;
}