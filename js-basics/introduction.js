// This is a comment

/*
This is
a multiline
comment
*/

//Declaring a variable
var myName;

//Storing values in the variables using assigment operator "=".
var myVal = 69;

var realVal;
realVal = 420;

//Assigning the values of one variable to another variable.
var myVal = realVal;

//Assigning the string values to the variable.
var myLang = "Javascript";

// Concatinating variables
var conVar = myLang + realVal;
var anotherConVar = myVal + realVal;
console.log(conVar);

//camelCase is a good practice while declaring variables.
var camelCase = "This is a camel case variable.";

// var vs let (let is preffered)
var megaVar = 56;
var megaVar = 65; // Can declare the variable next time using var.

let segVar = 45;
// let segVar = 34; Cannot declare the variable next time while using let

//Using const keyword while declaring variables.
const SOMO = 69; // Using UPPERCASE for the immutable types is considered good.
//const is a Read-only type.

//Adding Numbers in JS.
const SUM = 10 + 10;
