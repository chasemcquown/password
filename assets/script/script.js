// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Get references to the #password element
var passwordText = document.querySelector("#password");

// list of possible characters that can be inculded in password
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

var passwordResult = "";

// Write password to the #password input
function writePassword() {
  
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  
  
  var password = function generatePassword() {
    // passwordResult var is set to empty string since each time the generate button is clicked, the value of passwordReult will change
    passwordResult = "";
    // below is where the passowrd is generated, by looping through my chars string and selecting a random character passwordLength number of times
    for(var i = 0; i < passwordLength; i++) {
      var number = Math.floor(Math.random() * chars.length);
      passwordResult += chars.substring(number, number + 1);
    } 
  // below is where the resulting password is will be injected into passwordText
  passwordText.value = passwordResult;

}
  if(passwordLength <= 7 || passwordLength >= 129 ) {
    window.alert('You need to enter a number between 8 and 128!');
    writePassword();
  }
  else if(passwordLength >= 8 || passwordLength <= 128) {
    window.alert("Click ok to include special characters");
    window.alert("Click ok to include uppercase characters");
    window.alert("Click ok to include lowercase characters");
    window.alert("Click ok to include special characters");
    password(); 
  }

}

generateBtn.addEventListener("click", writePassword);
