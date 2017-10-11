document.addEventListener("DOMContentLoaded", function(e) {
	function generateTable() {
		var limit = 8;
		var matrix = []
		for(var y=1; y<=limit; y++) {
			var row = []
			var color = y % 2
			for(var x=1; x<=limit; x++) {
				var el;
				if (color) {
					el = x % 2
				} else {
					el = (x+1) % 2
				}
				row.push(el)
			}
			matrix.push(row)
		}
		return matrix;
	}

	console.log('')
});