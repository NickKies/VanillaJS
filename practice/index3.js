/*
console.log(console);

function sayHello(potato, chicken){
    console.log('Hello!', potato, " you have ", chicken, "years of age.");
}

// argument!
sayHello("Nikkies", 15);*/


/*function sayHello(name, age){
    return `Hello! ${name}, you are ${age} years old.`;
}

const greetNikkies = sayHello("Nikkies", 14);

console.log(greetNikkies);*/

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    pow: function(a,b){
        return a ** b;
    }
}

const plus = calculator.plus(5, 5);
const power = calculator.pow(5,5);

console.log(power);
