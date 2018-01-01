document.addEventListener("DOMContentLoaded", function(e) {
  var inputs = Array.from(document.getElementsByTagName("input"))

  inputs.forEach(function(el, i) {
    el.addEventListener('click', function(e) {
      document.getElementById("demo").setAttribute('style', "display: none")
    });
  })

  function calculate(a, b, c) {
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
        var wn1 = "Rozwiązanie: x<sub>1</sub> = " + wynik1.toFixed(0);
               
        var wynik2 = (- b - Math.sqrt(delta)) / 2 * a;
        var wn2 = "; x<sub>2</sub> = " + wynik2.toFixed(0);
        document.getElementById("demo").innerHTML = wn1 + wn2;
      }
      document.getElementById("demo").setAttribute('style', "display: block")
    }
  }

  document.getElementById('calculate').addEventListener("click", function(e) {
    var a = document.getElementById("a_param").value;
    var b = document.getElementById("b_param").value;
    var c = document.getElementById("c_param").value;

    calculate(a, b, c);
  })
});

