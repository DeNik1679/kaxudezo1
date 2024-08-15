console.log( [4, 1, 1, 1, 4].map((item) => {
   return item * 2 
}));

console.log( [1, -2, 3, -4, 5].map((item) => {
   return item * -1
}));

console.log( ['Евдоким','Ivan', 'Игнат', 'Denis '].filter((item) => {
   return item.length <= 5
}));
   
console.log( [7, 8, 2].map((item) => {
   return item ** 3
}));

console.log( ['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'].map((item) => {
   return item.length
}));

function formatNumbers(numbers) {
   return numbers.map(number => `Цифры: ${number}`);
 }
 
 const input = [1, 2, 3, 4, 5];
 const output = formatNumbers(input);
 output.forEach(line => console.log(line));
 
 const friends = [
   { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
   { name: 'mike', pizzas: ['salami', 'margarita'] },
   { name: 'stas', pizzas: ['meat'] },
   { name: 'anna', pizzas: ['fish'] }
 ];
 
 function extractPizzas(friends) {
   return friends.map(friend => friend.pizzas);
 }
 
 const result = extractPizzas(friends);
 console.log(result);
 




 
 

