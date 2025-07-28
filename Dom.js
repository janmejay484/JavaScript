// dom manipulation
// html se element select krna
// text ko change krna
// element ko add krna, remove krna, update krna
// css bdlna , attribute bdlna
// event listeners add krna

// let h1 = document.getElementById("h1");
// console.log(h1);


// most of the time we use querySelector instead of getElementById
// querySelector is more specific than getElementById
// querySelector is used to select the first element that matches the selector

  // let abc = document.querySelector("h1");
  // console.log(abc);

// queryselectorall is used to select all elements that match the selector
  // let allH1 = document.querySelectorAll("h1");
  // console.log(allH1);

  // textContent is used to change the text of an element

  let text = document.querySelector("h1");
  text.textContent = "Hello World";
  // text.innerHTML = "<b>Hello World</b>"; // innerHTML is used to change the HTML of an element
  console.log(text.textContent);

  //innerHTML is used to change the HTML of an element aap isme html bhi daal skte ho 
  // text.innerHTML = "<b>Hello World</b>"; // innerHTML is used to change the HTML of an element
  // console.log(text.innerHTML);

  // text.hidden = true; // hidden is a boolean attribute that hides the element
// attribute manipulation
  let a= document.querySelector("a");
  a.textContent = "Click me";
  // a.href = "https://www.google.com"; // href is used to change the link of an element
  // a.setAttribute("href","https://www.google.com"); // setAttribute is used to set the attribute of an element
  a.getAttribute("href"); // getAttribute is used to get the attribute of an element
  console.log(a.getAttribute("href"));

  a.removeAttribute("href"); // removeAttribute is used to remove the attribute of an element
  console.log(a.getAttribute("href")); // this will return null because href is removed
  let img=document.querySelector("img");
  img.setAttribute("src","https://images.unsplash.com/photo-1751378639381-e482ae167e39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"); // set


// dynamic dom manipulation

// hum html element ko create kr skte hain js jo webpage pr dikhega
// createElement is used to create a new element
  let newH1 = document.createElement("h1");
  newH1.textContent = "New Heading"; // textContent is used to set the text of the new element
  // document.body.appendChild(newH1); // appendChild is used to add the new element to the body
  // document.body.prepend(newH1); // insertBefore is used to insert the new element before the first h1 element
  console.log(newH1);
  // document.body.removeChild(newH1); // removeChild is used to remove the new element from the body
  document.querySelector("body").append(newH1); // appendChild is used to add the new element to the body

// append krne se last me add hota hai and prepend krne se first me add hota hai

// js se css change krna 

let h1 = document.querySelector("h1")
// h1.style.color="red";
// h1.style.backgroundColor="blue";

// javascript se kaise class add krna 

 h1.classList.add("hulu");
 h1.classList.remove("hulu"); // .remove is used to remove the class
 h1.classList.toggle("hulu"); // .toggle is used agr class lagi hai to hta dega and agr class nahi hai to add kr dega
 h1.classList.contains("hulu"); // .contains is used to check if the class is present or not

 // basic question related to the dom

 let a = document.querySelector("a");
 a.addEventListener("click",function(){
    console.log("clicked");
 })


// dom represent the html as a tree 
// types of node in dom tree element node, text node, comment node, document node
// difference between the element node and text node is that element node can have children and text node can not have children
// element node can have attributes and text node can not have attributes
// element node can have content and text node can not have content
// element node can have properties and text node can not have properties
// <p> lorem two threee </p> where p tag is  element node , lorem two threee is text node



// what is the difference between getelementbyid and queryselector
// getElementById is used to get an element by its id, whereas querySelector is used to get an element by its tag name, class name, or attribute name even id also .

// getelementbyclassname actual return the htmlcollection not a classname. 







