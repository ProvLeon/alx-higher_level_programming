#!/usr/bin/node
// script that concats 2 files.

const args = process.argv.slice(2);
const fs = require('fs');

// Read file 1 with UTF-8 encoding
const file1 = fs.readFileSync(args[0], 'utf8');
// Read file 2 with UTF-8 encoding
const file2 = fs.readFileSync(args[1], 'utf8');

// Concatenate and write to file
fs.writeFileSync(args[2], file1 + file2);
