#!/usr/bin/node
/* Script that prints the second largest number in the list of arguments
   If there are no arguments, print 0.
*/


if (process.argv.length <= 3) {
  console.log(0);
} else {
  const args = process.argv.map(Number)
    .slice(2, process.argv.length)
    .sort((a, b) => a - b);
  console.log(args[args.length - 2]);
}
