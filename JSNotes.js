//JS comment


/*...*/

//VARIABLES

var myName = "Mich";
myName = 8;
console.log(myName);

var produxt = 10/2;
console.log(produxt )

console.log("I wanted to tell \"her\" about rhe time i saw her moyer while i was \"trying\" to sjop")
;
console.log("What is my name? \n\tMy name is 'Michelle'. \n\\What is your name? \r\n\tMy name is 'Mira' \bpfftttt");

var myNames = "Michelle" + " Mwangi";
console.log(myNames)

var myMansNames = "Bisinle";
myMansNames += " Daud"
console.log("My mans Name is name "+myMansNames)


var myArray = [1,2,3,4];
//console.log(json.stringify (myArray))

function nextInLine(arr, item){
    arr.push(item);
    console.log(item);
}

nextInLine(myArray, 100)


//-------------IMPLICIT & EXPLICIT CONVERSION-------------
//--IMPLICIT

console.log('4' - '2')  
console.log('4' * '2')
console.log('4' / '2')
console.log('4' - true) 

//--EXPLICIT - we use the variabletypename(variable) to perform explicit conversion
let result;

// string to number
result = Number('324');
console.log(result); // 324

// boolean to number
result = Number(true);
console.log(result); // 1

//number to string

result = String(324);
console.log(result);  // "324"

//----------STRICT EQUAL - tests whether the 2 values are equal and of the same type
console.log(5==='5') //false
console.log(5===5) //true

//-----------------JAVASCRIPT If...Else-----------------
let marks = prompt("Enter your marks: ")
if(marks > 50){
    let grade = 'A'
    console.log(grade)
}
else{
    let grade = 'B'
    console.log(grade)

}

//------------------NESTED IF...ELSE....
var grade = 75
if(grade > 50){
    if(grade > 60 && grade < 70){
        console.log("YOu have Passed with Grade B")
    }
    else if (grade > 70 && grade < 80){
    console.log("YOu have Passed with Grade B+")
    }
    else if (grade > 80){
        console.log("You have Passed with a straight A")
    }
    else{
        console.log("You have just passed")
        
    }
}
else{
    console.log("You have Failed honey")
}
//---------------------TERNARY OPERATOR-------------
let num = -10
result = (num < 0)? "negative num":"positive num"
console.log(result)

//---------------------NESTED TERNARY OPERATOR-------------
let num2 = 20
result2 = (num2 >= 0) ? ((num2 == 0 )? "equal to zero" : "positive") : "negative"
console.log(result2)

//-----------FOR LOOP-------------
//for loop is usually used when the number of iterations is known
for (let i = 1; i<5; i++){
    console.log("print this " + i +" times")
}

let sum = 0;
for(i=1; i>0; i++){
     sum += i;
    console.log(sum)
}

//-----------WHILE LOOP-------------
//for loop is usually used when the number of iterations is NOT known
let x = 0;
while (x <10){
    x++;
    console.log("Bahebik shadid " + x)
}

//-----------DO WHILE LOOP-------------

let x2 = 0
do{
    console.log("Bahebik shadid " + x2)
    x2++;
} while (x2 < 10)


//BREAK & CONTINUE
//break statement terminates the loop entirely
//continue statement terminates the current iteration
let summ = 0
let number = 0

for(i = 0; i < 10; i++){
    if(i % 2 == 0){
        summ += i   
    }
    else{
        continue
    }
    console.log(summ)
}


// program to calculate positive numbers only
// if the user enters a negative number, that number is skipped from calculation
let summ = 0


for(i = 0; i < 10; i++){
    if(i % 2 != 0){
        summ += i   
    }
    else{
        continue
    }
    console.log(summ)
}

//SWITCH CASE
x = 65
switch (x){
    case 55:
        console.log("Grade is D")
        break;

    case 65:
        console.log("Grade is C")
        break;
    default:
        console.log("who knows")    
    }


//Simple calculator using switch
//ask user what they 
var result2 = 0;
const operator = prompt("What would you like to do? \n addition + \n subtraction - \n multiplication * \n division /")
const operand1 = prompt("Enter the 1st number:")
const operand2 = prompt("Enter the 2nd number:")

switch(operator){
    case '+':
        Float(result2) = Number(operand1) + Number(operand2)
        console.log( `${operand1} + ${operand2} = ${result2}`)
        break;

    case '-':
        Float(result2) = Number(operand1) - Number(operand2)
        console.log( `${operand1} - ${operand2} = ${result2}`)
        break;

    case '/':
        Float(result2) = Number(operand1) / Number(operand2)
        console.log( `${operand1} / ${operand2} = ${result2}`)
        break;

    case '*':
        Float(result2) = Number(operand1) * Number(operand2)
        console.log( `${operand1} * ${operand2} = ${result2}`)
        break;

    default:
        console.log("Invalid numbers")
        break;

}


//--------------------------JS FUNCTIONS-----------------------
//you can save a whole function into a variable and then call the variable, instead of the function name while passing an argument into it. This is called an anonymous function
mySumFunc = function summation(num1){return num1+num1};
console.log(mySumFunc(5))


//-----------variable scope
//when a variable is declared inside a function, it has local scope
//when a variable is declared outside a function, it has global scope
//when a variable is declared without the var keyword, it gets gloabl scope
//when a variable is declared inside an if statement, then it is a block-scoped variable. It can be accessed only inside that statement block.

//let doesn't allow to redeclare Variables. A variable declared with var can be redeclared again. For example,
var a = 5; // 5
var a = 3; // 3
console.log(a)

//let doesnt allow the same thing
let b = 30;
let b = 76;
var b = 76;

//VAR ALLOWS JS HOISTING, let and const do not
//means that let & const have to be initialized before use while var does not
console.log(a);
let a;//gives reference error

console.log(a)
var(a);//does not return an error, just returns value as undefined


//--------------------------RECURSIVE FUNCTIONS---------------------
//recursive Factorial
function recursiveFactorialFunc( myNumber){
    if (myNumber == 0){
        return 1;
    }
    else{
        return myNumber * recursiveFactorialFunc(myNumber-1)
    }

}
var myNumber = 10;
console.log(`Factorial of ${myNumber} is ${recursiveFactorialFunc(myNumber)}`);

//recursive countdown
function countDownFunc(myNumber){
    if(myNumber < 0){
        console.log("The End!") 
    }else{
        console.log(myNumber)
        let myNumber2 = myNumber - 1
        return ( countDownFunc(myNumber2) );
    }
}
var myNumber = 10;
countDownFunc(myNumber)

//--------------OBJECT DATATYPES------------------
//this object datatype, also called an object literal is used to creat just one object while constructors are used as templates that can create many objects.
var person = {
    name: 'mich' ,
    age: 22,
    hobbies: ['eating', ' chilling', ' coding'],
    language: function (){//objects can contain methods inside of them as well
        console.log("I speak Arabic!!!")
    },
    myHobbiesFunc: function(){
        console.log(`My hobbies are ${this.hobbies}`)//'THIS keyword is used by a method in an object in to access a property of the same object '
    }

}
console.log (person.myHobbiesFunc())

console.log(person)
console.log(typeof(person))

console.log(person.age = 29)
console.log(person.name)

console.log(person["age"])
console.log(person["name"])


person.language();

const student = {
    name: "Rio",
    rollNumber: 293343,
    totalMaks: 432,
    individualMarks: {//nested objects
        LinearAlgebra: 92,
        statistics: 89,
        AdvancedProgramming: 88
    },
    get getName(){
        return this.name;
    },
    set setName(newName){
        this.name=newName
    }
    
};
student.setName = 'Samantha'
console.log(student.name)

function printStudentInfo(){
    console.log("Name: "+student.name)
    console.log("rollNumber: "+student.rollNumber)
    console.log("totalMaks: "+student.totalMaks)
    console.log("individualMarks: "+student.individualMarks)
    console.log("LinearAlgebra: "+student.individualMarks.LinearAlgebra)
    console.log("GetName from getter property: "+ student.getName)
    student.setName = 'Samantha'
    console.log(student.name)

}
printStudentInfo()

console.log('rollNumber' in student)

console.log(checkGrade(30))

//special comparison operator
console.log((5 > 3) ? "true" : "false")

//2nd function checks if the student passed the exam or not depending on if the student marks are >40 or <40
function checkGrade(mark){
    result = (mark > 40) ? 'pass' : 'fail'
    return result;
}


//------------JAVASCRIPT CONSTRUCTORS--------------------------
//constructor is a function that is used to create objects and give them default values.
//unline an object datatype or an object literal which is used to create just one object, constructors are used as templates that can create many objects.
function Person(){
    this.name = "Mira"
    this.age = 18
    this.height = 5.3
}

const p1 = new Person()//has been assigned the default values, otherwise those values remain undefined if no default is assigned
console.log(p1.age)

function Student(){
    this.name;
    this.age = 18;
    this.course;
    this.grade;
    this.units = ['MATH 330','MATH 211', 'MATH 104'];
  
};



const s1 = new Student();
console.log(s1.course = "Computer Information Science")
console.log(`${s1.name='Mira'} takes 3 units this sem including ${s1.units}`)

const s2 = new Student();
console.log(`${s2.name = 'Sam'} scored an ${s2.grade ='A'} in all his courses which are ${s1.units}`)

const s3 = new Student();
s3.balance = 12000;//you can also add a new property or method unique to a specific object.
s3.language = function(){
    console.log("I speak french")
}
console.log(`S2 balance is + ${s3.balance} +  and she speaks + ${s3.language()}`)

console.log(s3.language())

console.log(s1.prototype)

//--------------------JS ARRAYS-------------------
let myArray = [12,34,56, 'string', 'character']

myArray.push(23)//PUSH adds elemets to the end of the array
myArray.push('martin')
console.log(myArray)

myArray.pop()//removes the last element of the array
console.log(myArray)

myArray[0] = 'number'//changing an element of an array
console.log(myArray)

myArray.shift()//removes the first element of the array pushing the rest leftward to fill its position
console.log(myArray)

arrayLen = myArray.length//gives the number of elements in the array
console.log(arrayLen)

let myArray2 = new Array(5);
myArray2 = [12,3,4,45,90] 
//console.log(myArray.concat( myArray2))//join two arrays

console.log(myArray2.indexOf(12))

console.log(myArray2.unshift("mirio"))//adds a new element to the front of the array and returns the new length of the array


//-------------------------JS STRINGS---------------------------
let myStringObject = new String(); //string as an object
myStringObject = "     I am a frontend web developer    "
myStringString = "or am I a backend web developer?"
console.log(typeof myStringObject)
console.log(typeof myStringString)

//methods of strings
console.log(myStringObject.charAt([10])) //charAt
console.log(myStringObject.concat(myStringString))//concat
console.log(myStringObject.replace('developer', 'coder'))//replace
console.log(myStringString.split(' '))//split the string at the specified character
console.log(myStringString.substr(0,6))//returns string from index 0-5
console.log(myStringObject.toUpperCase())//returns uppercase
console.log(myStringObject.toUpperCase().trim())//removes whitespace from string
console.log(myStringObject.includes('developer'))
console.log(myStringObject.search('developer'))


//--------------JS FOR...IN LOOP--------------------
//this loop allows iteration over all PROPERTY KEYS of an object.
const Cars ={
    make :'toyota',
    year :2016,
    model: '4 wheel',
    type :'van',
}

for(let key in Cars){
    console.log(`${key} => ${Cars[item]} `)
}


//for in with strings - loop through letters
myString = "Best become ninja at this";
for(item in myString){
    console.log(myString[item])
}

//for in with strings - loop through words
myString = "Best become ninja at this";
newString = myString.split(" ")
for(item in newString){
    console.log(newString[item])
}


//for...in with arrays - loop through array elements
myGradeArray = ['A','B','C','D','E', 'F']
for (grade in myGradeArray){
    console.log(`Your grade is ${myGradeArray[grade]}`)
}
  

//--------------------JS FOR...EACH LOOP-------------------------
//this loop is used to call a function that is to be run for each element of the array
function myFactorialFunc(myNum){
    if(myNum == 0){
        return 1;
    }
    else{
       return factNum = ( myNum * myFactorialFunc(myNum - 1))
    } 
    
}
//method #1 - define the anonymous function while calling it in the for each
myNumberArray = [12,3,4,6,8]
myNumberArray.forEach(function(myNum){
    console.log(myNum * 20)
});

//Method #2 - define the function prior and call it in the for each
myNumberArray = [12,3,4,6,8]
function multiplyItem(item){
    console.log(item *20)
}
myNumberArray.forEach( multiplyItem);

//Method #3 - use an arrow function to call the anonymous function in method#1
myNumberArray = [12,3,4,6,8]
myNumberArray.forEach((myNumber) => {
    console.log(myNumber * 20)
})

//---------------ARROW FUNCTIONS----------------------
//arrow functions do not need parenthesis when passing just one parameter
const arrowFunc = (a, b) => {
    console.log(a+b);
}
arrowFunc(10,20);

//-------THIS keyword in arrow functions:-------------
//1. IN standard functions, it refers to the element being pointed at.
btnEl.addEventListener("dblclick", function(){
    console.log(this);//this key word refers to the element being pointed at, in this case the btnEl
})

//2. In arrow functions, it refers to the entire window because the arfument was not passed inside the function which hasnt been named anyway, so it will consoleLog the value of 'this' on the page.
let btnEl = document.getElementById("clickMeButton");
btnEl.addEventListener("click", ()=>{
    console.log(this);//whe using an arrow funtion, 'this' key word here refers to the window.
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

//concise arrowFunc without using parenthesis
//when passing ONLY one argument as a parameter in our func (as in example 1 below), in our case, a, we do not need to use brackets
const myArrowFunc = a => console.log(a*4); //#1
const myArrowFunc2 = (a) => console.log(a*4); //#2
const myArrowFunc3 = (a, b) => console.log(a*b); //#3
myArrowFunc(12);
myArrowFunc2(23);
myArrowFunc3(12,34);

//JS TRY CATCH BLOCK
const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}

//-------------JS CLASSES-------
class Rectangle{
    constructor(width, height, color){
        //object properties
        console.log("creating this object")
        this.width = width;
        this.height = height;
        this.color = color;
        
    }
    //object methods
    getArea (){
        return this.width * this.height;
    }
    printDetails(){
        console.log(`I am a rectangle with dimensions:\n width -${this.width} \n height - ${this.height}`)
    }
    //getter methods
    get perimeter(){
        return (this.width + this.height)*2
    }
    //setter methods
    set RectangleWidth(new_width){
        this.width = new_width;
    }
    set RectangleHeight(new_height){
         this.height = new_height;
       
    }
    set RectangleColor(new_color){
        this.color = new_color;
    }

}
let myRect1 = new Rectangle(12, 23, 'blue');
let myRect2 = new Rectangle(34, 45, 'red');
console.log(myRect1.getArea());
myRect1.printDetails();
console.log(myRect1.perimeter); //notice how it does not need to be invoked like a function but like a property

myRect1.width(98);
myRect1.height(87);
myRect1.color('maroon')
console.log(myRect1.Rectanglewidth);
console.log(myRect1.height);
console.log(myRect1.color);

//----------DEFAULT PARAMETERS-------------------
//allows you to pass default parameters into a function. these are defaultly used when no paramenter are explicitly specified when calling the function
function sum(x=7, y=9, z=x+y) {
    return x+y
}

console.log(sum())//result = 16
console.log(sum(11))//result = 20
console.log(sum(10,21))//result = 31

//expresisons can also be passed as default parameters
function product(x=12, y=12, z=x*y) {
    return z
}
console.log(product())//result = 144

//------------------------SPREAD OPERATOR------------
const numsArray = [1,2,3,4,5];
console.log(numsArray)
console.log(...numsArray) //In this case, this code is equivalent to: console.log('My', 'name', 'is', 'Jack');

console.log(...numsArray, 6,7,8,9)

//cloning Arrays - a change in one is also affected on the other
let numsArray2 = numsArray;
numsArray2.push(12,23)
console.log(numsArray2)
console.log(numsArray)

//copying arrays - a change in one does not affect the other
let numsArray3 = [...numsArray2]
numsArray3.push(67)
console.log(numsArray3);
console.log(numsArray2);

//-----------------SPREAD OPERATORS WITH OBJECTS ------------------
const obj1 = { 
    x : 1,
     y : 2 
    };
const obj2 = { 
    z : 3 
    };

// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};

console.log(obj3); // {x: 1, y: 2, z: 3}

//----------------------REST PARAMETER----------------
function restFunc(...args){
 console.log(args)
}
restFunc(12,23,45,43)

//----------------JS MAPS-----------------
// create a Map
const map1 = new Map(); // an empty map
console.log(map1); // Map {}

//SET - Inserting elements into a map
map1.set('name', 'amirah')
map1.set('age', '20') 
map1.set('color', 'red')
for(let [key,value] of map1){
    console.log(key + ' - ' + value);
}
console.log(map1[0])

//--------------------FOR...IN----------------------------
let myArray9 = [12,23,45,67]
for (element in myArray9){
    console.log(myArray9[element])
}

//GET- return map values
console.log(map1.get('name'))
console.log(map1.size)

//----------------------ARRAY DESTRUCTURING----------------------------
//allows assigning object properties or array elements to individual variables
const numbers = [1,2,3,4,5,6,7,8]
let one = numbers[0]
let two = numbers[1]
console.log(`${one} and ${two}`)

//can more easily be done by
const numbers2 = [3,4,5,6,7,8]
let [three, four] = numbers2
console.log(`${three} and ${four}`)

//to skip an element
const numbers3 = [1,2,3,4,5,6,7,8,9,10]
let [one,,three,,five] = numbers3
console.log(`${one} and ${three} and ${five}`)

//using spread operator to print the rest of the elements and store them in an array called rest
const numbers3 = [1,2,3,4,5,6,7,8,9,10]
let [one,,three,,five,...rest] = numbers3
console.log(`${one} and ${three} and ${five} and ${rest}`)
console.log(rest)



