/* global $ */
/**
 * This script adds the class 'red' to the <header> element when the user clicks on the DIV#red_header.
 * It utilizes the JQuery API for DOM manipulation.
 */
$(document).ready(function () {
  $('#red_header').click(function () {
    $('header').addClass('red');
  });
});
