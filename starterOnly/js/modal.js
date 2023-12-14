function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
		
	} else {
		x.className = "topnav";
	}
}




// launch modal form
function launchModal() {
	const modalbg = document.querySelector(".bground");
	modalbg.style.display = "block";
}

// close modal form
function closeModal() {
	const modalbg = document.querySelector(".bground");
	modalbg.style.display = "none";
	

}
//fonction point d'entrée de l'application
function main() {
	init_event();
}

//Initialisation des événements de la modal
function init_event()   {
	const modalBtn = document.querySelectorAll(".modal-btn");
	const modalCloseBtn = document.querySelectorAll(".close");

	// launch modal event
	modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

	// close modal event
	modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

}

main();
//validation inscription
const submit = document.querySelectorAll(".btn-submit");
const confirm = document.querySelectorAll(".confim-modal")
if(submit=== confirm){
	modalbg.style.display = "block";
}



