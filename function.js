
// rest parameter is used to represent an indefinite number of arguments as an array
// it is used to collect all the arguments passed to a function into an array
// it is defined by using the ... operator before the parameter name

const { get } = require("mongoose");

// it allows us to pass any number of arguments to a function without having to define them individually
const fun=function(...val) {
    // console.log(val); 
    // Output: [1, 2, 3, 4, 5, 9, 7, 85]
    

    
}
fun(1,2,3,4,5,9,7,85)


function fn(){
    return 12;
}

let val;
val=fn();
// console.log(val);

// first class function ek aisa function hota hai jo ki value ki tarah treat kiya ja sakta hai
// isse kisi aur function ko argument ki tarah pass kiya ja sakta hai, kisi function se return kiya ja sakta hai, ya kisi variable ko assign kiya ja sakta hai
// JavaScript me, functions ek first class citizen hai, matlab yeh kisi bhi value ki tarah treat kiya ja sakta hai
 function firstClassFunction(val) {
val();
 }

 firstClassFunction(function() {
    // console.log("This is a first class function");
 });

 // higher order function is a function that takes one or more functions as arguments or returns a function as its result
// it is a function that operates on functions, either by taking them as arguments or by returning them
// high order function hota hai jo function ko as an argument leta hai ya function return karta hai
 
function hof(val){
    val();
}
hof(function() {
    // console.log("This is a higher order function");
});

function hof1(){
    return function() {
        // console.log("This is a higher order function that returns a function");
    }
}


// pure function jo bhar ki state ko change nahi karta hai, aur same input par same output deta hai
// pure function ka koi side effect nahi hota hai, matlab yeh function ke bahar koi bhi state change nahi karta hai
// impure function jo bhar ki state ko change karta hai, ya same input par different output deta hai
// impure function ka side effect hota hai, matlab yeh function ke bahar koi bhi state change karta hai

let b =10;
function pureFunction() {
    // console.log("This is a pure function");
}
pureFunction();
function impureFunction() {
    b = 20; // changing the state of b
    // console.log("This is an impure function");
    // console.log(b);
    
}
impureFunction();
// console.log(b);



//closure -> ek function ke andar dusra function hota hai, jo ki outer function ke variables ko access kar sakta hai
// ek function jo return kre ek aur function aur returned function ke andar outer function ke variables ko access kar sakta hai

// closure example
// ek function jo return kre ek aur function aur returned function ke andar outer function ke variables ko access kar sakta hai
function closureExample(){
    let count=0;
    return function() {
        count++;
        // console.log("Count is: " + count);
    }
}

// lexical scope -> ek function ke andar dusra function hota hai, jo ki outer function ke variables ko access kar sakta hai
// lexical scope ka matlab hai ki ek function ke andar dusra function hota hai, jo ki outer function ke variables ko access kar sakta hai

// lexical scope example
// ek function ke andar dusra function hota hai, jo ki outer function ke variables ko access kar sakta hai koi bhi variabke apne function ke bahr access nahi kar sakta hai
// lexical scope example
function lexicalScopeExample() { 
    let a=12;
     function abc() {
        let b=10
        // console.log("Value of a is: " + a);
        function cde() {
            let c=20;
            // console.log("Value of b is: " + b);
        }
    }
}


// IIFE -> Immediately Invoked Function Expression
// jb bhi hum private variables ko create karna chahte hain, ya kisi function ko turant invoke karna chahte hain, tab hum IIFE ka use karte hain
// IIFE ek function hota hai jo ki turant invoke hota hai, bina kisi naam ke
// IIFE ka use global scope me variables ko pollute hone se rokne ke liye kiya jata hai
// IIFE ka use closure ke saath bhi kiya jata hai, taaki outer function ke variables ko access kiya ja sake
(function iifeExample() {
//  console.log("This is an IIFE example");
})(); // IIFE is invoked immediately


// hoisting -> JavaScript me function declaration ko hosting kiya jata hai, matlab function declaration ko top pe le aaya jata hai
// isse function declaration ko kisi bhi jagah se call kiya ja sakta hai, chahe function declaration ke niche hi kyun na ho
// lekin function expression ko hosting nahi kiya jata hai, matlab function expression ko sirf usi jagah se call kiya ja sakta hai jahan par wo define kiya gaya ho
// isse function expression ko kisi bhi jagah se call kiya ja sakta hai
 hoistingExample();
function hoistingExample() {
    // console.log("This is a hoisting example");
}

// hoistingExample2();
 // This will throw an error because hoistingExample2 is a function expression
// hoistingExample2(); // Uncommenting this line will throw an error because hoistingExample2 is not hoisted
let hoistingExample2 = function() {
    // console.log("This is another hoisting example");
}

// use rest parameter to accept any number of score and return the total score

function calculateTotalScore(...scores) {
    let total =0;
    scores.forEach(function(val){
        total= total+val;
    })
    // console.log(total);
    return total;
}
calculateTotalScore(10, 20, 30, 40, 50); // should return 150

 function checkAge(age){
    if(age<18) return "You are not eligible to vote";
    return "You are eligible to vote";
 }
 console.log(checkAge(16)); // should return "You are not eligible to vote"
 console.log(checkAge(20)); // should return "You are eligible to vote"

 function f(){
    return;
 }
 console.log(f());
// This will log undefined because the function does not return anything
// If you want to return a value, you need to explicitly return it, like this:
// function f() {
//     return "Hello";      
// }    
// console.log(f());    // This will log "Hello"

// pass a function as an argument to another function and call it inside the second function
// function fn(val){
//     val();
// }
// fn(function(){
//     console.log("This is a function passed as an argument");
    
// });
 
// what are the higher order functions

function abc(){
    return function() {
        console.log("This is a higher order function that returns a function");
    }
}
console.log(abc()); // This will log the function definition, not the result of calling it

// what is closure
function abc(){
    let val=0;
    return function() {
        val++;
        console.log("Count is: " + val);
    }
}

// what is the use of iife name one real world example
let iife =(function(){
    let score=0;
    return{
        getScore: function() {
            console.log(score);
    },
    setscore:function(val){
        score=val;
    }
};
})();