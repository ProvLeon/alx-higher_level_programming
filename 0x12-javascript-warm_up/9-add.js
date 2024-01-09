#!/usr/bin/node

function add (a, b) {
  return (a + b);
}

const A = Number(process.argv[2]);
const B = Number(process.argv[3]);

if (typeof A === 'number' && typeof B === 'number') {
  console.log(add(A, B));
} else {
  console.log('NaN');
}
