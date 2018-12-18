window.onload = function(){
	//CONFIRM PURCHASE BUTTON
	document.getElementById("confirm").addEventListener("click", function(){
		displayForm();	
	});

	function displayForm(){
		document.getElementById("form").style.display = "block";
	}

	//ERASE DEFAULT VALUES IN INPUT BOXES WHEN CLICKED
	var inputs = document.getElementsByTagName('input');

	for(var i = 0; i < inputs.length; i++) {
	    if(inputs[i].type.toLowerCase() == 'text') {
	        inputs[i].addEventListener("click", function(){
	        	this.value = "";
	        });
	    }
	}

		document.getElementById("placeOrder").addEventListener("click", function(){

					//Validate Card
					var card = "";

					var radios = document.getElementsByName('cardType');

					for (var i = 0; i < radios.length; i++)
					{
						if (radios[i].checked){
							card = radios[i].value;
						}
					}
					var cardNumber = document.getElementById("cardNumber").value;
					validateCard(cardNumber, card);
			    });

		//CONTINUE SHOPPING BUTTON
		document.getElementsByClassName("continueShopping")[0].addEventListener("click", function(){location.href = "store.html";})
	};


function validateCard(number, card) {
	// https://www.w3schools.com/jsref/jsref_obj_regexp.asp
	
	if (card == "") {
		alert("Credit card type not specified");
		return;
	}

	var regexp = "";
	if (card == "MasterCard") {
		regexp = /^5[1-5][0-9]{13}$/; 	// mastercard regexp
	}

	//FOR VISA VALIDATION
	if ( card == "Visa"){
		regexp = /^4[0-9]{12}(?:[0-9]{3})?(?:[0-9]{3})?$/; //visas regexp
	}

	// TODO: support Visa credit cards validation

	if (number.match(regexp)) {
		alert("Your Order Has Shipped!");
	} else {
		alert(number + " is NOT a valid " + card + " numbers");
	}

}
