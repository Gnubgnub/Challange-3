// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Object
var pass = {
  // Length of password
  passLength: 0,
  // Array holding lowercase letters
  passLowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  // Array holding uppercase letters
  passUpperCase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  // Array holding numbers
  passNum: [0,1,2,3,4,5,6,7,8,9],
  // Array holding special characters, 27 total 
  passChar: ['/','!','@','#','$','%','^','&','*','(',')','_','-','+','=','|','{','}','[',']','?','~','`','<','>',',','.']
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate new password
function generatePassword() {
  var result = "";

  // Variables to collect from prompts in line 114
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  // Initialize variables
  passwordLength = 0;
  pass.passLength = 0;
  result = "";

  // Checks password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");

    // If user presses cancel instead of confirm
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      // Checking user enters a number
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return "Your secure password";
      }
      else {
        // Check password meets length prompts
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {

          // Calls function to show prompts
          showPrompts();

          // Keeps adding characters until passLength is equal to the length the user set
          while (pass.passLength < passwordLength) {
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              // Update passLength by 1 while adding lowercase letters
              if (lowerCase === true && pass.passLength < passwordLength) {
                var lc = pass.passLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pass.passLength++;
              }

              // Update passLength by 1 while adding Special Chatacters        
              if (specialChar === true && pass.passLength < passwordLength) {
                var sc = pass.passChar[Math.floor(Math.random() * 27)]
                result = result + sc;
                pass.passLength++;
              }
           
              // Update passLength by 1 while adding Uppercase letters
              if (upperCase === true && pass.passLength < passwordLength) {
                var uc = pass.passUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pass.passLength++;
              }

              // Update passLength by 1 while adding numbers
              if (numbers === true && pass.passLength < passwordLength) {
                var num = pass.passNum[Math.floor(Math.random() * 10)]
                result = result + num;
                pass.passLength++;
              }
            }
          }
        }
      }
    }

    // Return the generated password back to the calling function
    return result;
    // Function that prompts user for character types to be used
    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      specialChar = confirm("Do you want to use any special characters?");
    }
  }  
}





