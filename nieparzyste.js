
function isOdd(num) {
  if(num %2!=0) return true;
  return false;
}

function findOddNumbers(limit) {
	var a = []
	var n=0

	while (n<=limit) {
		if (isOdd(n)) {
	  	a.push(n);
  	}
  	n++;
	}
	return a;
}

document.addEventListener("DOMContentLoaded", function(e) {
	var limit = 1000
	var numbers = findOddNumbers(limit)
	var str = ""
	var zbior = document.getElementById("zbior") 
	for(var z = 0; z<limit/2; z++) {
		str+="<span>" + numbers[z] + " </span>";
	}

	zbior.innerHTML = str


	

});