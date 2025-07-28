// creation of the array

let arr=[1,2,3,4,5,6,7,8,9,10];
let a = new Array(1,2,3,4,5,6,7,8,9,10);
 console.log(arr[5]); // should return 6

 // modify the array
 arr[0]=100;
 console.log(arr[0]); // should return 100

 // array methods
 console.log(arr.length); // should return 10
 console.log(arr.indexOf(100)); // should return 0
 console.log(arr.includes(100)); // should return true
 console.log(arr.join(" ")); // should return 1 2 3 4 5 6 7 8 9 10  
 // what is this use of join method? it is used to join all the elements of an array into a string with a specified separator
 console.log(arr.toString()); // should return 1,2,3,4,5,6,7,8,9,10
 // what is this use of toString method? it is used to convert the array into a string
 console.log(arr.pop()); // should return 10 and remove the last element from the array
 console.log(arr.push(11)); // should return 11 and add the element to the end of the array
 console.log(arr.shift()); // should return 1 and remove the first element from the array
 console.log(arr.unshift(0)); // should return 0 and add the element to the beginning of the array
 
let array=[1,2,3,4,5];
console.log(array.splice(0,2)); // should return [1, 2] and remove the first two elements from the array
console.log(array); // should return [3, 4, 5] after the splice operation
// jb hum splice method use karte hai to yeh original array ko change karta hai, aur ek naya array return karta hai

// slice method is used to extract a section of an array and return a new array without modifying the original array

let ab=[1,2,3,4,5];
console.log(ab.slice(1,4)); // should return [2, 3, 4] and remove the first two elements from the array
console.log(ab); // should return [1, 2, 3, 4, 5] after the slice operation
// jb hum slice method use karte hai to yeh original array ko change nahi karta hai, balki ek naya array return karta hai


// sorting an array sort method ek function return karta hai jo decide krta hai ki array ke elements ko kaise sort kiya jayega
// by default, sort method elements ko string ke roop me compare karta hai, isliye agar hum numbers ko sort karte hai to hume custom compare function dena padta hai
let arr1=[5,14,3,22,1];
console.log(arr1.sort(function(a,b){
    return a-b;  
    // should return [1, 3, 5, 14, 22] in ascending order
    return b-a; 
    // should return [22, 14, 5, 3, 1] in descending order
})); 


// foreach, map , filter , sort, reduce methods ye sb function ko accept karte hai aur array ke elements par operate karte hai
// foreach method is used to iterate over each element of the array and perform a specified action
let arr2=[1,2,3,4,5];
arr2.forEach(function(val){
    console.log(val+5); // should return 6, 7, 8, 9, 10 
})

// map method hum tb use krte hai jb hume nya array create krna hota hai jo ki original array ke elements par kuch operation perform karke create hota hai
// map jo new array return krta hai uska size original array ke size ke barabar hota hai
// agr map ko hum kch return nahi karte hai to yeh undefined return karega ek array ke roop me of same size as the original array
let arr3=[1,2,3,4,5];
let ansarray=arr3.map(function(val){
    // return val * 2; // should return [2, 4, 6, 8, 10]
    if(val%2===0) return val * 2; // should return [undefined, 4, undefined, 8, undefined]
    // if the condition is not met, it will return undefined for that element
});
console.log(ansarray);

// jb bhi aapko aaisa case mile jha pr ek array se nya array create hona hai and vo nya array original array ke elements par kuch operation perform karke create hota hai to aap map method use kar sakte hai

// filter method is used to filter the elements of an array based on a specified condition
// filter method ek naya array return karta hai jo ki sirf un elements ko contain karta hai jo condition ko satisfy karte hai
let arr4=[1,2,3,4,5];
let ansarray2=arr4.filter(function(val){
    return val%2 ==0; // should return [2, 4]
})
console.log(ansarray2); 

// filter method usi value ko nye array me rkhega jo ki condition ko satisfy karte hai
// filter method ek naya array return karta hai jo ki sirf un elements ko contain karta hai jo condition ko satisfy karte hai


// reduce method is used to reduce the array to a single value by applying a specified function to each element
// reduce method ek accumulator value ko maintain karta hai jo ki har iteration me update hota hai
// reduce method do argument leta hai, pehla accumulator value aur dusra current value
let arr5=[1,2,3,4,5];
 let ans=arr5.reduce( function sum(accumulator,val){
    return accumulator + val; // should return 15
  },0); // initial value of accumulator is 0
console.log(ans);