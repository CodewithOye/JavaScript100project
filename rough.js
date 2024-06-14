// clg ---> console.log()
//  log ===> console.log()
console.log("first");
console.log("Second");

// variables
// (reserved keyword == const , let and var ) ==>  (variable name === camelCaseName ,lowercase or UPPERCASE )==> (type of value == boolean ,null , Symbol , undefined , BigInt ,string and number)
// VAR can not be use that much though ==> it can be reassigned , CONST is immutable ===> any variable declared with const can not be assigned, LET can be reassigned.
// declaring variable , you can not start the variable name with number . You can not use dash in a variable number e.g let variable-name , its going to give your error but you can use this let variable_name , you can also provide underscore _ in the beginning of your variable name
let name; // 
//assign value  it can also be assign in one place  e.g , let name = "Your value"
name ="Your name" // it can also accept number like name = 5; you 
// console log the variable name;
console.log(name); // Your name 
// same method can be used with var as well , however let or var or const cant be your variable name e.g let let ="Your value" or let var or let const ;


//const name1; // const cant be declared like this , it must be initialized  e.g( const name1 = "Your name ")
name1 = "yourname" // you will also get error because it can not be reassign
console.log(name1)
// name1 = "Your name" // error => because it can not be reassigned ..

//  challenges (1)
// 1. declare a variable with let and assign a value to it
let myName = "Your Name";
// 2) create a variable name (WhatDoYouWantToBeInYourLife) & store "Programmer"
let WhatDoYouWantToBeInYourLife = "Programmer";
// 3) create a variable name(gender) & store your gender .
let gender = "Male";
// 4) create a variable name (twitterHandle) & store your twitter handle .
let twitterHandle = "@YourTwitterHandle";
// 5) finally log all variables to console 
console.log(myName); // Your Name
console.log(WhatDoYouWantToBeInYourLife); // programmer 
console.log(gender); // male 
console.log(twitterHandle); // @YourTwitterHandle  

// Primitive types
 // 1. Number
 let myAge = 25; // number
 console.log(typeof myAge); // reserved keyword in javaScript ....// Number
 console.log(myAge); // 25
 // 2. basic Math
console.log(myAge + 4);
console.log(myAge - 4);
console.log(myAge % 4);
console.log(myAge / 4);
console.log(myAge * 4);
console.log(myAge ** 4);

// increment and decrement 
let counter = 4;
counter++; // increment
console.log(counter); // 1
counter--; // decrement
console.log(counter); // 0

// Challenge (2)
// 1. declare a variable with let and assign a value to it
let myFavNum = 25; // number
// 2. create a variable name (myFavNumDouble) & store second number 
let myFavNum2 = 22; //
// 3. add (myfavNumb & myFavNum2) .
let sum = myFavNum + myFavNum2;
// now check the answer with console.log
console.log(sum); // 47
// 4. Subtract (myfavNumb & myFavNum2)
let subtract = myFavNum - myFavNum2;
// now check the answer with console.log
console.log(subtract); // 3
// 5. multiply (myfavNumb & myFavNum2) 
let multiply = myFavNum * myFavNum2;
// now check the answer with console.log
console.log(multiply); // 550
// 6. divid (myfavNumb & myFavNum2) 
let divide = myFavNum / myFavNum2;
// now check the answer with console.log
console.log(divide); // 1.1363636363636365
// 7. reminder (myfavNumb & myFavNum2) 
let reminder = myFavNum % myFavNum2;
// now check the answer with console.log
console.log(reminder); // 3
// 7. power of (myfavNum)
let power = myFavNum ** 2;
// now check the answer with console.log
console.log(power); // 625

// boolean 

let isTrue = false;
console.log(isTrue);
// NaN == not a number
let notANumber = NaN
console.log(notANumber); // NaN
// another example of not a number 
let notANumber2 = "hello" / 2  // it says "hello" = string , so its not a number 
console.log(notANumber2); // NaN

// truthy and falsy value
// Falsy values are = false , null , undefined , 0 , -0 , NaN , ` `, ' '  and " " empty quotes mean Falsy 

// undefine 

let notDefined = undefined // it considered as error in javaScript and you can also set your variable to that, null can also be used .however null can be set by programmer while undefined can be set by JavaScript compiler with error of undefined

console.log(notDefined); // undefined

// Challenge (3)
// 1. Create a variable named `isJsProgrammingLanguage` and assign it the value true;
let isJsProgrammingLanguage = true;
//console.log to find the answer 
console.log(isJsProgrammingLanguage); // true
// 2. Create a variable named `isJsHard` and store false as value.
let isJsHard = false;
//console.log to find the answer 
console.log(isJsHard); // false
// 3. Create a variable name (favNumb) and store your favorite number .
let favNumb = 25;
// 4. Now Add favNumber with the value of undefined
let addUndefined = favNumb + undefined;
//console.log to find the answer
console.log(addUndefined); // NaN

// Comparison Operators 
// Equality Operators
// 1. Equal (==)
let isEqual = 5 == 5;
console.log(isEqual); // true
// 2. Not Equal (!=)
let isNotEqual = 5 != 5;
console.log(isNotEqual); // false
// 3. Strict Equal (===)
let isStrictEqual = 5 === 5;
console.log(isStrictEqual); // true
// 4. Strict Not Equal (!==)
let isStrictNotEqual = 5 !== 5;
console.log(isStrictNotEqual); // false

// Relational Operators
// 5. Greater Than (>)
let isGreaterThan = 5 > 3;
console.log(isGreaterThan); // true
// 6. Less Than (<)
let isLessThan = 5 < 3;
console.log(isLessThan); // false
// 7. Greater Than or Equal (>=)
let isGreaterThanOrEqual = 5 >= 5;
console.log(isGreaterThanOrEqual); // true
// 8. Less Than or Equal (<=)
let isLessThanOrEqual = 5 <= 3;
console.log(isLessThanOrEqual); // false


// Strings 

let firstName = 'Dev'
let secondName = " Dev Soc"
// let fullName = firstName + " " + secondName
// concatenation method
 let fullName = firstName.concat(secondName)
console.log(fullName)

// Append Method
firstName += " Something else"
console.log(firstName)

// Length Method
console.log(firstName.length);

// Cases
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// Slice
// let slice = firstName.slice(0,3)... slice method first index starts with 0 and second index start with 1
console.log(firstName.slice(0,2));

// split and join method // without a quotes it can take an item or items together instead of spliting 
console.log(firstName.split('').join("")); // this split all the letters in the name or string .. and join method concantenate everything.

// Includes method
console.log(firstName.includes("e")); /// this will say true because we asked the includes to search in our first name if it contact e

// trim method 
console.log(firstName.trim());

