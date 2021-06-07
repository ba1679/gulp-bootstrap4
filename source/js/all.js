// validate
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.getElementsByClassName('needs-validation');
    console.log(forms);
    // Loop over them and prevent submission
    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// 修正Modal切換body class
$('a[data-dismiss="modal"][data-toggle="modal"]').on('click',function(){
  let target = $(this).data('target');
  $(target).on('shown.bs.modal',function(){
    $('body').addClass('modal-open')
  })
})
