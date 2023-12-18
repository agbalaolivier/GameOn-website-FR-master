// DOM Elements


const formData = document.querySelectorAll(".formData");

//fonction point d'entrée de l'application
function main() {
    init_event();
}

//Initialisation des événements du formulaire
function init_event() {
    
    let inputF=document.getElementById('first');
    inputF.addEventListener('keyup',checkForm);

    let inputL=document.getElementById('last');
    inputL.addEventListener('keyup',checkForm);

    let inputE=document.getElementById('email');
    inputE.addEventListener('keyup',checkForm);

    let inputD=document.getElementById('birthdate');
    inputD.addEventListener('keyup',checkForm);

    let inputQ=document.getElementById('quantity');
    inputQ.addEventListener('keyup',checkForm);

    



    

}

main();



function checkForm() {
    console.log('checkForm');
    if (
        !checkFirstName() 
        || !checkLastName() 
        || !checkEmail() 
        || !checkDate() 
        || !checkQuantity() 
        || !checkLocation()) {
        console.log('Erreur sur le formulaire');
        return false;
    }
    return true;
}

function checkFirstName() {
    let input=document.getElementById('first');
    let value=input.value;
    hideessageError(input);
    if(value=="" || value===null || value.length<=2) {
        showMessageError(input,'Le prénom est incorrect');
        return false;
    }
    return true;
}
function checkLastName() {
    let input=document.getElementById('last');
    let value=input.value;
    hideessageError(input);
    if(value=="" || value===null || value.length<=2) {
        showMessageError(input,'Le nom est incorrect');
        return false;
    }
    return true;
    
}


function showMessageError(input, message) {
    let controle=input.parentElement;
    controle.setAttribute('data-error',message)
    controle.setAttribute('data-error-visible','true')
}
function hideessageError(input) {
    let controle=input.parentElement;
    controle.setAttribute('data-error-visible','false')
}
function checkEmail() {
    let input=document.getElementById('email');
    let value=input.value;
    hideessageError(input);
    if(value=="" || value===null || value.length<=2) {
        showMessageError(input,'adresse email incorrect');
        return false;
    }
    return true
}

function showMessageError(input, message) {
    let controle=input.parentElement;
    controle.setAttribute('data-error',message)
    controle.setAttribute('data-error-visible','true')
    }
    function hideessageError(input) {
        let controle=input.parentElement;
        controle.setAttribute('data-error-visible','false')
        
}

function checkDate() {
    let input=document.getElementById('birthdate');
    let value=input.value;
    hideessageError(input);
    if(value="" ||  value===null || value.length<8 ) {
        showMessageError(input,'Entrer une date de naissance correcte');
        return false;
    }
    return true

}

function showMessageError(input, message) {
    let controle=input.parentElement;
    controle.setAttribute('data-error',message)
    controle.setAttribute('data-error-visible','true')
    }
    function hideessageError(input) {
        let controle=input.parentElement;
        controle.setAttribute('data-error-visible','false')
        
}

function checkQuantity() {
    let input=document.getElementById('quantity');
    let value=input.value;
    hideessageError(input);
    if( value ="" || value===null || value.length<=0) {
        showMessageError(input,'nombre de tournoie déja participer');
        return false;
    }
    return true

}

function showMessageError(input, message) {
    let controle=input.parentElement;
    controle.setAttribute('data-error',message)
    controle.setAttribute('data-error-visible','true')
    }
    function hideessageError(input) {
        let controle=input.parentElement;
        controle.setAttribute('data-error-visible','false')
        
}

function checkLocation() {

}
    





    

