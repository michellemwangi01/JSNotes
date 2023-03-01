//this  keyword in standard functions refers to the element being pointed at.


console.log("mama");

let btnEl = document.getElementById("clickMeButton");
btnEl.addEventListener("click", ()=>{
    console.log(this);//whe using an arrow funtion, 'this' key word here refers to the window.
})

btnEl.addEventListener("dblclick", function(){
    console.log(this);//this key word refers to the element being pointed at, in this case the btnEl
})

//applies in all cases, e.g when using objects - 
//1.Standard function
let person ={
    age: 20,
    name: 'Amirah',
    tellMeAboutYourself: function() {
        console.log(this);
    }
}
person.language();

//2. Arrow function
let pet = {
    name: 'Rex',
    type: 'dog',
    tellMeAboutYourself: ()=>{
        console.log(this)
    }
}
pet.tellMeAboutYourself();