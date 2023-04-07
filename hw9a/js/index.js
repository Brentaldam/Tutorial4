//Circle
console.log(` `);
const { circumference, area } = require('./circle');

const r = 3;

console.log(`The circumference of a circle of radius ${r} is ${circumference(r)}.`);
console.log(`It's area is ${area(r)}.`);
console.log(` `);

//Accounting
const { Account } = require('./accounting');

const jA = new Account('Jeff');

jA.credit(100);
jA.credit(50);
jA.describe();
console.log(` `);

//Moment
const moment = require('moment');

console.log(moment().format('dddd, MMMM Do YYYY'));

const d1 = moment('1976-11-26');
const d2 = moment();
console.log(d2.diff(d1, 'years')+(" years ago"));
console.log(` `);