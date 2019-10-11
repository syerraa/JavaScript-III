/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global or Window binding is when you console.log(this) in the global scope the window will be the output
* 2. Implicit Binding is when the function is invoked using the dot property and then attaching a method to it the function of an object is outputed.
* 3. New Binding happens when you want to point a new object from an existing object we can use the new keyword to give an object a new function.
* 4. Explicit Binding is when we use the call bind or apply to override the previous method that was being used to give it new output.
*
* write out a code example of each explanation above
// */ 
// Principle 1
// code example for Window Binding
console.log(this);
// Principle 2
const myObj = {
    greeting: "Hello",
    sayHello: function (name){
        console.log(this, name);
    }
}
myObj.sayHello('Ryan');

// code example for Implicit Binding


// Principle 3
function CoolPerson(greeter){
    this.greeting='Hello',
    this.greeter = greeter;
    this.speak = function (){
        console.log(this.greeting + this.greeter);
        console.log(this);
    };

}
const syerra = new CoolPerson("Tia")
syerra.speak();

// code example for New Binding

// Principle 4

speak = function (){
    console.log(this.greeting + this.greeter);
    console.log(this);
};

function CoolPerson(greeter){
    this.greeting='Hello',
    this.greeter = greeter;
    this.speak = function (){
    console.log(this.greeting + this.greeter);
    console.log(this);
    }
   
};
const syerra = new CoolPerson("Tia")
syerra.speak.apply( "syerra");


// code example for Explicit Binding