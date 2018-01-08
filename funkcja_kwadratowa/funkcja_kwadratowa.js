document.addEventListener("DOMContentLoaded", function(e) {
  var inputs = Array.from(document.getElementsByTagName("input"))
  var calculateButton = document.getElementById('calculate')
  var inputsState = {
    "a_param": false,
    "b_param": false, 
    "c_param": false
  }

 
  inputs.forEach(function(el, i) {
    el.addEventListener('click', function(e) {
      var input = e.currentTarget
      if (!isInputValid(input)) {
        input.value = '';
        input.style = '';
      }

      document.getElementById("demo").setAttribute('style', "display: none")
    });

    el.addEventListener("keyup", function(e) {
      var input = e.currentTarget;
      updateInput(input);
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

  function isInputValid(input) {
    const value = input.value;
    return !!value.match(/^\-?(?:0|[1-9][0-9]*)$/)
  }

  function areInputsValid() {
    var v = true

    inputs.forEach(function(input, i) {
      v = inputsState[input.id]	&& v
    })

    return v
  }

  //sprawdzam ze podane wartości są poprawne//
  function updateInput(input) {
		const id = input.getAttribute("id")
  	if (!isInputValid(input)) {
      inputsState[id] = false

			input.style = "border: 1px solid #af0903;background-color: #f28d8a; color:#af0903"
			calculateButton.setAttribute("disabled", null)
			calculateButton.style = "background-color: grey"
  	} else {
  		inputsState[id] = true

			if (areInputsValid()) {
  			calculateButton.style = ''
  		  calculateButton.removeAttribute("disabled")
			}

  		input.style = "" //Czyszcze style//
  	}
  };

  
  calculateButton.addEventListener("click", function(e) {
  	var a = document.getElementById("a_param");
  	var b = document.getElementById("b_param");
  	var c = document.getElementById("c_param");
  
  	
  	calculate(a.value, b.value, c.value);
  	
  })
});

