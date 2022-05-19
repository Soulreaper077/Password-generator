// Assignment code here
var characterLength = 8;
var produce = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // window prompt 
  

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  }
// generate the password loop 
function generatePassword() 

  //prompt the user for the password criteria

    //password length may be from 8 characters to 128

   //add the lowercase uppsecase numbers and special characters 

var numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ];
// var symbols = [ " @ " '!', '#', '$', '%', '&', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '\','`', '|',  '~' ]
var lowercaseLetters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var uppercaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

    //generate a password based on the criteria

  // display the password in the text box 

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);