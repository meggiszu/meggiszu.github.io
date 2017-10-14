document.addEventListener("DOMContentLoaded", function(e) {
  function calculate(a, b, c) {
    document.write("Parametry równania: <br />");
    document.write("a = "+ a + ", b = " + b +", c = " + c +"  <br />");
 
    if (a == 0) {
      document.write("To nie jest równanie kwadratowe: a = 0!");
    } else {
      var delta = b * b - 4 * a * c

      if (delta < 0) {
        document.write ("Delta < 0 <br/>");
        document.write ("To równanie nie ma rozwiązania w zbiorze liczb rzeczywistych!");
      } else if (delta == 0) {
        var wynik = - b / 2 * a;
        document.write("Rozwiązanie: x = " + wynik + "");
      } else {
        wynik1 = (- b + Math.sqrt(delta)) / 2 * a;
        document.write ("Rozwiązanie: x1 = " + wynik1.toFixed(2));
        wynik2 = (- b - Math.sqrt(delta)) / 2 * a;
        document.write(",  x2 = " + wynik2.toFixed(2));
      }

    }
  }

  document.getElementById('calculate').addEventListener("click", function(e) {
    var a = document.getElementById("a_param").value;
    var b = document.getElementById("b_param").value;
    var c = document.getElementById("c_param").value;

    calculate(a, b, c);
  })
});

