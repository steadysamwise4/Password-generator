// function to generate the password
function myFunction() {
    // aquire user input for length of password
    var length = window.prompt("Enter a length between 8 and 128");
    //validation of user data
    while (length < 8 || length > 128) {
        length = window.prompt("Your response is invalid. Try again.");
    } 
    // variables and conditional statements to get user data and apply it to the password
        var confirmUp = window.confirm("Do you wish to include upper case characters?");
        var confirmNum = window.confirm("Do you wish to include numeric characters?");
        var confirmSymb = window.confirm("Do you wish to include symbols?");
        var confirmAll = [confirmUp.valueOf, confirmNum.valueOf, confirmSymb.valueOf];
        if (confirmAll) {
            var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
            var charLength = 70;
        }
        if (!confirmUp) {
            var characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
            var charLength = 44;
        }
        if (!confirmNum) {
            var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
            var charLength = 60;
        }
        if (!confirmSymb) {
            var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var charLength = 62;
        }
        if (!confirmNum && !confirmSymb) {
            var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var charLength = 52;
        }
        if (!confirmUp && !confirmSymb) {
            var characters = "acdefghijklmnopqrstuvwxyz0123456789";
            var charLength = 36;
        }
        if (!confirmUp && !confirmNum) {
            var characters = "acdefghijklmnopqrstuvwxyz!@#$%^&*";
            var charLength = 34;
        }
        if (!confirmUp && !confirmNum && !confirmSymb){
            var characters = "acdefghijklmnopqrstuvwxyz";
            var charLength = 26;
        
      
    }
  
    password = ""; 
    // iteration of charachter strings to generate random password
    for (var i = 0;i < length;i++) {
      let generate = characters[Math.floor(Math.random() * charLength)];
      password += generate;
    }
    
    // connects generated password to the designated text area
    let parent = document.getElementById("password").innerHTML = password;
   
  }
   // ABCDEFGHIJKLMNOPQRSTUVWXYZ
   // 0123456789
    // !@#$%^&*
    // abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*