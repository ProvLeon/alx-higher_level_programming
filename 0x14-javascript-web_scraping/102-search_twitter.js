#!/usr/bin/node
// const base64 = require('base-64');
// const request = require('request');
// const utf8 = require('utf8');

// const promise = new Promise(function (resolve, reject) {
//   const token = utf8.decode(base64.encode(`${process.argv[2]}:${process.argv[3]}`));
//   const options = {
//     url: 'https://api.twitter.com/oauth2/token',
//     headers: {
//       Authorization: `Basic ${token}`,
//       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//     },
//     form: {
//       grant_type: 'client_credentials'
//     }
//   };
//   request.post(options, function (error, response, body) {
//     if (!error) {
//       resolve(JSON.parse(body).access_token);
//     }
//   });
// });

// promise.then(
//   result => search(result),
//   error => console.log(error)
// );

// function search (bearer) {
//   const options = {
//     url: 'https://api.twitter.com/1.1/search/tweets.json',
//     headers: {
//       Authorization: `Bearer ${bearer}`
//     },
//     qs: {
//       q: process.argv[4],
//       count: '5'
//     }
//   };
//   request.get(options, function (error, response, body) {
//     if (!error) {
//       const tweets = JSON.parse(body).statuses;
//       tweets.forEach((t) => console.log(`[${t.id}] ${t.text} by ${t.user.name}`));
//     }
//   });
// }
const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const characters = JSON.parse(body).characters;
    printCharacters(characters, 0);
  } else {
    console.error('Error:', error);
  }
});

function printCharacters (characters, index) {
  if (index < characters.length) {
    request(characters[index], function (error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(JSON.parse(body).name);
        printCharacters(characters, index + 1);
      } else {
        console.error('Error:', error);
      }
    });
  }
}
