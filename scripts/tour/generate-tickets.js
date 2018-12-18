for (var i = 0; i < tickets.length; i++) {

	document.writeln("<tr>");
	document.writeln("<td>");
	document.write(tickets[i].model);
	document.writeln("</td>");
	document.writeln("<td>");
	document.writeln(tickets[i].city);
	document.writeln("</td>");
	document.writeln("<td>");
	document.writeln("$" + tickets[i].price);
	document.writeln("</td>");
					
		document.writeln("<td>");		
					document.writeln("<button class='buyTickets' type='submit' id=" + i +">Add to Cart</button>");	
		document.writeln("</td>");
document.writeln("</tr>");
}