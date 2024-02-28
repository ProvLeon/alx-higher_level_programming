/* global $ */
/**
 * This script fetches and lists the title for all movies from the URL: https://swapi-api.alx-tools.com/api/films/?format=json
 * and displays them in the HTML tag UL#list_movies using the JQuery API.
 */
$(document).ready(function () {
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json',

    function (data) {
      const moviesList = data.results.map(movie => `<li>${movie.title}</li>`).join('');

      $('#list_movies').append(moviesList);
    });
});
