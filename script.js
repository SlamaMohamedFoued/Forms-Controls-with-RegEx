function checkInputs() {
    let fullName = document.querySelector(".fullName");
    let address = document.querySelector(".address");
    let email = document.querySelector(".email");
    let password = document.querySelector(".password").value;
    if (fullName.value === "") {
        alert("Please enter your name");
    } else if (address.value === "") {
        alert("Please enter your address");
    } else if (email.value === "") {
        alert("Please enter your email");
    } else if (password.value === "") {
        alert("Please enter your password");
    }
    let regexEmail = /^([a-z]+)@([a-z]+)\.([a-z]{2,3})$/
    if (regexEmail.test(email.value) === false) {
        alert("Please enter a proper email address!")
    }
    if (password.length > 8) {
        alert('your passwork must have maximum 8 characters')
    } else if (/[a-z]+/.test(password) === false) {
        alert("your password has to contain at least one lowercase letter")
    } else if (/[A-Z]+/.test(password) === false) {
        alert("your password has to contain at least one uppercase letter")
    } else if (/[0-9]+/.test(password) === false) {
        alert("your password has to contain at least one number")
    }
}