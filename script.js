'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (indexStarter, indexMain) {
    return [this.starterMenu[indexStarter], this.mainMenu[indexMain]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // orderDelivery: function (obj) {
  //   console.log(obj);
  orderDelivery: function ({ time, indexMain, indexStarter, address }) {
    console.log(`Your order recieved! ${this.starterMenu[indexStarter]} and ${this.mainMenu[indexMain]} will be deliverd
      to ${address} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngrediant, ...otherIngredients) {
    console.log(mainIngrediant);
    console.log(otherIngredients);
  },
};

// ---------------------------Maps Iteration---------------------
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'Correct!!!'],
//   [false, 'try again :('],
// ]);
// console.log(question);
// console.log(question.get('question'));
// for (const [number, language] of question) {
//   if (typeof number === 'number') console.log(`Answer ${number} : ${language}`);
// }
// const theAnswer = Number(prompt('What is your answer?'));
// console.log(theAnswer);

// console.log(question.get(theAnswer === question.get('correct')));

// const ifItCorrect =
//   theAnswer === question.get('correct')
//     ? console.log(question.get(true))
//     : console.log(question.get(false));

// const isItCorrect = function() {

// }

// const properties = Object.keys(restaurant.openingHours);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// const values = Object.values(restaurant.openingHours);
// console.log(values);

// //Rest pattern and Parameters &&&&&&&&&&&&&&&&&&&
// restaurant.orderPizza('mrushroom', 'egg', 'basil', 'cheese');

// const add = function (...number) {
//   let result = 0;
//   for (let i = 0; i < number.length; i++) {
//     result += number[i];
//   }
//   return result;
// };
// console.log(add(2, 3));
// console.log(add(5, 3, 7, 2));
// console.log(add(8, 2, 5, 3, 2, 1, 4));

// // Spread Operator &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// // realworld example
// const ingredients = [
//   // prompt("Let's make pasta!'Ingrediant 1 ?"),
//   // prompt('Ingrediant 2?'),
//   // prompt('Ingrediant 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// const arr = [7, 8, 9];
// const newArr = [1, 2, 3, ...arr];
// console.log(newArr);

// //Objects

// const newRestuarant = { foundedIn: 1993, ...restaurant, founder: 'Jimmy' };
// console.log(newRestuarant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'MimiMai';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// //copy array

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //join 2 array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const myName = 'Mai';
// console.log(...myName);

// Destructured Obj &&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// console.log(this.name); // error
// console.log(restaurant.starterMenu);

// restaurant.orderDelivery({
//   time: '22:00',
//   address: 'chinatown',
//   indexMain: 2,
//   indexStarter: 2,
// });

// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// // const { fri } = openingHours;
// // console.log(fri);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 24, c: 25 };
// ({ a, b } = obj);
// console.log(a, b);

//Destructured Array&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// let [first, , third] = restaurant.categories;
// console.log(first, third);

// // switching variable
// // const newSwitch = first;
// // first = third;
// // third = newSwitch;
// // console.log(first, third);

// [first, third] = [third, first];
// console.log(first, third);

// const arr = [2, 3, 4, 5, 6];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// const nested = [1, 2, 3, [4, 5]];
// const [i, , , [k, l]] = nested;
// console.log(i, k, l);

// // Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);s

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Challenge #1&&&&&&&&&&&&&&

// Coding Challenge #2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // ---------`1`----------
// // const players1 = game.players[0];
// // const players2 = game.players[1];

// const [players1, players2] = game.players;
// console.log(players1, players2);
// // ---------`2`----------
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // ---------`3`----------
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // ---------`4`----------
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// // ---------`5`----------
// // const { team1, x: draw, team2 } = game.odds;
// // console.log(team1, draw, team2);
// // const oddsPoint = [team1, draw, team2];
// // console.log(oddsPoint);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// // ---------`6`----------
// console.log('-------6-----');
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // const whoScored = function (numberPlayer) {
// //   for (let i = 0; i < numberPlayer.length; i++) {
// //     console.log(`goal ${i + 1} : ${numberPlayer[i]}`);
// //   }
// // };

// // whoScored(game.scored);
// //-------7------
// console.log('-------7-----');
// // const theWinner = function () {
// //   if (team1 > team2) {
// //     console.log(`${game.team2} is more likely to win`);
// //   } else {
// //     console.log(`${game.team1} is more likely to win`);
// //   }
// // };
// // theWinner();

// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team2 < team1 && console.log(`Team 2 is more likely to win`);
// //------BONUS--------
// /*
// Let's continue with our football betting app!
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number
// (Example: "Goal 1: Lewandowski")

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages,
//    you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties,
// // and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// GOOD LUCK 😀
// */
// console.log('------Bonus------1');
// for (const [x, playerWhoScored] of game.scored.entries()) {
//   console.log(`Goal ${x + 1}: ${playerWhoScored}`);
// }
// console.log('------Bonus------2');
// let oddsaverage = 0;
// let oddsPoint = Object.values(game.odds);
// for (const point of oddsPoint) oddsaverage += point;
// oddsaverage /= oddsPoint.length;
// console.log(oddsaverage);

// console.log('------Bonus------3');

// const entriesOdds = Object.entries(game.odds);
// for (const [team, odds] of entriesOdds) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odds}`);
// }

// console.log('------Bonus------4');
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);
// //--------------------------------DONE Challenge 1 ---------------------------------------//

//---------------------Challenge 3-------------------------------------------------
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

const sizeGameEvents = gameEvents.size;
console.log(sizeGameEvents);
console.log(
  `An event happened, on average, every ${90 / sizeGameEvents} minutes`
);

for (const [time, event] of gameEvents) {
  time <= 45
    ? console.log(`[FIRST HALF]${time}: ${event}`)
    : console.log(`[SECOND HALF]${time}: ${event}`);
}

//---------------------DONE Challenge 3-------------------------------------------------
