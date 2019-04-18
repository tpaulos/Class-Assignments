##  A Markdown file on ES6 Lesson on 4/17/2019 



//////////////////////////////////////////////////////////////////////////
/*
console.log(`I Hello! I'm  a string
              continues on this line`);

const name = "Paulos"
const day = "Wednesday"
const instructor = {
    name: "Chris",
    lesson: "ES6",
    greet: function() {
        return `Hello ${this.name} whatever lesson is 
        ${this.lesson}`
    } 
}              

console.log(`Hello ${instructor.name} whatever lesson is 
              ${instructor.lesson}`)

console.log(instructor.greet());

function foo() {
    let x = true;   // HOISTING will look up ward for variable decleration
    if(x) {
        let usingVar = "I am usin Let"
    }
    console.log(usingVar); // undefined
}
foo();

    const instructors = ["Jimm", "Chris"];
    instructors.push("Jack", "Jill");


// (.this) refers to the nearest object, and a FUNCTION is an object.
// .bind(this) will allow to go this, one scope obove to another function or object.

// => creates lexical binding.(instead of .bind metheod) - they bind to cope 
//    where defined not where they are used

/////////////////////////////////////////////////////////////////////////////////////

//REST
                            // arguments - is an object 
function add() { //or add(...numbers)    ... is rest parameter will allow us to take 
    console.log("arguments object:", arguments); 

    var numbers = Array.prototype.slice.call(arguments);

    var sum = 0;

    numbers.forEach(function(number) {
        sum  += number;
    });
    return sum;
}

console.log(add(1,2,3,4,5,6,7,8));

// Rest example all in one line (=> is arraow function, needs to be in the same line)
// Rest returns array value

 let add = (...numbers) => numbers.reduce((sum,number) => sum += number, 0);

 function addStuff(x, y, ...z) {
     return (x+y) * z.length
 }
 console.log(addStuff(1, 2, "hello", "world", true, 99)); //7

////////////////////////////////////////////////////////////////////////////////////
 
// Spread operater, 

let random = ["Hello", "World", true, 99];
let newArray = [1, 2, ...random, 3];

console.log(newArray);
// [1, 2, "Hello", "World", true, 99, 3]

/////////////////////////////////////////////

let spreadEx = (item) => {
    let spreadArray = [...item]
    console.log(spreadArray);
    return spreadArray
}

spreadEx("Hello World") // ["H", "e", "l", "l", "o", " ", "W".........] spread also returns an array.

/////////////////////////////////////////////////////////////////////////////////

let restEx = (...z) => {
    console.log(z)
    return z
}

restEx("hello", "world") // ["hello", "world"]   rest returns an array.

///////////////////////////////////////////////////////////////////////////////

let students = ["Julian", "Aj", "Matt"]  // it need to be let in ES6
let[x,y,z] = students;
let[x, , Z] = students;

let[x, ...rest] = students;
console.log(x, rest);    // Julian ["Aj", "Matt"]


///////////////////////////////////////////////////////////////////////////////

let completedHomework = () => {
    return ["Julian", "Aj", "Matt"]
}
let[x,y,z] = completedHomework();

console.log(x, y, z);

also works with Object,
let instructor = {
    name: "Jimmy",
    email: no@no.com
}

let { name: x, email: y}  = instructor;
console.log(x);

///////////////////////////////////////////////////////////////////////


let car = {           //destructuring the object in the argument
    make: "Honda",
}

function something(vehicle, year = 2001) {
    console.log(vehicle.make, year)
}
 something(car);



/////////////////////////////////////////////////////////////////////////
// prototypal inheritance
//constructor function name is Capitalized , they are like templates
 

function Person (name, job) {
     this.name = name;
     this.job = job;
 }

 Person.prototype.getName = function getName() {
     return this.name;
 }

 var goodGuy = new Person ("Aang", "Avatar");
 console.log(goodGuy.getName())


 ////////////////////////////////////////////////////////////

 class Person  {
     constructorn (name, job) {
    this.name = name;
    this.job = job;
     }
     getName() {
         return this.name;
     }
     getJob(){
         return this.job;
     }
}

let goodGuy = new Person('Neo', 'the one')
console.log(goodGuy);

class SuperHero extends Person {
    constructor (name, heroName, superPower) {
        super(name);
        this.heroName = heroName;
        this.superPower= superPower;
    }
    secretIdentity() {
        return `${this.heroName} is ${this.name}!!`
    }
}

let batman = new SuperHero("Bruce Wayne", "im Batman")
console.log(batman.secretIdentity())

///////////////////////////////////////////////////////

class Person  {
   constructorn (name) {
   this.name = name;
    }                              //it didnt work
   set name(name) {
       this._name = name;
   } 
   get name() {
       return this._name;
   }

   let goodGuy = new Person('Neo', 'the one')
   console.log(goodGuy);

///////////////////////////////////////////////////////////   

let student = {name: "A-aron"};
let status = new Map();      // map is an object;

status.set(student.name, "A-aron");
status.set("feeling", "churlish");
console.log(status.get(student.name));
console.log(status.get("feeling"));

////////////////////////////////////////////////////////////
   // Encapsulation
const Guy = (function() {
    const _name = new WeakMap();

class Guy {
    constructor(name) {
        this[_name] = name;
    }
}

})   

