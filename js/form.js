let buttonShow = document.querySelector(".button");
let formBlock = document.querySelector(".form-search");
let arrivalDate = formBlock.querySelector(".arrival-user");
let departureDate = formBlock.querySelector(".departure-user");
let formValidation = formBlock.querySelector(".form-validation");
let adultUsers = formBlock.querySelector(".user-adult");
let childUsers = formBlock.querySelector(".user-child");

let isStorageSupport = true;
let storage = "";

try {
    adultUsers.value = localStorage.getItem("adultUsers");
    childUsers.value = localStorage.getItem("childUsers");
} catch (err) {
    isStorageSupport = false;
}

buttonShow.addEventListener("click", function (evt) {
    evt.preventDefault();
    formBlock.classList.toggle("form-search-none");
    formBlock.classList.toggle("form-search");
    arrivalDate.focus();
    formBlock.classList.remove("form-error");
})

formValidation.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value) {
        evt.preventDefault();
        formBlock.classList.remove("form-error");
        formBlock.offsetWidth = formBlock.offsetWidth;
        formBlock.classList.add("form-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("adultUsers", adultUsers.value);
            localStorage.setItem("childUsers", childUsers.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formBlock.classList.contains("form-search")) {
        evt.preventDefault();
        formBlock.classList.remove(".form-error");
        formBlock.classList.toggle("form-search-none");
        formBlock.classList.toggle("form-search");
    }
  }
});