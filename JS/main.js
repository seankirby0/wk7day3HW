// JavaSCript Closures
/*
    A Closure is a self-invoking function that only runs once.
    It can then set a variable(Which in our case will be a counter) and 
    returns a function expression.

    For this example, we will add to a number after the inital call to the closure has been made.

    BTW JavaScript Closures are another type of variable that can be created.
*/

const selfInvokeEx = (function(x, y){return x*y}(5, 7));
console.log(selfInvokeEx);

function someFunc(){
    let name = 'Shoha'
    let newFunc = function(){console.log(myName)}
    return newFunc
}

const a = someFunc();
console.log(a);

// console.log(myName);

function example(){
    let counter = 0; // This is our private variable
    console.log('Hit'); // This shows that this outer function ran
    const newFunc = function(){return counter++} // This defines a new function that utilized the outer function's counter variable
    return newFunc // returns the reference to the new
}

const b = example();

console.log(b);

// Taking the above 10 lines and putting into one step of creating a self-invoking function that returns a function //
countUp = (function(){
    let counter = 0; // This will be our private variable
    console.log('Hit!') // SHow that initial self-invoking function ran once
    const newFunc = function(){return counter++}
    return newFunc
})()


console.log(countUp);

// console.log(counter);


// Example 2

const addNames = (function(){
    let names = [];  // empty array
    console.log('Added names')
    return function(name){
        names.push(name)
        return names
    }
})()



// Async JS Section //

// JS Callback Function //
/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

const myArr = [1, 2, 3, 4]

const aFunc = e => e.toString()
console.log(myArr.map(aFunc));


// Basic Example
function first(){
    console.log(1);
}

function second(){
    console.log(2);
}

// first();
// second();

// What happens if we add a delay to the execution
function firstDelay(){
    // Simulate a delay of 5 seconds
    setTimeout(first, 5000)
}

firstDelay();
second();


// Callback Function syntax
// function doHomework(subject){
//     alert(`Starting my ${subject} homework`);
//     // return callback()
// };


// function doneWithHomework(subject){
//     console.log(`Finished with my ${subject} homework`)
// };

// doHomework('JavaScript')
// doneWithHomework('JavaScript')

function greeting(name){
    alert('Welcome to our site, ' + name)
}

function goodbye(name){
    alert('Thank you for visiting our side, ' + name)
}

function getUserName(callback){
    const userName =  prompt('Please enter your name: ')
    callback(userName)
}




// We solve this problem with PROMISES!!!

// How to create a promise

const isEvenNum = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0){
            resolve(num);
        }else{
            reject(num);
        }
    })
}

const handleSuccess = (result) => {
    console.log('This was a success and here is the result: ' + result)
}

const handleFail = (err) => {
    console.warn('This was a fail and here is the result: ' + err)
}

const getNumber = () => {
    num = prompt('Please enter a number: ')
    isEvenNum(num).then(handleSuccess).catch(handleFail);
}

getNumber();



console.clear();

// Another Example with Async

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall(){
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
};

asyncCall();
