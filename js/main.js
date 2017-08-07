$(document).ready(function() {
  $('body').on('click', '.c-signup', function(e) {
    e.preventDefault();
    $('.c-form').addClass('c-form-active');
  });
});
