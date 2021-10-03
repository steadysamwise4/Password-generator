// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Character getting functions

var getLower = function() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
var getUpper = function() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
var getNumeric = function() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
var getSpecial = function() {
    const special = "!@#$%^&*()_-+="
    return special[Math.floor(Math.random() * special.length)];
}
console.log(getSpecial());