// equal (==)
console.log(3 == 3); // true
console.log('3' == 3); // true

/* 
    - coersion is the process of converting a value from one type to another
        - JS assumes that we made a mistake and that we do want to compare two values that are the same dataType.
*/

// strict equal (===) - this overrides javascript coersion
console.log(3 === 3); // true
console.log('3' === 3); // false

// inequality 
console.log('3' != 3); // false

// strict inequality 
console.log('3' !== 3); // true

// greater than 
3 > 2; // true

// less than 
2 < 3 // true

// greater than or equal to 
3 >= 2; // true - not to be confused with the fat arrow functions ( => )

// less than or equal to 
2 <= 3; // true

// and 
2 && 3 // allows us to check if multiple values are true or false

// or
2 || 3; // allows us to check multiple values, but only one of the values needs to be true/false - whereas all need to be true/false in the case of &&