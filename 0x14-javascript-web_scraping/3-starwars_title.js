#!/usr/bin/node
// const request = require('request');
// const url = 'http://swapi.co/api/films/' + process.argv[2];
// request(url, function (error, response, body) {
//   console.log(error || JSON.parse(body).title);
// });
const request = require('request');
const movieId = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/' + movieId;

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const movie = JSON.parse(body);
    console.log(movie.title);
  } else {
    console.error('Error:', error);
  }
});
