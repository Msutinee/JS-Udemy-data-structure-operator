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
};
// console.log(this.name); // error
// console.log(restaurant.starterMenu);

restaurant.orderDelivery({
  time: '22:00',
  address: 'chinatown',
  indexMain: 2,
  indexStarter: 2,
});

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

// const { fri } = openingHours;
// console.log(fri);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

let a = 111;
let b = 999;
const obj = { a: 23, b: 24, c: 25 };
({ a, b } = obj);
console.log(a, b);

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
