
function submitUserInformation(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    var userName = document.getElementById("username_input");
    var password = document.getElementById("password_input");
    alert("Username: " + userName.value + "\nPassword: " + password.value);
}
