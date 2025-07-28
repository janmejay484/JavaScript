// setTimeout(() => {
//    console.log("hello"); 
// }, 5000);
// settimeout ka use hum time delay krne ke liye karta hai ye ek hi bar clta haiii

// setinterval ka use hum interval ke liye karta hai mtlb her timelimit me repeat krega khud ko

// setInterval(() => {
//     console.log("hello bro ");
// }, 5000);

// cleartimeout interval ko rokne ke liye krte haiii
// let count=10
// let interval =setInterval(() => {
//     if(count>=1) {
//         count--;
//         console.log(count);
//     }
//     else{
//         clearInterval(interval)
//     }
// }, 3000);

// local storage -> aapke browser ke andr data store krna jo ki browser band hone par bhi delete nhii hogaaa
// session storage-> ye aapka data temporary store krta hai, matlab browser band hone par delete hoga
// cokkies -> aapke browser ke andr data store krta hai, matlab browser band hone par delete hoga

// localStorage.setItem("name","janmejay")
// console.log(localStorage.getItem("name"));

sessionStorage.setItem("name","janmejay")
console.log(sessionStorage.getItem("name"));