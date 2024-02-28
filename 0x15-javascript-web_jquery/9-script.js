/* global $ */
/**
 * This script fetches the translation of "hello" from https://hellosalut.stefanbohacek.dev/?lang=fr
 * and displays it in the HTML tag DIV#hello using the JQuery API.
 */
$(document).ready(function () {
  $.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function (data) {
    $('#hello').text(data.hello);
  });
});
