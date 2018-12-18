var albumsToBuy = [];
var merchToBuy = [];

function init() {
	var buyMerchButton = document.getElementsByClassName("buyMerch");
	    for (let i = 0; i < buyMerchButton.length; i++) {
	    	buyMerchButton[i].addEventListener("click", function(){
	    		addToCart_merch(buyMerchButton[i].id);
	    	});    
	    }
	  var buyAlbumButton = document.getElementsByClassName("buyAlbums");
	    for (let i = 0; i < buyAlbumButton.length; i++) {
	    	buyAlbumButton[i].addEventListener("click", function(){
	    		addToCart_albums(buyAlbumButton[i].id);
	    	});    
	    }
}
function addToCart_albums(id) {
	albumsToBuy = JSON.parse(sessionStorage.getItem("album_cart")); //get session storage in JS-object form

	//check if list is empty, if it is specify that it is empty array.
	if (albumsToBuy == null){
		albumsToBuy = [];
	}
	// TODO: push the selected item (albums[id]) into the itemsToBuy variable
	albumsToBuy.push(albums[id]); //get information of item from albums array
	
	// TODO: set the item in the session storage. 
	sessionStorage.setItem("album_cart", JSON.stringify(albumsToBuy)); //store json object in session storage
}

function addToCart_merch(id) {
	merchToBuy = JSON.parse(sessionStorage.getItem("merch_cart")); //get session storage in JS-object form

	//check if list is empty, if it is specify that it is empty array.
	if (merchToBuy == null){
		merchToBuy = [];
	}
	// TODO: push the selected item (merch[id]) into the itemsToBuy variable
	merchToBuy.push(merch[id]); //get information of item from merch array
	
	// TODO: set the item in the session storage. 
	sessionStorage.setItem("merch_cart", JSON.stringify(merchToBuy)); //store json object in session storage
}


