// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['@','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];// 
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var length;
var specialCharactersFlag;
var numbersFlag;
var capitalLettersFlag;
var lowerCaseFlag;
//Write password to the #password input
function getOptions(){
  length = prompt ("How long do you want your password to be?");
  console.log(length);
  //create another if statement beyond 128, 
  if (length<8) {
    alert ("Password needs to be at least 8 characters");
    return null;
  //alert that password has to be less than 128
  } else if (length>128){
    alert ("Password must be less than 128 characters")
  }
  var lowerCasePrompt = prompt("Would you like lowercase characters in your password.Please respond with yes or no(case sensitive)");
  if (lowerCasePrompt == "yes"){
    lowerCaseFlag = true;
  } else if (lowerCasePrompt == "no"){
    lowerCaseFlag = false;
  }else {
    return null;
  }
  var capitalLettersPrompt = prompt("Would you like capital letters in your password.Please respond with yes or no(case sensitive)");
  if (capitalLettersPrompt == "yes"){
   capitalLettersFlag = true;
  } else if (capitalLettersPrompt == "no"){
    capitalLettersFlag = false;
  }else {
    return null;
  }
  var numbersPrompt = prompt("Would you like numbers in your password.Please respond with yes or no(case sensitive)");
  if (numbersPrompt == "yes"){
   numbersFlag = true;
  } else if (numbersPrompt == "no"){
    numbersFlag = false;
  }else {
    return null;
  }
  var specialCharactersPrompt = prompt("Would you like specail characters in your password.Please respond with yes or no(case sensitive)");
  if (specialCharactersPrompt == "yes"){
   specailCharactersFlag = true;
  } else if (specialsCharatersPrompt == "no"){
    specialCharactersFlag = false;
  }else {
    return null;
  }
  if (!specialCharactersFlag && !numbersFlag && !capitalLettersFlag && !lowerCaseFlag){
    alert ("atleast one special character should be selected")
  }
} 


//present question if the user wants to use special characters, lower case, upper case and numbers
//use confirm("")
function generatePassword (){
  let options = getOptions();
   var results = [];
   var possibleCharacters = [];
   var mandatoryCharacters = [];
   if (!options)return null;
   if (options.lowerCasePrompt){
     possibleCharacters = possibleCharacters.concat(lowerCase);
     mandatoryCharacters.push(getRandom(lowerCase));
     
   }
   if (options.capitalLettersPrompt){
    possibleCharacters = possibleCharacters.concat(capitalLetters);
    mandatoryCharacters.push(getRandom(capitalLett));
    
  }
  if (options.numbersPrompt){
    possibleCharacters = possibleCharacters.concat(numbers);
    mandatoryCharacters.push(getRandom(numbers));
    
  }
  if (options.specialCharactersPrompt){
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    mandatoryCharacters.push(getRandom(specialCharacters));
    
  }
  for (let i = 0; i<options.length; i ++){
    var character = getRandom(possibleCharacters);
    results.push(character);
  }
  for (let i = 0; i<mandatoryCharacters.length; i++){
    results[i] = mandatoryCharacters [i];
  }
  return results.join("");
}






function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
