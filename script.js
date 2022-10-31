// variables for charecters
var anyUpper = ("Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M")
var anyLower = ("q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m")
var anyNum = ("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
var anySpecial = ("!", "u+0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", "<", ">", "=", "?", "@", "[", "u+005C", "]", "^", "_", "{", "|", "}", "~")

// Promt that asks user to put in how long they want the password to be
// code that also makes sure that length is between 8-128 so its all in a function that will repeat if an unsuitable value is submitted. it will only ask 5 times before it moves on
var max_count = 5;

function pass() {
   
    var wordLength = prompt("Choose a length for your password:");
    
    if (isNaN(wordLength)) {
        alert("You Must answer With a Number")
        if (--max_count > 0) {
            pass();
        }
    } else if (wordLength < 8) {
        alert("You need to choose a Password Length Greater than 8")
        if (--max_count > 0) {
            pass();
        }
    } else if (wordLength > 128) {
        alert("You need to choose a Password Length Less than 128")
        if (--max_count > 0) {
            pass();
        }
    } else {
        alert("Thank You!")
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

    var lowerCase = confirm("Use Lower-Case letters?")
    var upperCase = confirm("Use Upper-Case letters?")
    var specChar = confirm("Use Symbols?")
    var number = confirm("Use Numbers?")

    var superRandom = {
        lowerCase: anyLower,
        upperCase: anyUpper,
        number: anyNum,
        specChar: anySpecial
    }

    var superArray = [];
    var password = [];

    // console logs whatever the user chooses as their parameters 
    console.log(
        "Length", wordLength,
        "Symbols", specChar,
        "Numbers", number,
        "Lower-Case", lowerCase,
        "Upper-Case", upperCase,
    );

    if (specChar) {
        superArray = superArray.concat(anySpecial)
        console.log(superArray);
    }

    if (number) {
        superArray = superArray.concat(anyNum)
        console.log(superArray);
    }

    if (lowerCase) {
        superArray = superArray.concat(anyLower)
        console.log(superArray);
    }

    if (upperCase) {
        superArray = superArray.concat(anyUpper)
        console.log(superArray);
    }

    console.log("Super-Array:", superArray);

    for (var i = 0; i < wordLength; i++) {
        var rando = Math.floor(Math.random() * superArray.length);
        password.push(superArray[rando])
    }

    var finalPassword = password.join('');

    console.log(finalPassword);
    // function generatePassword(lowerCase, upperCase, number, specChar, wordLength) {
    //     var generatedPassword = '';

    //     const typesArr = [{anyLower}, {anyUpper}, {anyNum}, {anySpecial}];
    //     console.log('typesCount:', typesArr);

    // }
    // generatePassword();
};
// console.log(anyLower());
// console.log(anyUpper());
// console.log(anyNum());
// console.log(anySpecial());
// click the button to make pop up window

// ask length off password: 8 < 128

// prompt charecter types: yes or no to: uppercase lowercase numeric and special


    pass();






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



