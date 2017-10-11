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

	var matrix = generateTable()
	var container = ""

	for(var y=0; y<8; y++) {
		var row = matrix[y]
		var row_html = "<div class='row'>"

		for(var x=0;x<8;x++) {
			var el = row[x]
		  var el_html;

			if (el) {
				el_html = "<div class='boxW'></div>"
			} else {
				el_html = "<div class='boxB'></div>"
			}
			row_html += el_html
		}

		row_html += '<div style="clear:both;"></div></div>'
		container += row_html
	}

	document.getElementById("szachownica").innerHTML = container
});