const input = document.querySelector(".podcast__input");
const btn = document.querySelector(".podcast__btn");

btn.addEventListener("click", checkEmail);

function checkEmail(e) {
    e.preventDefault();
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (input.value === "") {
        document.querySelector(".podcast__error").innerHTML =
            "Oops! Please add your email";
        return false;
    } else if (!regex.test(input.value)) {
        document.querySelector(".podcast__error").innerHTML =
            "Oops! Please check your email";
        return false;
    } else {
        document.querySelector(".podcast__error").innerHTML = "";
        return true;
    }
}