// Assignment code here
var characterLength = 8;
var producePass = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//prompt the user for the password criteria
function getCriteria() {
    producePass = [];
    // getting the output of the user for the characters in password 
    characterLength = parseInt(prompt("How many characters do you want your password to contain?"));
  
//add the lowercase uppsecase numbers and special characters 
let numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ];
let symbols =   [ " @", "!", "#", "$", "%", "&", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", , "`", "|", "~" ];
const lowercaseLetters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
const uppercaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

    //password length may be from 8 characters to 128

    if (characterLength < 8 || characterLength > 128)  {
      alert("Charecter length has to be a number between 8 - 128");
      return false; 
    }
    //generate a password based on the criteria
// continuation of the window prompt command in order to get the criteria 
    if (confirm("Would you like your password to contain lowercase letters?")) {
      producePass = producePass.concat(lowercaseLetters);
    }
    if (confirm("Would you like your password to contain uppercase letters?")) {
      producePass = producePass.concat(uppercaseLetters);
    }
    if (confirm("Would you like your password to numbers?")) {
      producePass = producePass.concat(numbers);
    }
    if (confirm("Would you like your password to contain special characters?")) {
      producePass = producePass.concat(symbols);
    }

    return true; 
}
// generate the password loop 

// Write password to the #password input
function writePassword() {

  // window prompt 
  var askBoxes = getCriteria();
  
  if (askBoxes) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
  }
  }
  
function generatePassword() {

  var securePass= '';
  // creates the loop for the charecter length using math floor to round off whole number 
  for(var i = 0; i < characterLength; i++) {
    var randomPass = Math.floor(Math.random() * producePass.length);
    securePass = securePass + producePass[randomPass];
  }
  return securePass
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);