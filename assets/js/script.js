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
    console.log(promptLength);
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

var generateBtn = document.querySelector("#generate");

// global variables
const getLength = lengthCollect();
const isLow = lowerConfirm();
const isUp = upperConfirm();
const isNum = numConfirm();
const isSpec = specialConfirm();



console.log(getLength);
console.log(isLow);
console.log(isUp);
console.log(isNum);
console.log(isSpec);
  // Add event listener to generate button
generateBtn.addEventListener("click", () => {
    /*const length = getLength;
    const hasLower = isLow;
    const hasUpper = isUp;
    const hasNumber = isNum;
    const hasSpecial = isSpec; */
    const password = generatePassword(isLow, isUp, isNum, isSpec, getLength);
    const passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  

});


  // function to generate the password
function generatePassword(low, up, num, spec, getLength) {
    let myPassword = "";
    const typesCount = isLow + isUp + isNum + isSpec;
    const typesArr = [{low}, {up}, {num}, {spec}].filter(item => Object.values(item)[0]);

    // must have 2 or more character types
    if (typesCount < 2) {
        window.alert("You must select at least 2 types of characters. Please try again.");
        lowerConfirm();
        upperConfirm();
        numConfirm();
        specialConfirm();
        generatePassword();
    }else {
    
        for (var i=0; i<getLength; i+=typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];
                myPassword += randomFunc[funcName]();
            });
        }
        const userPassword = myPassword.slice(0, length);
        return userPassword;
    }
}
// Get references to the #generate element

const randomFunc = {
rLow: low,
rUp: up,
rNum: num,
rSpec: spec
}


    







// random Character functions

function getLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getNumeric() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getSpecial() {
    const special = "!@#$%^&*()_-+="
    return special[Math.floor(Math.random() * special.length)];
}

var low = getLower();
var up = getUpper();
var num = getNumeric();
var spec = getSpecial();


//lengthCollect();
//lowerConfirm();
