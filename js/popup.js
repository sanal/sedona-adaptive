var rewievForm=document.querySelector(".rewiev-form"),firstName=document.querySelector(".name-field__input--first"),lastName=document.querySelector(".name-field__input--last"),phoneNumber=document.querySelector(".contacts-field__input--phone"),email=document.querySelector(".contacts-field__input--email"),submitButton=document.querySelector(".rewiev-form__submit-btn"),popupFailure=document.querySelector(".popup-failure"),failureCloseButton=document.querySelector(".popup-failure__close-btn"),popupSuccess=document.querySelector(".popup-success"),successCloseButton=document.querySelector(".popup-success__close-btn");submitButton.addEventListener("click",function(e){firstName.validity.valid&&lastName.validity.valid&&phoneNumber.validity.valid&&email.validity.valid||popupFailure.classList.remove("popup-failure--closed")}),rewievForm.addEventListener("submit",function(e){popupSuccess.classList.remove("popup-success--closed"),e.preventDefault()}),failureCloseButton.addEventListener("click",function(e){e.preventDefault(),popupFailure.classList.add("popup-failure--closed")}),successCloseButton.addEventListener("click",function(e){e.preventDefault(),popupSuccess.classList.add("popup-success--closed")});