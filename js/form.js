let buttonShow = document.querySelector(".button");
let formBlock = document.querySelector(".form-search");
let arrivalDate = formBlock.querySelector(".arrival-user");
let departureDate = formBlock.querySelector(".departure-user");
let formValidation = formBlock.querySelector(".form-validation");
let adultUsers = formBlock.querySelector(".user-adult");
let childUsers = formBlock.querySelector(".user-child");
let adultPlus = formBlock.querySelector(".plus-1");
let adultMinus = formBlock.querySelector(".minus-1");
let childPlus = formBlock.querySelector(".plus-2");
let childMinus = formBlock.querySelector(".minus-2");

let isStorageSupport = true;
let storage = "";

try {
    adultUsers.value = localStorage.getItem("adultUsers");
    childUsers.value = localStorage.getItem("childUsers");
} catch (err) {
    isStorageSupport = false;
}

formBlock.classList.remove("form-search");

buttonShow.addEventListener("click", function () {
    formBlock.classList.toggle("form-search");
    arrivalDate.focus();
    formBlock.classList.remove("form-error");
});

adultPlus.addEventListener("click", function () {
    adultUsers.value = parseInt(adultUsers.value) +1;
});

adultMinus.addEventListener("click", function () {
    adultUsers.value = parseInt(adultUsers.value) -1;
});

childPlus.addEventListener("click", function () {
    childUsers.value = parseInt(childUsers.value) +1;
});

childMinus.addEventListener("click", function () {
    childUsers.value = parseInt(childUsers.value) -1;
});

formValidation.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value) {
        evt.preventDefault();
        alert("Введите дату заезда и выезда");
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