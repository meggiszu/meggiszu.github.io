document.addEventListener("DOMContentLoaded", function(e) {
  function calculate(a, b, c) {
    //document.write("Parametry równania: <br />");
    //document.write("a = "+ a + ", b = " + b +", c = " + c +"  <br />");
 
    if (a == 0) {
      var an = "To nie jest równanie kwadratowe: a = 0!"
      document.getElementById("demo").innerHTML = an
   
    } else {
      var delta = b * b - 4 * a * c

      if (delta < 0) {
        var dn1 = "Delta < 0. To równanie nie ma rozwiązania w zbiorze liczb rzeczywistych!"
        document.getElementById("demo").innerHTML = dn1
        
      } else if (delta == 0) {
        var wynik = - b / 2 * a;
        var wn = "Rozwiązanie: x = " + wynik + ""
        document.getElementById("demo").innerHTML = wn 
      } else {
        var wynik1 = (- b + Math.sqrt(delta)) / 2 * a;
        var wn1 = "Rozwiązanie: x1 = " + wynik1.toFixed(2);
               
        var wynik2 = (- b - Math.sqrt(delta)) / 2 * a;
        var wn2 = "Rozwiązanie: x2 = " + wynik1.toFixed(2);
        document.getElementById("demo").innerHTML = wn1 + wn2;
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

