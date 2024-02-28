/* global $ */
/**
 * This script adds, removes, and clears LI elements from a list upon user interaction.
 * - Adds a new element <li>Item</li> to UL.my_list when DIV#add_item is clicked.
 * - Removes the last element from the list when DIV#remove_item is clicked.
 * - Clears all elements from the list when DIV#clear_list is clicked.
 * Utilizes the JQuery API for DOM manipulation.
 */
$(document).ready(function () {
  $('#add_item').click(function () {
    $('.my_list').append('<li>Item</li>');
  });

  $('#remove_item').click(function () {
    $('.my_list li:last').remove();
  });

  $('#clear_list').click(function () {
    $('.my_list').empty();
  });
});
