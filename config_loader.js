let addon_storage = localStorage["bs-durchschnitt"];

// In the case that this is the first use of the Add-On.
if (!addon_storage) {
	addon_storage = new Object();
	localStorage["bs-durchschnitt"] = addon_storage;
}

// A function to get the current config
function getConfig() {
	if (!window.location.href.includes("grades")) 
		throw ERRORS["CannotGetConfig"];
	
	
	let spans = document.querySelectorAll("div.card-body>h1>span>span");
	let student_name = spans[0].innerText;
	// removing all " " (spaces) and "\n" (line breaks).
	let student_class = cleanString(spans[1].innerText);
	
	let halfyear_small = document.querySelector("div.card-body>h1>small");
	let student_halfyear = halfyear_small.innerText;
	
	
	let student_config = objectTree([	
										student_name, 
										student_class, 
										student_halfyear
									], addon_storage);
}