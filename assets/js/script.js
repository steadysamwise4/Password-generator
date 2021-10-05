function myFunction() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789@#$%^&*";
  
  // let letters = "0123456789"
    password = ""; 
    
    for (var i = 0;i < 12;i++) {
      let generate = letters[Math.floor(Math.random() * 62)];
      password += generate;
    }
    
    
    let parent = document.getElementById("password").innerHTML = password;
   
  }
