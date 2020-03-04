// business logic
var factorial = function(number) {
  var total = 1;
  for (i = 1; i <= number; i++) {
    total = total * i;
  };
  return total;
};

// user interface logic
$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = factorial(number);
    $(".output").text(result);
    $("#result").show();
  });
});