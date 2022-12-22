(function () {
  var input = "",
    correct = "1234"; // pin code

  var dots = document.querySelectorAll(".dot"),
    numbers = document.querySelectorAll(".number");
  dots = Array.prototype.slice.call(dots);
  numbers = Array.prototype.slice.call(numbers);

  numbers.forEach(function (number, index) {
    number.addEventListener("click", function () {
      number.className += " grow";
      input += index + 1;
      dots[input.length - 1].className += " active";
      if (input.length >= 4) {
        if (input !== correct) {
          dots.forEach(function (dot, index) {
            dot.className += " wrong";
          });
          document.body.className += " wrong";
        } else {
          dots.forEach(function (dot, index) {
            dot.className += " correct";
          });
          document.body.className += " correct";
          document.location.href = "./journal3.html";
        }
        setTimeout(function () {
          dots.forEach(function (dot, index) {
            dot.className = "dot";
          });
          input = "";
        }, 900);
        setTimeout(function () {
          document.body.className = "";
        }, 1000);
      }
      setTimeout(function () {
        number.className = "number";
      }, 1000);
    });
  });
})();