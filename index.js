/* Välkommen till träningsrepot!

Steg-för-steg:

1. Studera data.json. I denna fil hittar du information som du ska använda för att göra beräkningar.
2. Längst ut finns det just nu enbart en key, calculate, men tanken är att vi kommer att lägga till fler keys allteftersom
3. Snegla gärna på vårt projekt kring hur man läser in en .json och får den i ett objekt.
4. Det är OK att hårdkoda calculate-keyn.
5. first och second är keys vars värde ligger till grund för beräkningarna du ska göra.
6. Om en task t.ex är "add" så betyder det att first skall adderas till second, first + second och resultatet printas
7. "results from task 'add' is 15, (10 + 5)" är en lämplig output.
8. Programmet ska räkna rätt även om du byter värden på first och second (t.ex first = 20 och second = 5):
9. "results from task 'add' is 25, (20 + 5)"
10. Öva på att loopa igenom tasks så att vi kan lägga till fler tasks.
11. Varje task utgår alltid ifrån samma värden för first och second.
*/
var fs = require('fs');
var path = require('path');

const dataJobs = './data.json';
var { calculate } = JSON.parse(fs.readFileSync(path.resolve(__dirname, dataJobs), 'utf-8'));

let queryOne = calculate.first;
console.log(queryOne); // 10
let queryTwo = calculate.second;
console.log(queryTwo); // 5

let taskOne = calculate.tasks[0].name;
console.log(taskOne);

console.log('results from ' + taskOne); 


// looping
//for (var property in calculate.tasks) {
  //  console.log(property, ':',calculate.tasks[property]);
//}

//sum two objects
var obj = {};
Object.keys(queryOne).forEach(function(a) {
    obj[a] = queryOne[a] + queryTwo[a]
})
console.log(obj);

//array output
calculate.tasks.forEach(tasks => {
var taskArray = [];
taskArray.push(tasks);
console.log(taskArray);
})

function add(queryOne, queryTwo) {
    addResult = queryOne + queryTwo;
}
add(5, 10);

console.log('results from ' + taskOne + ' is ' + obj); // will put out 15


