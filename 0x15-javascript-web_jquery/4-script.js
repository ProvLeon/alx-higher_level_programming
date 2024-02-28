/* global $ */
/**
 * This script toggles the class of the <header> element between "red" and "green"
 * when the user clicks on the DIV#toggle_header. It ensures that the <header>
 * element always has exactly one of these classes, never both simultaneously,
 * and never none. It utilizes the JQuery API for DOM manipulation.
 */
$(document).ready(function () {
  $('#toggle_header').click(function () {
    $('header').toggleClass('red green');
  });
});
