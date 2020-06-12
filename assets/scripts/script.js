// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Function to generate random password
function generatePassword() {

  //Getting user input for pasword criteria
  var pwdLength = prompt("Enter length of the password. Min: 8, Max:128 ");
  var isLowerCase = confirm("Do you want to include lower case alphabets in your password? ");
  var isUpperCase = confirm("Do you want to include upper case alphabets in your password? ");
  var isNumeric = confirm("Do you want to include numbers in your password? ");
  var isSpecial = confirm("Do you want to include special characters in your password? ");

  var pwdCriteriaString = "";
  var password = "";

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


  pwdCriteriaString = criteriaStringGenerator(isLowerCase, lowerCase, pwdCriteriaString);
  pwdCriteriaString = criteriaStringGenerator(isUpperCase, upperCase, pwdCriteriaString);
  pwdCriteriaString = criteriaStringGenerator(isNumeric, numeric, pwdCriteriaString);
  pwdCriteriaString = criteriaStringGenerator(isSpecial, specialChar, pwdCriteriaString);


  for (var i = 1; i <= pwdLength; i++) {
    var char = Math.floor(Math.random() * pwdCriteriaString.length + 1);
    password += pwdCriteriaString.charAt(char);
  }

  /*var isBlank = isBlankValidator(pwdLength);
  if(isBlank){
   pwdLength = prompt("Enter alength of the password. Min: 8, Max:128 ");
  }*/

  return password;
}

//A validator function to check if user input is empty or not
function isBlankValidator() {

  return false;
}

function charTypeValidator() {

  return false;
}

function criteriaStringGenerator(isCriteria, criteriaString, pwdCriteriaString) {

  if (isCriteria) {
    pwdCriteriaString = pwdCriteriaString + criteriaString;
  }
  return pwdCriteriaString;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
