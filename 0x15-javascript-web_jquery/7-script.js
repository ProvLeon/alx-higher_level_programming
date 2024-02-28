/* global $ */
/**
 * This script fetches the character name from the URL: https://swapi-api.alx-tools.com/api/people/5/?format=json
 * and displays it in the HTML tag DIV#character using the JQuery API.
 */
$(document).ready(function () {
  $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function (data) {
    $('#character').text(data.name);
  });
});
