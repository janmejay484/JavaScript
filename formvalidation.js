let form=document.querySelector("form");
let nm= document.querySelector("#name");

form.addEventListener("submit",function(e){
    e.preventDefault();
    if(nm.value.length<=2){
        document.querySelector("#hide").style.display="initial";
    }
    else{
        document.querySelector("#hide").style.display="none";
    }
})

// email and password validaion 
// redex ka use karte hai jo ki koi bhi pattern ko match krne ke liye karta hai

// const emailredex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const passwordredex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// phir hum ko email and password ko match krne ke liye regex ka use karenge
// emailredex.test(email);
// passwordredex.test(password);
