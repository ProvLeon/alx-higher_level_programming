/* global $ */
// 2-script.js
// a query to update the text color of the HTML tag HEADER to red (#FF0000)
$(document).ready(function () {
  $('#red_header').click(function () {
    $('header').css('color', '#FF0000');
  });
});
