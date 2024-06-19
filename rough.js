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

// Template literal => working with back ticks 

let desc = `this is some randome`
// checking how it shows 
console.log(desc)

let descName = "Your name"
let descSecond = "Dev Dev"
let descFull = `${descName} ${descSecond} something`;
// check how it shows 
console.log(descFull);


//challenge
let myFavActorFn = "Jason"
let myFavActorFs = "Statham"
let favFullName = `${myFavActorFn} ${myFavActorFs}`;
let UPPERCASE = favFullName.toUpperCase();
let message = `My Fav account is ${UPPERCASE}, `
message+= `A Handsome good looking man`
// let favFullName = myFavActorFn.concat(myFavActorFs).toUpperCase();
console.log(message);


// Type conversion 
// string to number
let money = "90";
// this also works 
money = +money
// now lets convert string to number with parseInt 
money = parseInt(money)
// now lets convert string to number with constructor Number   
money = Number(money)

console.log(money);

// convert number to string 

let moneyStr = "90.74574"
// Converting
moneyStr = moneyStr.toString()
moneyStr = String(moneyStr)

// Converting string to decimal
//converting with parseFloat
moneyStr = parseFloat(moneyStr)
// conditional statements 

let a = 20;
let b = 40;

    if (a > b) {
        console.log('a is greather than b')
        
    } else if(a < b){
        console.log('B is greather than a');
    } else {
        console.log("a is not equal to b");
    }
// you can write else if statment as long as you want if it making sense to you .. you need to end the statement with else condition though.

let time = 12
let greetings;
if (10 < time) {
    greetings = "Good Morning"
    console.log(greetings);
} else if(time < 20){
    greetings ="Good afternoon"
    console.log(greetings);
} else{
    greetings = "Good evening"
    console.log(greetings);
}


// challenge
// create variable name (password) store nothing.
let password;
// if password is equal to 8 print "Welcome"
password ="12345678"
if(password.length === 8){
    console.log("Welcome");
}else if(password.length < 8){
    console.log("Password is too short");
}else if(password.length > 8){
    console.log("Password is too long ,password should be 8 charracters");
} else{
    console.log("Please provide a password");
}
// if password is less than 8 print "Password is too short"
// if password is more than 8 print "Password is too long" & "password should be 8 charracters"


// switch statements 
let day = 2;
switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        }
// challenge 
// create a variable name(fruit) & store "banana"
let fruit = "banana";
switch (fruit) {
    case "banana":
        console.log("Banana is good");
        break;
    case "apple":
        console.log("Apple is good");
        break;
    case "orange":
        console.log("Orange is good");
        break;
    case "tomato":
        console.log("Tomato is good");
        break;

    default:
        console.log("Invalid fruit");
        break;
}
// for loop statment => dont repeat yourself . for (initialExpression; then condition; then express  )
for (let i = 0; i <= 5; i++) {
    console.log("Hello World!", i)
}

// Nested loop 
for (let i = 0; i <= 5; i++) {
    console.log("===Outer Loop===", i)
    for (let j = 0; j <= 5; j++) {
        console.log("Inner Loop", j)
        }
}

// Loops Challenge
// write your name from 0 t0 100
for (let i = 0; i <= 100; i++) {
    console.log("Hello World!", i)
}
// While (condition) statements


let i = 1
while (i <= 5) {
    console.log("Hello World!", i)
    i++;
}
// WhileLoops Challenge
// write your name from 10 t0 100
let f = 10
while (f <= 100) {
    console.log("Hello World!", f)
    f++;
}
// do while loop
let h = 1;
do {
    console.log("Do While",h)
    h++;// do not forget this .. 
} while (h <= 5);

// Logical operators , in JavaScript we have 3 kind of logical operators
// 1. Logical AND (&&) => TRUE if both the operands/boolean values are true , else to evaluares to FALSE
// Examples of Logical AND && 
const l = true
const m = true
const n = 4

console.log(l && m)
console.log(n > 2 &&  n < 2)
// 2. Logical  OR || => TRUE if either operands/boolean values is true. Evaluate to false if both are false
// Example 
console.log(l || m)
console.log(n > 2 ||  n < 2)
// 3. Logical NOT (!) => True if the operands is false and vice-versa
// Example
console.log(!m)
console.log(!l)

// Another example to clear this 

let password2 = "web-dev1290"
if (password2.length >= 8 && password2.includes("web")) {
    console.log("Valid password")
}else{
    console.log("Invalid Password")
}

// Arrays => Arrays are data structures which allow us to store collection of datas at once and also 0 index based
// array 
const numbers = [1,2,3,4,5,6,7,8]
console.log(numbers[1])


const fruitsStringArray = ["Mango", "Orange", "Apples"]
// Accessing Array items
console.log(fruitsStringArray[0])

// Nested Array == also dimension array
const nestedArray = [false ,[1,2,3], ["Mango", "Orange", "Apple"] ,true]
// console.log(nestedArray)
// accessing two dimension array 
console.log(nestedArray[1][1])
//
// challenge 
// 1. Create array name(favSingers) store 3 fav singers .
 const favSingers = ['Whitney', 'Tory', "21 Savage"]
 //2. log the first singer in that array 
 console.log(favSingers[0])
 console.log(favSingers[1])
 console.log(favSingers[2])
 // 3. Create Array name (favNumbers) store 4 fav numbers
 const favNumbers = [1,2,3,4]
 // 4. Create arrya name (mixedArr) store mixed arrays 
 const mixedArr = ['Name',["jason",21],76 , true ]
 // .5 Now access each items in that array by using [] notation.
 console.log(mixedArr[0])
 console.log(mixedArr[1][0])
 console.log(mixedArr[1][1])
 console.log(mixedArr[2])
 console.log(mixedArr[3])


 // Push() array method === check readme files ..
 const fruits =[
    'mango',
    'orange',
    'pineapple',
    'banana',
    'grape'
 ]
 fruits.push("strawberry")
 console.log(fruits)
 // you can also check the number of fruits in the array by adding .length.
 console.log(fruits.length)
 // pop() methods ..this method only allow to remove the last items from array
 fruits.pop('strawberry')
 console.log(fruits)
 // shift() methods ... only allow to remove first element from an array
 fruits.shift("mango")
 console.log(fruits)
 // unshift() methods ... adds a new element to the beginning of an array and return the new length of the array;
 fruits.unshift("mango")
 console.log(fruits)
 // concat() method allow us to add more than one to an array
 const moreFruits = ['Tomato','lemon', 'blueberry', 'natjie', 'pear' ]
 totalFruits = fruits.concat(moreFruits);
 console.log(totalFruits)
 // includes method check if an array contains a specific element;
 console.log(moreFruits.includes("Tomato"))
 // also join array 
 console.log(fruits.join('-'))
 // reverse method()
 console.log(fruits.reverse())
 // slice method()
 console.log(fruits.slice(2,5)) // start from index 2 and end at index
 // sort() method
 console.log(fruits.sort()) // this re-arrange the fruits alphabetically // also works with number

 // Object method ==========>  An object literal is a list of property names:values inside curly braces {}.
