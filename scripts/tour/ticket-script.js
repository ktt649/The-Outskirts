var ticketsToBuy = [];


function init() {
	var buyTicketsButton = document.getElementsByClassName("buyTickets");
	    	for (let i = 0; i < buyTicketsButton.length; i++) {
	    		buyTicketsButton[i].addEventListener("click", function(){
	    			addToCart_tickets(buyTicketsButton[i].id);
	    		});   
	   	 }
}

function addToCart_tickets(id) {
	ticketsToBuy = JSON.parse(sessionStorage.getItem("tickets_cart"));
	
	if (ticketsToBuy == null){
		ticketsToBuy = [];
	}
	
	ticketsToBuy.push(tickets[id]);
	
	sessionStorage.setItem("tickets_cart", JSON.stringify(ticketsToBuy));
}


	