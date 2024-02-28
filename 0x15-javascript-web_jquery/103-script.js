/* global $ */
/**
 * This script fetches and prints how to say “Hello” depending on the language.
 * It uses the API service from https://www.fourtonfish.com/hellosalut/hello/
 * to get the translation based on the language code entered by the user in the INPUT#language_code.
 * The translation is fetched when the user clicks on INPUT#btn_translate or presses ENTER when the focus is on INPUT#language_code.
 * The translation of “Hello” is displayed in the HTML tag DIV#hello.
 * Utilizes the JQuery API for DOM manipulation and AJAX requests.
 * This script is designed to work when imported from the <head> tag.
 */
$(document).ready(function () {
  function getTranslation() {
    const language = $('#language_code').val();
    const url = `https://www.fourtonfish.com/hellosalut/?lang=${language}`;
    $.get(url, function (data) {
      $('#hello').text(data.hello);
    });
  }

  $('#btn_translate').click(getTranslation);

  $('#language_code').keypress(function (e) {
    if (e.which == 13) { // Enter key pressed
      getTranslation();
    }
  });
});

