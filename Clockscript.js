/*let js = 'amazing';
// if (js == 'amazing') alert('Javascript is fun!');

console.log(40 + 8 + 23 - 10);

let firstName = true;
console.log(firstName);
console.log(typeof firstName);
console.log(typeof 23);
console.log(typeof 'adarsh');

firstName = 'YES!';
console.log(firstName);
*/
// let age = 30;
// age = 31;

// const birth = 1991;

// const markHigherBMI = BMImark > BMIjohn;
// console.log(markHigherBMI);

//

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMImark = massMark / (heightMark ** 2);
// const BMIjohn = massJohn / (heightJohn ** 2);

// console.log(BMImark, BMIjohn);

// if (BMImark > BMIjohn) {
//     console.log(`BMI of Mark(${BMImark}) is greater`);
// }
// else {
//     console.log(`BMI of John(${BMIjohn}) is greater`);
// }

// const year = '98';
// console.log(Number(year) + 18, year);
// const favourite = Number(prompt("What's your favourite number ?"));
// console.log(favourite);

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphons win !`);
// }
// else if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas win !`);
// }
// else {
//     console.log(`Both win the trophy`);
// }

// const day = prompt("Koi din daalo bhai!");
// switch (day) {
//     case 'monday':
//         console.log('Monday hain bhai !');
//         break;
//     case 'Tuesday':
//         console.log('Tuesday hain bhai!');
//         break;
//     case 'Wednesday':
//         console.log('Wednesday hain bhai!');
//         break;
//     case 'Thursday':
//     case 'Friday':
//         console.log('Weekend aane waala hain !!');
//         break;
//     default:
//         console.log('Aisa din hi nahi aata be!');
// }
// "use strict";

//This is called Arrow Function
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoredolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoredolphins, scoreKoalas);

// //This is called Function expresstion , if i use function checkWinner(), then it is called function declaration .
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win!`);
//     }
//     else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win!`);
//     }
//     else console.log(`No one wins!`);
// }

// checkWinner(scoredolphins, scoreKoalas);

// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(years.length);
// const data = ['naam', 20 - 19, 'namak', 'nishaan', friends];
// console.log(data);

const friends = ['adarsh', 'ansh', 'Parthik'];
friends.push('Zaid');
console.log(friends);
friends.pop();
console.log(friends);

friends.unshift('John');
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('adarsh'));

console.log(friends.includes('adarsh'));
console.log(friends.includes('parthik'));
