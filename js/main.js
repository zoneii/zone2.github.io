$(document).ready(function() {
  $('body').on('click', '.c-signup', function(e) {
    e.preventDefault();
    $('.c-form').addClass('c-form-active');
  });


  $('#emailForm').submit(function(event) {
      event.preventDefault();

      var formEl = $(this);
      var submitButton = $('button', formEl);

      $.ajax({
        type: 'POST',
        url: formEl.prop('action'),
        accept: {
          javascript: 'application/javascript'
        },
        data: formEl.serialize(),
        beforeSend: function() {

        }
        }).done(function(data) {
          $('#submitButton').html("WE'LL BE IN TOUCH").addClass('submitted')
        });
    });
});
