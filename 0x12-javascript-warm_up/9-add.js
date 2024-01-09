#!/usr/bin/node

function add (a, b) {
  return (a + b);
}
const args = process.argv;

const A = Number(args[2]);
const B = Number(args[3]);

if (typeof A === 'number' && typeof B === 'number') {
  console.log(add(A, B));
} else {
  console.log('NaN');
}
