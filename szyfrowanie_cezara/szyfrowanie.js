document.addEventListener("DOMContentLoaded", function(e) {

  function rot13(str) {
    let newString = [];

    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
        newString.push(String.charCodeAt(i));
      } else if (str.charCodeAt(i) > 77) {
        newString.push(String.fromCharCode(str.charCodeAt(i) - 13));
      } else {
        newString.push(String.fromCharCode(str.charCodeAt(i) + 13));
      }
    }
    return newString.join("");
  }

  document.getElementById('encipher').addEventListener("click", function(e) {
    var newString = document.getElementById("first_param").value;
    alert("Zaszyfrowany tekst: " + rot13(newString));
  }); 

});

