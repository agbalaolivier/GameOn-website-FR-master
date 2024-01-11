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
	const confirmModal = document.querySelector('.confirm-modal');
    confirmModal.style.display = 'none';
	const formulaire = document.querySelector('#formulaire');
	formulaire.style.display = 'display';
	formulaire.reset();

}
//fonction point d'entrée de l'application
function main() {
	init_event();
}

//Initialisation des événements de la modal
function init_event() {
	const modalBtn = document.querySelectorAll(".modal-btn");
	const modalCloseBtn = document.querySelectorAll(".close");
	const submitBtn = document.getElementById("submitBtn");
	const submitBtnBtn = document.getElementById("submitBtnBtn");
	
	
	
	


	// launch modal event
	modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

	// close modal event
	modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

	// submit modal

	submitBtn.addEventListener("click", function (event) {
		event.preventDefault();
		if (checkForm()) {
			showConfirmModal();
		
		}
	});

}
// Fonction pour afficher le modal de confirmation
function showConfirmModal() {
    modalbg.style.display = 'block';
    confirmModal.style.display = 'block';
}
//Fonction pour fermer le modal de confirmation
function closeConfirmationModal() {
    modalbg.style.display = 'none';
	const confirmModal = document.querySelector('.confirm-modal');
    confirmModal.style.display = 'none';
	const formulaire = document.querySelector('#formulaire');
	formulaire.style.display = 'display';
	formulaire.reset();
}


		



main();

//validation inscription
function validate() {
	if (checkForm()) {
		const confirmModal = document.querySelector('.confirm-modal');
		confirmModal.style.display = 'block';
		const formulaire = document.querySelector('#formulaire');
		formulaire.style.display = 'none';
	}


}
//Fermerture du modal
submitBtnBtn.addEventListener("click", function (event) {
	event.preventDefault();
	if (checkForm()) {
		closeConfirmationModal();
	
	}
	

	});
	






