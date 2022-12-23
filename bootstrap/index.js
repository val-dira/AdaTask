// Complete the form validation for your login forms and alert success if user enters the correct information on button click


function validateForm() {
    // Get the values of the email and password fields
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
  
    // Validate the email field
if (email == "") {
    alert("Email field must be filled out");
    return false;
}

if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
    alert("Invalid email address");
    return false;
}
  
    // Validate the password field
if (password == "") {
    alert("Password field must be filled out");
    return false;
}
if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
}
  
    // If the email and password fields are valid, display a success message
alert("Success!");
return true;

}