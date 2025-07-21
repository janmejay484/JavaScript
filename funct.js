// greet();
// function greet(){
//     console.log("Hello");
// }
// successfully run the code
var greet = function(){
    console.log("Hello");
}
// give error because function declaration is hoisted but function expression is not

// write  a function to calculate the bmi

function bmi(weight, height) {
    return weight / (height * height);
}
console.log(bmi(57, 1.7).toFixed(2)); // should return 22.86


// discount calculator using high order function
// This function returns another function that calculates the price after applying a discount
function discountcalculator(discount){
    return function(price){
        return price- price*(discount/100);
    }
}
 let discounter= discountcalculator(10); // it is reusable 
console.log(discounter(100)); // should return 90

// another method to solve this problem 

 function discountcalci(price, discount){
    return price - (price * (discount / 100));
 }
 console.log(discountcalci(100, 10)); // should return 90
 

 function counter(){
    let count=0;
    return count++;
 }
 console.log(counter()); 
 console.log(counter());
// this will log 0 and then 0 again because the count variable is reset to 0 every time the function is called
// to maintain the count across multiple calls, we can use a closure to store the count variable 

 function count(){
    let count =0;
    return function(){
        return count++;
    }
 }
 let c= count();
    console.log(c()); // should return 0
    console.log(c()); // should return 1
    console.log(c()); // should return 2

let d= count();
console.log(d()); // should return 0
console.log(d()); // should return 1 

// isme c and d dono alag alag closure hai, isliye dono ka count alag alag hai


// create a pure function to transform a value 

function double(value){
    return value * 2;
}
console.log(double(5)); // should return 10

// create an impure function to transform a value
let x = 5;  
function triple() {
    x = x * 3;
    return x;
}
console.log(triple()); // should return 15

// pure function vo function hota hai jo ki same input par same output deta hai aur kisi bhi exeternal variable ko change nhi krta hai 
// impure function vo hota hai jo ki kisis bhi ecternal variable ko change krta jata hai ya same input par different output deta hai

// by using iife create a isolate variable 

(function(){
    let password= "secret password";
    console.log(password);
    
})();

// iife ka use karke hum private variables create kar sakte hain, jo ki function ke bahar access nahi kiye ja sakte
// iife ka use karke hum kisi function ko turant invoke kar sakte hain, bina kisi naam ke


// notes

// higher order function vs closure

// hof -> ek function hai jo dusre function ko return krta hai ya dusre function ko argument ke roop me leta hai
// closure -> ek function hai jo dusre function ke andar hota hai aur outer function ke variables ko access kar sakta hai