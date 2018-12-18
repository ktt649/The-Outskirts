var total = 0;
var albumCart = get_album_cart();
var merchCart = get_merch_cart();
var ticketCart = get_ticket_cart();

var carts = [albumCart, merchCart, ticketCart];

document.write("<h1> Your Cart: </h1> ")

for (var c = 0; c < carts.length; c++){
	var itemsCheckOut = carts[c]

	for (var i = 0; i < itemsCheckOut.length; i++) {
		
		// generate html for the feature box
		document.writeln("<div class=feature-box>");


		document.writeln("<div class= item-box>");
		// generate html for the image inside each box and the product description
		document.write("<img src='");
		document.write(itemsCheckOut[i].photoLocation);
		document.write("' alt='");
		document.write(itemsCheckOut[i].description);
		document.writeln("'>");
		document.writeln("</div>");

		// generate html for the model
		document.writeln("<div class=model-box>");	
		document.writeln(itemsCheckOut[i].model);
		if(itemsCheckOut[i].city){
			document.writeln("<br>")
			document.writeln(itemsCheckOut[i].city);
		}
		document.writeln("</div>");

		// generate html for the price
		document.writeln("<div class=price-box>");	
		document.writeln("$" + itemsCheckOut[i].price);
		total += parseFloat(itemsCheckOut[i].price);
		
		document.writeln("<br>");
		//generate remove item button
		document.writeln('<button class="deleteButton deleteButton'+ c +'" type="button">Remove</button>');

		//end price-box
		document.writeln("</div>");

		// generate html to close the feature-box div
		document.writeln("</div>");
	}	
}
	var removeAlbum = document.getElementsByClassName("deleteButton0");
				for( let i = 0; i < removeAlbum.length; i++ ) {
					removeAlbum[i].addEventListener("click", function(){removeItem(i, "album_cart")});
				}

	var removeMerch = document.getElementsByClassName("deleteButton1");
				for( let i = 0; i < removeMerch.length; i++ ) {
					removeMerch[i].addEventListener("click", function(){removeItem(i, "merch_cart")});
				}	
	var removeTicket = document.getElementsByClassName("deleteButton2");
				for( let i = 0; i < removeTicket.length; i++ ) {
					removeTicket[i].addEventListener("click", function(){removeItem(i, "tickets_cart")});
				}				


		//generate html for grand total
		document.writeln("<div class=feature-box>");
		document.writeln("<div class= total-text-box>");
		document.write("<h2>Grand Total:</h2> ");
		//end total-text-box
		document.writeln("</div>");

		document.writeln("<div id = price-total-box>");
		document.write("<h2>" + "$" + total.toFixed(2) + "</h2>");
		//end price-total-box
		document.writeln("</div>");
		//end feature-box
		document.writeln("</div>");

		document.writeln('<div class="clearboth"></div>');

	

function removeItem( item, cart ) {
	var itemsCheckOut = cart;
	if (cart === "album_cart"){
			itemsCheckOut = get_album_cart();
		}
		else if( cart === "merch_cart"){
			itemsCheckOut = get_merch_cart();
		}
		else{
			itemsCheckOut = get_ticket_cart();
		}
	itemsCheckOut.splice( item, 1 );
	sessionStorage.setItem(cart, JSON.stringify(itemsCheckOut) );
	location.reload();
	}  

//Function to grab items from cart in JS object form
function get_album_cart(){
	var cart;

	if( sessionStorage.album_cart){
		cart = JSON.parse(sessionStorage.getItem("album_cart"));
	}
	else{
		cart = [];
	}

	return cart;
}

//Function to grab items from cart in JS object form
function get_merch_cart(){
	var cart;

	if( sessionStorage.merch_cart){
		cart = JSON.parse(sessionStorage.getItem("merch_cart"));
	}
	else{
		cart = [];
	}

	return cart;
}

//Function to grab items from cart in JS object form
function get_ticket_cart(){
	var cart;

	if( sessionStorage.tickets_cart){
		cart = JSON.parse(sessionStorage.getItem("tickets_cart"));
	}
	else{
		cart = [];
	}

	return cart;
}
