//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
let person = {
    name : 'Dale',
    age : 40
};

// Use an arrow to create the printInfo method
for (let i = 0; i < Object.keys(person).length; i++){
    console.log(Object.keys(person)[i])
    console.log(Object.values(person)[i])
}




// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 






// =============Exercise #2 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small word"
*/

let word = []
const bigOrSmall = () => {
    const bigOrSmall = (e) => e.length > 10
    return new Promise ((resolve, reject) => {
        for (String.length(word))
    }
}


let longNames = newNames.filter(bigOrSmall);
console.log(bigOrSmall);
