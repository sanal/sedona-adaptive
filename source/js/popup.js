var rewievForm = document.querySelector(".rewiev-form");
var firstName = document.querySelector(".name-field__input--first");
var lastName = document.querySelector(".name-field__input--last");
var phoneNumber = document.querySelector(".contacts-field__input--phone");
var email = document.querySelector(".contacts-field__input--email");
var submitButton = document.querySelector(".rewiev-form__submit-btn");
var popupFailure = document.querySelector(".popup-failure");
var failureCloseButton = document.querySelector(".popup-failure__close-btn");
var popupSuccess = document.querySelector(".popup-success");
var successCloseButton = document.querySelector(".popup-success__close-btn");

submitButton.addEventListener("click", function(e) {
  if (!firstName.validity.valid || !lastName.validity.valid || !phoneNumber.validity.valid || !email.validity.valid) {
    popupFailure.classList.remove("popup-failure--closed");
  }
})

rewievForm.addEventListener("submit", function(e) {
  popupSuccess.classList.remove("popup-success--closed");
  e.preventDefault();
});

failureCloseButton.addEventListener("click", function(e) {
  e.preventDefault();
  popupFailure.classList.add("popup-failure--closed");
});

successCloseButton.addEventListener("click", function(e) {
  e.preventDefault();
  popupSuccess.classList.add("popup-success--closed");
});
