/* 
    NOTES: 
    -variables: Are named containers for storing data values and referring to later (We can name them whatever we want)
        - a variable name must begin with a letter, underscore, or a $
        - numbers may follow the above characters, but cannot come first
        - JS is case sensitive ; 'Hi' and 'hi' are different variables
        - no spaces are allowed in variable names
        - camelCase is best practice for naming variables
            - though snake_Case and PascalCase are also acceptable
        - camelCase is good practice because it helps keep everything easily readable. - let myName = 'Turner'
*/

let a = 2;

// (1)  (2)  (3)  (4)
    let   b   =   2;

/* 
    1. Keyword
    2. Variable name (can be whatever we want)
    3. Assignment Operator
    4. Variable value


    var, let, const:

    - var: 'old' keyword for variables **In this course we won't be using this keyword often.
    - let: 'new' keyword for variables (Best practice... for now)
    - const: also 'new'; declares an unchangeable variable
*/

/* 
    NOTES:
    - declarations: on the LEFT side of a variable
    - initialization: on the RIGHT side of a variable
        - sets the value of the variable
        - it incorporates the variable name (x), the assignment operator (=), and the value (14). x = 14
*/

let x;
console.log('Declaration', x)

x = 10;
console.log('Initialization', x)

x = 33;
console.log('Initialization Two', x)

let y = 'Hello';
console.log('Both:', x, y);

let today = "Great!";
const elevenFifty = "Wonderful!";
console.log(today, elevenFifty);

today = "Lovely!";
// elevenFifty = "Fantastic!"; running this all together will give us an error as elevenFifty cannot be reassigned a value
console.log(today, elevenFifty);