// identify submit button
const generateBtn = document.querySelector("#generate");

// identify password text placeholder
let passwordText = document.querySelector("#password");

// identify potential characters
let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()'

// initial userPassword variable
let usersPassword = '';

function generatePassword() {

  let usersPasswordLength = window.prompt("how many characters would you like your password to be?")
  
  if(usersPasswordLength < 8) {
    window.alert("password must be more than 8 characters")
    
  } else if(usersPasswordLength > 128) {
    window.alert("password must be less than 128 characters")
  }

  let includeNumbers = window.prompt("would you like to include numbers? please enter yes or no.")
  let includeSpecialChars = window.prompt("would you like to include special characters?")

  if(includeNumbers === 'yes' && includeSpecialChars === 'yes' ) {

    // create a password that includes both numbers AND special characters
    for(var i = 0; i < usersPasswordLength; i++) {
      var number = Math.floor(Math.random() * chars.length);
      usersPassword += chars.substring(number, number + 1);
      passwordText.value = usersPassword
    } 

  } else if(includeNumbers === 'no' && includeSpecialChars === 'yes') {

    // if no, remove numbers from string but INCLUDE special characters
    chars = chars.replace('123456789', '')

    for(var i = 0; i < usersPasswordLength; i++) {
      var number = Math.floor(Math.random() * chars.length);
      usersPassword += chars.substring(number, number + 1);
      passwordText.value = usersPassword
    } 
    
  } else if(includeNumbers === 'yes' && includeSpecialChars === 'no') {

    // create a password that includes numbers but NO special characters
    chars = chars.replace('!@#$%^&*()', '')
    for(var i = 0; i < usersPasswordLength; i++) {
      var number = Math.floor(Math.random() * chars.length);
      usersPassword += chars.substring(number, number + 1);
      passwordText.value = usersPassword
    } 

  } else if(includeNumbers === 'no' && includeSpecialChars === 'no') {

    // create a password that doesn't include numbers OR special characters
    chars = chars.replace('123456789!@#$%^&*()', '')
    for(var i = 0; i < usersPasswordLength; i++) {
      var number = Math.floor(Math.random() * chars.length);
      usersPassword += chars.substring(number, number + 1);
      passwordText.value = usersPassword
    } 
  }

  

}

// when btn is clicked, do this
generateBtn.addEventListener("click", generatePassword);