function myFunction() {
	var x = document.getElementById("menu_bar");
	if (x.className === "menu_bar") {
	  x.className += " responsive";
	} else {
	  x.className = "menu_bar";
	}
  }