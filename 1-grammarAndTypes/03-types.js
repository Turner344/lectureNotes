/* 
    BOOLEANS: has only two possible values; TRUE or FALSE
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/* 
    NULL: null is an empty value (container). Nothing is in it, though it still exists.
*/

let empty = null;
console.log(empty);

/* 
    UNDEFINED: no value is assigned and it does not act as an empty container.
*/

let undef;
console.log(undef);

/* 
    NULL vs UNDEFINED:
    Null:
        - Null is like a container with nothing in it. (A box assembled and intentionally packed with nothing/ready to be filled)
    Undefined: 
        - Undefined is when a variable has never been initialized, or hasn't been created yet. (A box that still needs to be assembled)
*/

/* 
    NUMBERS: numbers are literally just numbers. You don't need to write anything special in JS
*/

let degrees = 90;
console.log(degrees);

let precise = 999999999999999; //fifteen 9s
console.log(precise); // returns fifteen 9s

let rounded = 9999999999999999; //sixteen 9s
console.log(rounded); // anything more than 15 numbers, JS will round up

let notQuite = 0.2 + 0.1;
console.log(notQuite); //JS rounds out at a certain number. so if math is needed, be careful!

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

/* 
    STRINGS: strings are a DataType to represent text and are wrapped in a single quote ('') or double quotes ("")
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

/* 
    OBJECTS: are used to store many values instead of a singular value
        - denoted by {}
*/

 let frodo = {
     race: 'hobbit',
     rings: 1,
     cloak: true,
 };

 console.log(frodo);
 console.log(typeof frodo);

 /* 
    ARRAYS: are containers that hold lists of items
        - denoted by []
        - don't have to be the same data type
 */

 let list = ['item1', undefined, 3]
 //  (1)   (2)     (3)
 /* 
    1. name of the array/list
    2. arrays use square brackets
    3. each item, regardless of dataType, and are separated by commas
 */

 let burritos = ['large', 4, true]

 console.log(burritos);
 console.log(typeof burritos);
 // Arrays are also containers that can hold multiple dataTypes, so JS has classified arrays as objects rather than its own dataType.

/* 
    - when JS sees that we're trying to combine two or more numbers, it adds the values together using the built in math functionality
    - when JS sees us trying to add together one or more strings, instead of using the built in math functionality, it combines the two strings instead without synthesizing the values.
*/

let example = 1150 + '100';
console.log(example); // coersion ; JS assumes that the user made a mistake and that we're trying to concatenate two strings, instead of trying to do math with the values.
console.log(typeof example); 


/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = 'Turner';
let lastName = 'Jimerson';
let houseNumber = 868;
let aptNumber = 'Apt A7';
let street = 'Fargo Ave';
let city = 'San Leandro';
let state = 'CA';
let zipcode = 94579;

console.log(firstName, lastName + ',', houseNumber, street, aptNumber + ',', city + ',', state, zipcode); // string concatenation
console.log(`${firstName} ${lastName}, ${houseNumber} ${street} ${aptNumber}, ${city}, ${state} ${zipcode}`); // string interpolation

/* 
    String Properties
    - properties are qualities that are associated with a datatype
*/

let myName = 'Turner';
console.log(myName.length) // 6

/* 
    String Methods
    - methods are tools that help us manipulate the data
        - .properties
        - .methods() 
        *no parentheses for properties*
*/

let myNameIs = 'Turner';
console.log(myNameIs.toUpperCase()) //method that changes a string to uppercase

let hometown = 'my hometown is san leandro'
console.log(hometown.includes('leandro')); // method that checks if a certain string is included in another string. It is case sensitive

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts';
console.log(sent.split('be'));