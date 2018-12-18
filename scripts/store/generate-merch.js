for (var i = 0; i < merch.length; i++) {

	// generate html for the merch
	document.writeln("<div class=merch>");

	// generate html for the image inside each box and the product description
	document.write("<img src='");
	document.write(merch[i].photoLocation);
	document.write("' alt='");
	document.write(merch[i].description);
	document.writeln("'>");

	// generate html for the model
	document.writeln("<div class=merch-model>");	
	document.writeln(merch[i].model);
	document.writeln("</div>");

	// generate html for the price
	document.writeln("<div class=merch-price>");	
	document.writeln(merch[i].price);
	document.writeln("<p>");
	document.writeln("<button class='buyMerch' type='submit' id=" + i +">Add to Cart</button>");	
	document.writeln("</p>");
	document.writeln("</div>");

	// generate html to close the merch div
	document.writeln("</div>");
}
