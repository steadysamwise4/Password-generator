function myFunction() {
    var length = window.prompt("Enter a length between 8 and 128");
    if (length < 8 || length > 128) {
        length = window.prompt("Your response is invalid. Try again.");
    }else {
        var confirmUp = window.confirm("Do you wish to include upper case characters?");
        var confirmNum = window.confirm("Do you wish to include numeric characters?");
        var confirmSymb = window.confirm("Do you wish to include symbols?");
        var confirmAll = [confirmUp.valueOf, confirmNum.valueOf, confirmSymb.valueOf];
        if (confirmAll) {
            var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
            var charLength = 70;
        }
        if (!confirmUp) {
            var characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
            var charLength = 44;
        }
        //if (confirmAll)
    //let letters = "acdefghijklmnopqrstuvwxyz";

    }
  // let letters = "0123456789"
    password = ""; 
    
    for (var i = 0;i < length;i++) {
      let generate = characters[Math.floor(Math.random() * charLength)];
      password += generate;
    }
    
    
    let parent = document.getElementById("password").innerHTML = password;
   
  }
   // ABCDEFGHIJKLMNOPQRSTUVWXYZ
   // 0123456789
    // !@#$%^&*