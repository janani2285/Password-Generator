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

  //Criteria Strings
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //Length Validation
  if (pwdLength < 8 || pwdLength > 128) {
    //Error message
    alert("Password cannot be generated. Required minimum characters: 8, Maximum characters:128");
  } else {
    //Success flow
    var isLowerCase = confirm("Do you want to include lower case alphabets in your password?");
    var isUpperCase = confirm("Do you want to include upper case alphabets in your password?");
    var isNumeric = confirm("Do you want to include numbers in your password?");
    var isSpecial = confirm("Do you want to include special characters in your password?");

    if (isLowerCase || isUpperCase || isNumeric || isSpecial) {
      //Success flow
      pwdCriteriaString = criteriaStringGenerator(isLowerCase, lowerCase, pwdCriteriaString);
      pwdCriteriaString = criteriaStringGenerator(isUpperCase, upperCase, pwdCriteriaString);
      pwdCriteriaString = criteriaStringGenerator(isNumeric, numeric, pwdCriteriaString);
      pwdCriteriaString = criteriaStringGenerator(isSpecial, specialChar, pwdCriteriaString);

      for (var i = 1; i <= pwdLength; i++) {
        //Generating random pasword
        var char = Math.floor(Math.random() * pwdCriteriaString.length);
        password += pwdCriteriaString.charAt(char);

      }

      //Checking for atleast one occurance of the user criteria
      if (isLowerCase) {
        password = oneOccurance(/[a-z]/, lowerCase, password);
      }

      if (isNumeric) {
        password = oneOccurance(/[0-9]/, numeric, password);

      }
      if (isUpperCase) {
        password = oneOccurance(/[A-Z]/, upperCase, password);

      }
      if (isSpecial) {
        password = oneOccurance(/[specialChar]/, specialChar, password);

      }
    } else {
      //Error Message
      alert("Password cannot be generated. None of the criteria (lower case,upper case,numeric, special character) were selected.");
    }
  }
  return password;
}

//Function to check for atleast one occurance and replace if needed
function oneOccurance(regExp, criteriaString, password) {
  if (!(regExp.test(password))) {
    var charReplace = Math.floor(Math.random() * criteriaString.length);
    password[password.length - 1] = charReplace;
  }
  return password;
}

//Function to generate criteria string
function criteriaStringGenerator(isCriteria, criteriaString, pwdCriteriaString) {

  if (isCriteria) {
    pwdCriteriaString = pwdCriteriaString + criteriaString;
  }
  return pwdCriteriaString;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
