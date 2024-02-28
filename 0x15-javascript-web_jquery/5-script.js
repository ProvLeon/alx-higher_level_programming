/* global $ */
/**
 * This script adds a <li> element to a list within UL.my_list when the user clicks on the tag DIV#add_item.
 * It utilizes the JQuery API for DOM manipulation.
 */
$(document).ready(function () {
  $('#add_item').click(function () {
    $('.my_list').append('<li>Item</li>');
  });
});
