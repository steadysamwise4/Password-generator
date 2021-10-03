// Functions to collect the data
// collect password length
var lengthCollect = function() {
    //ask user for desired length
    var promptLength = window.prompt("Please enter a password length between 8 and 128");
    // validate prompt answer
    
        if (promptLength <= 7 || promptLength >= 128) {
            window.alert("Your response is invalid. Please try again.");
            // use return to call again and stop function
            return lengthCollect();
        }
    // convert promptLength to number type
    promptLength = parseInt(promptLength);

    if (promptLength >= 8 && promptLength <= 128) {
    //console.log("Your password length is " + promptLength);
    return promptLength;
        }
    
}
// does user wish to include lowercase?
var lowerConfirm = function() {
        var lowCon = window.confirm("Do you wish to include lowercase characters?");
        if (lowCon) {
            return true;
        }else
        
        return false;
    };
// does user wish to include uppercase?
var upperConfirm = function() {
    var upCon = window.confirm("Do you wish to include uppercase characters?");
    if (upCon) {
        return true;
    }else
    
    return false;
};
// does user wish to include numeric?
var numConfirm = function() {
    var numCon = window.confirm("Do you wish to include numeric characters?");
    if (numCon) {
        return true;
    }else
    
    return false;
};
// does user wish to include special?
var specialConfirm = function() {
    var specialCon = window.confirm("Do you wish to include special characters(symbols)?");
    if (specialCon) {
        return true;
    }else
    
    return false;
};



// global variables
var getLength = lengthCollect();
var isLow = lowerConfirm();
var isUp = upperConfirm();
var isNum = numConfirm();
var isSpec = specialConfirm();

// object containing the 4 random character types
const randomTypes = {
    low: getLower,
    up: getUpper,
    Num: getNumeric,
    Spec: getSpecial
}
console.log(getLength);
console.log(isLow);
console.log(isUp);
console.log(isNum);
console.log(isSpec);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// Write password to the #password input
function writePassword() {
    var length = getLength;
    var hasLower = isLow;
    var hasUpper = isUp;
    var hasNumber = isNum;
    var hasSpecial = isSpec;
    var password = generatePassword(hasLower, hasUpper, hasNumber, hasSpecial, length);
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  };

  // function to generate the password
var generatePassword = function() {}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");






    const length = lengthCollect();
    /*const hasLower =  ;
    const hasUpper =  ;
    const hasNumeric =  ;
    const hasSpecial =  ; */








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


//lengthCollect();
//lowerConfirm();
