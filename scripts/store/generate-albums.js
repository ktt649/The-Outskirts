for (var i = 0; i < albums.length; i++) {

	// generate html for the albums
	document.writeln("<div class=albums>");

	// generate html for the image inside each box and the product description
	document.write("<img src='");
	document.write(albums[i].photoLocation);
	document.write("' alt='");
	document.write(albums[i].description);
	document.writeln("'>");

	// generate html for the model
	document.writeln("<div class=albums-model>");	
	document.writeln(albums[i].model);
	document.writeln("</div>");

	// generate html for the price
	document.writeln("<div class=albums-price>");	
	document.writeln(albums[i].price);
	document.writeln("<p>");
	document.writeln("<button class='buyAlbums' type='submit' id=" + i +">Add to Cart</button>");	
	document.writeln("</p>");
	document.writeln("</div>");

	// generate html to close the albums div
	document.writeln("</div>");
}
