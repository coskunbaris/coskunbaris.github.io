$(document).ready(function() {
  $(".js-datepicker").flatpickr();

  var maskNumeral = new Cleave(".js-mask-numeral", {
    numeral: true
  });

  $(".js-getTours").on("click", function(e) {
    e.preventDefault();

    $.ajax({
      method: "GET",
      url: "result.html",
      success: function(data) {
        console.log(data);
        $("body").append(data);
      }
    });
  });
});
