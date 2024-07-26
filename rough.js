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

const person = {
    name: "John",
    age: 30,
    country: "USA",
    isProgrammer: true,
    hobbies: ["reading", "swimming", "hiking"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
        }
}
// to add another value to object or array 
person.hobbies.push("coding")
person.lastName = 'Dev'
// access any of the item with dot notation
console.log(person.country)
// access nested object
console.log(person['address'])
// or
console.log(person)

// challenges
// 1. create a object name (car)
// 2. add properties (color, model, year, owner)
// 3. add a method (startEngine) that print out "Vroom Vroom"
// 4. add another method (accelerate) that print out "Speeding up"
const car = {
    color: "red",
    model: "Toyota",
    year: 2020,
    owner: "John",
    startEngine: function(){
        return ("Vroom Vroom")
        },
        accelerate: function(){
            return ("Speeding up")
            }
         }
         

        car.wheels = 4
        // console.log(car)
        console.log(car.accelerate())
        




// Function in JavaScript 
// a FUnction is a block of code that performs a specific task.
// Functions are used to perform certain actions, take parameters, return a value, and work similarly to
// methods in object-oriented programming. Functions are one of the building blocks in JavaScript.
// function makes athe program easier as each small task is divided into a function.
// function is  DRY = Dont repeat yourself .
// function is reusable and can be called multiple times.

//  function declaration
function greet(){
    console.log("Hello World")
}
// calling the function
greet()


function sayHi(name){
    console.log("Hello " + name)
    // console.log(`Hello  ${name =" Yourname "}`)
}

sayHi("Your name");

// return keyword in function

function add(x,y) {
    return x + y
}
// creating a variable to store the answer
const res = add(30,80)
//executing
console.log(res);

// create a function name(myfunction)
// This function will take 2 params
// Any number we pass as argument it will multiply that number
// as argument pass your favourite numbers 
// log the value

function myFunction(a ,b){
    return a * b ;

}
const myResult = myFunction(40,50)
console.log(myResult)

// Function Declaration
function sayHi(name){
    console.log(`Hello  ${name}`)
}
sayHi("Your name")

// Function Expression
const greet1 = function(user) {
    console.log(`Hello ${user}`)
    
}
greet1("Doe")



// When we provide function as an argument to the other function that function is known as callback function
function showCallFunc(fn){
    const value = 30;
    fn(value)
}
showCallFunc(function(value){
    console.log(value)

})
//example one

function greetMe(name,cb){
    console.log(`Hello ${name}`)
    cb()
}
function cb(){
    console.log("I am a callback function")
    }

greetMe("John Doe",cb)

// Example 2

function greetMe(name,cb){
    console.log(`Hello ${name}`)
    cb()
}


greetMe("John Doe",function cb(){
    console.log("I am a callback function")
    })



// create a function name showCallfunc
// pass fn as a parameter
// inside that function , create a varibale which holds the value of 10
// oass that valueu to the callback function
// now create a callback function & print the value which you will pass as a parameter to the callback func

function showCallFunc2(fn){
    const value = 50;
    fn(value)
}
showCallFunc2(function(value){
    console.log(value)
})

// Scope in JavaScript refers to the current context of the code , which determines the accessibility of the variables in javaScript

// There are two types of scopes in JavaScript.

// Global Scope variables are those declared outside of a block.

// Local Scope variables are those declared inside of a block.

let textMessage = "Hi" // Global variable
console.log(textMessage)

function showMessage(){
    let textMessage = "Hello" // local variable
    console.log(textMessage)
}
showMessage()

// exampple

// function greetInfo(){
//     return `Hello, my name is ${personn.name} & i am ${personn.age} years old.`
// }

// const personn ={
//     name : "John Doe",
//     age : 30,
//     greetInfo,
// }

// console.log(personn.greetInfo())

// another logical example;



const personn ={
    name : "John Doe",
    age : 30,
    greetInfo:function greetInfo(){
        return `Hello, my name is ${personn.name} & i am ${personn.age} years old.`
    },
}

console.log(personn.greetInfo())


// JSON stands for JavaScript Object Notation. It is a lightweight, text-based data interchange format that is easy to read and write. JSON is a standard format for exchanging data between web servers, web applications, and mobile apps.

//JSON is often used to transmit data between a server and a web application, or between different microservices in a distributed system. It is a popular choice for data exchange because it is:

// Human-readable: JSON data is easy to understand and work with, even for non-technical users.
// Platform-independent: JSON can be used on any platform, including Windows, macOS, and Linux.
// Language-independent: JSON can be used with any programming language, including JavaScript, Python, Java, and many others.

const personnn = {
    name:"John",
    age:30,
    isSubscribe:true,
    isMarried:true,
    children:false,
    cars:{
        "car1":"BMW",
        "car2":"Audi"
    },
    pets:true,
    address:{
        street:"123 Main Street",
        city:"New York"


    }

}
console.log(personnn) // Object 
const jsonString = JSON.stringify(personnn) // JSON conversion
console.log(jsonString)

// reverting back to object
const parsedObj= JSON.parse(jsonString)
console.log(parsedObj)

// dates and time 
let  date = new Date()
console.log(date)
// passing specific values to the date , year , month, day , hour , minutes , seconds , milliseconds
// date = new Date(2024, 5,10,12,30,0,0)
console.log(date)
//exttracting data from Date 

const year = date.getFullYear()
const month = date.getMonth()
const days = date.getDay()

console.log(`Year: ${year}`)
console.log(`Month: ${month}`)
console.log(`day: ${days}`)

console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleString())
console.log(date.toLocaleTimeString())


// to increase date 
date.setDate(date.getDate() + 90)
console.log(date)
// to decrease date 
date.setDate(date.getDate() - 90)
console.log(date)

// SetInterval

setInterval(()=> {
    console.log("Hello World, This function will be executed every 2secs")
},2000)

// setTimeOut

setTimeout(() => {
    console.log("This function will be executed after 3secs")
},3000)

// clearInverval

const interValid = setInterval(()=> {
    console.log("Hello World, This function will be executed every 1secs")
},1000)

setTimeout(()=> {
    clearInterval(interValid)
    console.log("interval Stopped")
},10000)

// Template strings , also know as template literals,
// are a feature in JavaScript that allows you to create a string with 
//embedded expressions, They are denoted by backticks `` instead of single or
// double quotes. Template strings provide a more flexible and conscise way to construct strings 
//, especially when they involve a variables or expressions.
console.log(`${4 + 4}`)
console.log(`This is template literal  
                                      I m sure you got it now `)
const fName ="Dev"
const lName="Oye"
console.log(`${fName} ${lName}`) // template literal
console.log(`${ ['One','Two','Three',4 ,5, 'six'] }`) // Array in Template literal
console.log(fName + " " + lName) // with traditional double or single quotes 

function info(){
    return "This function will be called inside Template literal"
}
console.log(`${info()}`) // execution

// Arrow functions, also know as fat arrow functions,
// are a concise and shorter way to define functions in JavaScript . 
// They were introduced in ES6  and provide a more compact syntax compared
//  to traditional function expressions

const greetingArrow = (username)=> {
    return `Hello ${username}!`
}
console.log(greetingArrow("Dev")) // execution

// Another example

// open and close bracket is needed for more than one parameter with curly braces if its not one line code
greetingArrow2 = username => `Hello ${username}!`;

console.log(greetingArrow2("Dev"))

// Another example with one line return 
const multi = n => n * 5;

console.log(multi(3))
// time out challenge

setTimeout(()=> {
    console.log("Hello World")
    setTimeout(()=> {
        console.log("Hello Dev")
        setTimeout(()=>{
            console.log("Hello Oye")
            setTimeout(()=> {
                console.log("Hello Nomsa")
                setTimeout(()=> {
                    console.log("Hello BoyBoy")
                },2000)
            },2000)
        },2000)
    },2000)
},2000)

// Enhanced object literals, introduced in ECMAScript 6 (ES6), 
// are a set of enhancements to the syntax for defining object in javaScript ,
// thise enhancements make it more convenient and concise to define object properties sand methods.


function user(name,age,work){
    return {
        name,
        age,
        work,
        intro(){
            console.log(`My name is ${name} & i am ${age} , work as a ${work}`)
        }
    };
}

const dev = user("oye", 30, "programmer")
const john = user("John", 20, "programmer")
// console.log(john.intro())
// console.log(dev.intro())

//Challenges
//

const lib = {
    sum: (a,b) => a + b,
    mult: (a,b) =>  a * b
    
}
console.log(lib.sum(3,6))
console.log(lib.mult(3,6))


// Default function parameters, introduced in ECMAScript 6(es6),\
// allow you to assing default values to function parameters, when a function is called ,
// and an argument is not provided for a parameter, the default value will be used instead .
// this feature makes it easier to handle cases where arguments might be missing or undefined.

function countTo5(count) {
    if (count === true) {
        for (let i = 1; i <= 5; i++) {
            console.log(`Count: ${i}`)
            }
    }
    
}
countTo5(true)


function ratings(rate){
    if(rate === 5) {
        console.log(`High Ratings :)`)
    }else if (rate === 0) {
        console.log(`Low Ratings :(`)
        
    } else {
        console.log(`Thanks for rating us :) `)
    }

}
ratings(4);

function multil(a, b = 1){
    return a * b
}
console.log(multil(5))


// The spread operator is a new addition to the set of operators in javaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make me shallow copies of js Objects.
// Using this is operator makes thhe code concise and enhances its readability.


function giveMe4(a,b,c,d){
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)

}

const colors = ['red', 'green', 'blue', 'purple']

giveMe4(...colors)

const strNums = ['one', 'two', 'three']
const moreStrNums = ['four', 'five', 'six']

const concat = [...strNums,...moreStrNums]
console.log(concat);

let peoples =['Dev','Web','Tex']
const allPeps =["kamar", ...peoples, 'John',"Doe",'Kemi','WebDev']
console.log(allPeps);

const obj1 ={e: 1, f: 2};
const obj2 = {g: 3, h: 4};
const obj3 = {...obj1, ...obj2};

console.log(obj3)



let clPerson ={
    name: 'Kamar',
    age: 25,
    gender:"male"
}
 const clone = {
    ...clPerson,
    work:'programmer'

 }
 console.log(clone)

 // 

 // The rest parameter syntax allows a function to accept an indefinite number of arguments.
 // as an array , providing a way to represent a variadic functions in JavaScript.

 function restParams(...userData){
    console.log(userData)
 }
 restParams("Dev", 19 ,"Programmer");


 function restParams(somethingelse,...userData){
    console.log(somethingelse)
    console.log(userData)
 }
 restParams("Dev", 19 ,"Programmer");

 function fPerson(firstName,lastName, ...hobbies) {
    console.log("First Name:", firstName)
    console.log("Last Name:", lastName)
    console.log("Hobbies:", hobbies)
 }

 fPerson("Dev", "Oye", "Programmer",40);



 //Destructuring allows us to "unpack" values from data-structures(arrays,Object)
 // into separate distinct variables.

 const des = ['One',"two", 'three']
//  console.log(des[0])
//  console.log(des[1])
//  console.log(des[2])
const [one,two,three] = des;
const [red,blue,green, yellow] = des;
console.log(green)

let y , z ;
[y= 5, z = 30] = [1]
console.log(y)

function g(){
    return [1,2]
}
let o, k;
[o,k] = g()
console.log(o)
console.log(k)

function r(){
    return  [1,2,3];
}

const [p , , q] = r() // ignoring value in destructuring 
console.log(p)
console.log(q)


// Assigning the rest of an array to a variable


const [s, ...t] = ["One", "Two", "Three", "Four"];
console.log(s);
console.log(t)

const student = {nameMe:"Dev", position: "SOC" , rollNo: 27 }
const {nameMe, position, rollNo} = student;
console.log(nameMe)
console.log(position)
console.log(rollNo)

const objectPerson ={
    name7: "Dev",
    age: 27,
    address: "Kolkata",
    hobbies: ["cricket", "football", "reading"]
    
}

// changing the name of the variable

const {name7:you, age, address ,hobbies} = objectPerson
console.log(objectPerson)
console.log(you)

//Object destructuring and rest operator

let {bale, ronaldo , ...rest} = {
    bale: "GK",
    ronaldo: "FW",
    messi: "MF",
    neymar: "FW",
    pique: "DF",
    varane: "DF",
    terstegen: "GK",
    dembele: "MF",
    pedri: "MF",
    griezmann: "FW",
}
console.log(rest)


// function destructuring 



const newPerson ={
    name: "Dev",
    age: 27,
    country: "USA"
}

function pringPersonInfo(){
    const {name, age, country} = newPerson
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`COuntry: ${country}`)
}

// Or 
function pringPersonInfo({name, age, country}){
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`COuntry: ${country}`)
}
pringPersonInfo(newPerson);




// menu setup 

let options= {
    title: "My Menu",
    items:["item1", 'item2']
}

function showMenu({title , width: w=100, height: h = 200,items:[item1,item2]}){
    console.log(`${title} ${w} ${h}`)
    console.log(item1)
    console.log(item2)
}

showMenu(options)

// nested destructuring

const songs = [
    {name: "Lucky you", singer:"Joyner", duration: 4.34},
    {name: "Lucky me", singer:"Gabriel", duration: 2.34},
    {name: "Lucky sir", singer:"Daniel", duration: 3.34},
    {name: "Owld you", singer:"Joy", duration: 7.34},
    {name: "Town you", singer:"Sender", duration: 1.34},
    {name: "Drag you", singer:"Mark", duration: 4.34},
];

const [, , , {singer: v}] = songs

console.log(v)
