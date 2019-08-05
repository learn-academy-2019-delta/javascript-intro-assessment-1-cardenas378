// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// ---------------------------------------------
// Consider this variable:

var mantra = "Be the dev"

// 1a. Write the code that returns 'B' from mantra.

var mantra = "Be the dev"
    mantra.charAt(0); // returns "B"
    
        console.log(mantra.charAt(0))
        
// 1b. Write the code that determines if there is an 'x' in mantra.

let  mantra = "Be the dev"
console.log(mantra.includes("x")); 

// 1c. Write the code that determines if there is a 'v' in mantra.

let  mantra = "Be the dev"
console.log(mantra.includes("v"))

// 1d. Stretch: Write a function that can take any letter as an argument and returns if it exists within the given string.


// ---------------------------------------------------
// Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

function catDog (cat, dog) {
    
    if (cat.length > dog.length) {
        
        console.log(cat)
    }
     else {
        console.log(dog)
    }
}
catDog(myCat,myDog)

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

function returnOfCatDog(myCat, myDog) {
        var returnOfCatDog = []
    
            returnOfCatDog[0] = myDog
            returnOfCatDog[1] = myCat
            
                return returnOfCatDog
}
    console.log(returnOfCatDog())

                    // maybe this could work too...
                    
function returnOfCatDog(myCat, myDog) {
        return Array.from(arguments)
    } 
        
        console.log(returnOfCatDog(myCat,myDog))
                    
// 2c. Stretch: Write a function that returns the two variables in all lowercase letters.


// -----------------------------------------------
// Consider this variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.

for(let i=0; i < myMessage.length; i++){
    
    console.log(myMessage[i])
    
}



// 4b. Stretch: Write the code that logs each letter of the message using a while loop.

// 4c. Super Stretch: Write the code that logs each letter of the message using forEach().


// ----------------------------------------------
// Consider the following variable:

var testString = "thisisateststring"

// 5a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
function vocales(takeOut) {
    
    return testString.replace(/[aeiou]/ig,'')
    
}
    console.log(vocales())

// 5b. Stretch: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.


// ----------------------------------------------
// Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 6a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

function kittyCat(cats) {
    
    let katzOnly = [];
    
    for (let i=0; i < cats.length; i++){
    
        if (cats[i].animal === "cat") {
            
              katzOnly.push(cats[i])
        }
        
    }
          return katzOnly
    
}
console.log(kittyCat(toonimals))
//6b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

function noKatzAllowed(noCats) {
    
    let otherAnimals = [];
    
    for (let i=0; i < noCats.length; i++){
    
        if (noCats[i].animal !== "cat") {
            
              otherAnimals.push(noCats[i])
        }
        
    }
          return otherAnimals
    
}
console.log(noKatzAllowed(toonimals))

//6c. Stretch: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
git push --set-upstream origin JuanC