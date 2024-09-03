function getFormData() {
    console.log("The Login Button is clicked");
    let username_field = document.getElementById("username_input");
    let password_field = document.getElementById("password_input");
    alert("Username: " + username_field.value + "\nPassword: " + password_field.value);
    return false;
}
