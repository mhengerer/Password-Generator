// variables for charecters
var anyUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var anyLower = "abcdefghijklmnopqrstuvwxyz";
var anyNum = "1234567890";
var anySpecial = "!@#$%^&*?+-=_'(),.;:<>{}[]/|`~ ";



// Promt that asks user to put in how long they want the password to be
// code that also makes sure that length is between 8-128 so its all in a function that will repeat if an unsuitable value is submitted. it will only ask 5 times before it moves on


function generatePassword() {
  var superArray = "";
  var password = "";

  var wordLength = prompt("Choose a length for your password:");
  if (wordLength === null) {
    return;
  } 
  if (isNaN(wordLength)) {
    alert("You Must answer With a Number");
    return;
  } 
  if (wordLength < 8) {
    alert("You need to choose a Password Length Greater than 8");
    return;
  } 
  if (wordLength > 128) {
    alert("You need to choose a Password Length Less than 128");
    return;
  }

  console.log(wordLength);

  // this code is a function that returns a random lowercase letters from charecter set
  // function anyLower() {
  //     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  // };

  // // this code is a function that returns a random uppercase letters from charecter set
  // function anyUpper() {
  //     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  // };

  // // this code is a function that returns a random number from charecter set
  // function anyNum() {
  //     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  // };

  // // this code is a function that returns a random special charecter from charecter set
  // function anySpecial() {
  //     const symbols = "!#$%&'()*,-./;:<>+=?@{}[]\|_^~";
  //     return symbols[Math.floor(Math.random() * symbols.length)];
  // };

  // anyLower();
  // anyUpper();
  // anyNum();
  // anySpecial();

  console.log(anySpecial);
  console.log(anyNum);
  console.log(anyUpper);
  console.log(anyLower);
  console.log(anyLower);

  var lowerCase = confirm("Use Lower-Case letters?");
  var upperCase = confirm("Use Upper-Case letters?");
  var specChar = confirm("Use Symbols?");
  var number = confirm("Use Numbers?");

  var superRandom = {
    lowerCase: anyLower,
    upperCase: anyUpper,
    number: anyNum,
    specChar: anySpecial,
  };

  // console logs whatever the user chooses as their parameters
  console.log(
    "Length",
    wordLength,
    "Symbols",
    specChar,
    "Numbers",
    number,
    "Lower-Case",
    lowerCase,
    "Upper-Case",
    upperCase
  );

  if (specChar) {
    superArray = superArray.concat(anySpecial);
    console.log(superArray);
  }

  if (number) {
    superArray = superArray.concat(anyNum);
    console.log(superArray);
  }

  if (lowerCase) {
    superArray = superArray.concat(anyLower);
    console.log(superArray);
  }

  if (upperCase) {
    superArray = superArray.concat(anyUpper);
    console.log(superArray);
  }

  if (!specChar && !number && !lowerCase && !upperCase) {
    alert("You must choose atleast one charecter type");
    generatePassword();
  }

  console.log("Super-Array:", superArray);

  for (var i = 0; i < wordLength; i++) {
    var rando = Math.floor(Math.random() * superArray.length);
    password += superArray.substring(rando, rando + 1);
    // password += superArray.index[rando]
  }
  return password;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
