function aurorabest() {
   var password = document.getElementById("BestSeller");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "CINDERELLA") {
    return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }