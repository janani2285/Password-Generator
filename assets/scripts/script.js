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
  var pwdLength = prompt("How many charaters should your password consists of?");

  var pwdCriteriaString = "";
  var password = "";

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  if (pwdLength < 8 || pwdLength > 128) {
    alert("Password cannot be generated. Required minimum characters: 8 , Maximum characters:128");
  }else {
    var isLowerCase = confirm("Do you want to include lower case alphabets in your password?");
    var isUpperCase = confirm("Do you want to include upper case alphabets in your password?");
    var isNumeric = confirm("Do you want to include numbers in your password?");
    var isSpecial = confirm("Do you want to include special characters in your password?");

    if(isLowerCase || isUpperCase || isNumeric || isSpecial){
      
      pwdCriteriaString = criteriaStringGenerator(isLowerCase, lowerCase, pwdCriteriaString);
      pwdCriteriaString = criteriaStringGenerator(isUpperCase, upperCase, pwdCriteriaString);
      pwdCriteriaString = criteriaStringGenerator(isNumeric, numeric, pwdCriteriaString);
      pwdCriteriaString = criteriaStringGenerator(isSpecial, specialChar, pwdCriteriaString);
      
      for (var i = 1; i <= pwdLength; i++) {
       
        var char = Math.floor(Math.random() * pwdCriteriaString.length + 1);
        password += pwdCriteriaString.charAt(char);
        
      }
    }else{
      alert("Password cannot be generated. None of the criteria (lower case,upper case,numeric, special character) were selected.");
    }  
  }
  return password;
}

function criteriaStringGenerator(isCriteria, criteriaString, pwdCriteriaString) {

  if (isCriteria) {
    pwdCriteriaString = pwdCriteriaString + criteriaString;
  }
  return pwdCriteriaString;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
