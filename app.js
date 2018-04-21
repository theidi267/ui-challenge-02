'use strict';

$(document).ready(function () {

  $('.select').on('click', event => {

    $(event.currentTarget).siblings().removeClass('hidden');

    console.log('.select');
  });
});