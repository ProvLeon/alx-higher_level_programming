/* global $ */
/**
 * This script updates the text of the <header> element to "New Header!!!"
 * when the user clicks on the DIV#update_header. It utilizes the JQuery API
 * for DOM manipulation.
 */
$(document).ready(function () {
  $('#update_header').click(function () {
    $('header').text('New Header!!!');
  });
});
