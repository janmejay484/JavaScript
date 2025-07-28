// event ka mtlb hota hai koi action browser pr hua 
// event listner ka mtlb hota hai action ka reaction denaa

// let h1=document.querySelector("h1");
// h1.addEventListener("click",function(){
//     h1.style.color="red";
// })
 
// h1.addEventListener("dblclick", function(){
//     h1.style.color="blue"; 
// })

// how to remove eventlistner

// let p = document.querySelector("p")
// function dblclick(){
//     p.style.color="yellow";
// }

// p.addEventListener("dblclick",dblclick);
// p.removeEventListener("dblclick",dblclick);


// let inp = document.querySelector("input");

// inp.addEventListener("input",function(detl){
//     if(detl.data !==null){
//         console.log(detl.data);
//     }
// })


// change event tb clta hai jb hum input ya text area me change krte h

// let sel = document.querySelector("select");
// let h1= document.querySelector("#h1")
// sel.addEventListener("change",function(delt){
//     h1.textContent=`${delt.target.value} device selected`
//     console.log(delt.target.value)
// })


// let h1 = document.querySelector("h1")
// window.addEventListener("keydown",function(e){
//     if(e.key===" "){
//         h1.textContent="SPC";
//     }
//     else{
//        h1.textContent=e.key; 
//     }
    
// })

// custom file input button

// let btn = document.querySelector("#btn");
// let file = document.querySelector("#fileinp");

// btn.addEventListener("click",function(){
//     file.click();
// })

// file.addEventListener("change",function(delt){
//     // console.log(delt.target.files[0].name);
//     // btn.textContent=delt.target.files[0].name;
//     const files=delt.target.files[0];
//     if(files){
//         btn.textContent=files.name;
//     }
    
// })


// let form = document.querySelector("form");
// let inputs= document.querySelectorAll("input");
// let main= document.querySelector("#main");

// form.addEventListener("submit",function(delt){
//     delt.preventDefault();

//     let card=document.createElement("div");
//     card.classList.add("card");
//     let profile=document.createElement("div");
//     profile.classList.add("profile");

//     let img=document.createElement("img");
//     img.setAttribute("src",inputs[0].value);

//     let h3=document.createElement("h3");
//     h3.textContent=inputs[1].value;
//     let h5=document.createElement("h5");
//     h5.textContent=inputs[2].value;
//     let p=document.createElement("p");
//     p.textContent=inputs[3].value;

//     profile.appendChild(img);
//     card.appendChild(profile);
//     card.appendChild(h3)
//     card.appendChild(h5)
//     card.appendChild(p)
//     main.appendChild(card);

//     inputs.forEach(function(inp){
//         if(inp.type!=="submit"){

//             inp.value=""
//         }
//     })
// })


// mouseover and mouseout ka use huma karte hain event ke liye jb mouse hover krte hain
// mouseover and mouseout
// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor="yellow";
// })
// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor="red";
// })


// let abcd = document.querySelector("#abcd");
// window.addEventListener("mousemove",function(det){
//    abcd.style.top = det.clientY +  "px";
//    abcd.style.left = det.clientX + "px";
// });

// let abcd= document.querySelector("#abcd");
// abcd.addEventListener("click",function(dets){
//     console.log(dets);
    
// })
// dets is a event object 
// preventdefault is used to prevent the default behaviour of the event mainly hum form page me reload nhi krenge


// event bubbling and capturing 
// jispe event aayega agar uss pr listner nhii hua too hmara event uske parent pr listner dhundega aaisa krte krte upr ki trf move krega

// document.querySelector("#nav").addEventListener("click",function(){
// alert("nav clicked");
// });

// agr hum kisi pr click krenge agr uspe listner nhii hua to bubble kr ke parent pr jayega and so on


// let ul= document.querySelector("ul");
// ul.addEventListener("click",function(dets){
//     dets.target.style.textDecoration="line-through"
// })

// toggle event ka use hum toggle krne ke liye karte hain that means agr koi event lga hua hoga to hta dega and agr koi event nhi lga hua hoga to add kr dega

// capturing and bubbling means parent to child and child to parent ke liye karte hain 
// bubbling means parent to child ke liye karte hain mtlb child pr click krenge to parent pr jayega
// capturing means child to parent ke liye karte hain mtlb parent pr click krenge to child pr jayega

// jab bhi aap click krte hai to ya koi bhi event raise krte hai to aapka jo event flow do phase me clta h
// phase1: event top level element se neeche ki trf jata haii ise hum capture phase me clta hain by default off rhta hai 
// phase2: event parent element se neeche ki trf jata haii ise hum bubbling phase me clta hain


// capture phase me upr se neeche jata hai
// bubbling phase me neeche se upr jata hai

// let inp = document.querySelector("input")
// let span= document.querySelector("span");
// inp.addEventListener("input",function(){
//     if(20-inp.value.length<=-1){
//         span.textContent= 0;
//     }else{
//         span.textContent=20-inp.value.length;
//     }
    
    
// })









