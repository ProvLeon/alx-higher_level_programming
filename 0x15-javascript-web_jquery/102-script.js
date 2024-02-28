/* global $ */
/**
 * This script fetches and prints how to say “Hello” in different languages.
 * It uses the API service from https://www.fourtonfish.com/hellosalut/hello/
 * to get the translation based on the language code entered by the user in the INPUT#language_code.
 * The translation is fetched when the user clicks on INPUT#btn_translate and displayed in DIV#hello.
 * Utilizes the JQuery API for DOM manipulation and AJAX requests.
 */
$(document).ready(function () {
  $('#btn_translate').click(function () {
    const language = $('#language_code').val();
    const url = `https://www.fourtonfish.com/hellosalut/?lang=${language}`;
    $.get(url, function (data) {
      $('#hello').text(data.hello);
    });
  });
});
