'use strict';

$(document).ready(function () {

  $('.open-select-box').on('click', event => {

    $(event.currentTarget).children().removeClass('hidden')
  })

  $('.password').on('change', event => {

    $(event.currentTarget).parent().find('p').removeClass('hidden')

  })

  
});