console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log( hello() );


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  name = 'Adam';
  return `Hello ${ name }`;
}
// Remember to call the function to test
console.log( helloName() )

// 3. Function to add two numbers together & return the result
// FIX - added secondNumber variable
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  answer = firstNumber + secondNumber;
  return answer;
}
console.log( '1 + 2 =', addNumbers( 1, 2 ) );


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  answer2 = num1 * num2 * num3;
  return answer2;
}
console.log( '2 * 3 * 4 =', multiplyThree( 2, 3, 4 ) );


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log( 'in isPositive' );
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'The isPositive test is a positive number (should say true) - Testing 1:', isPositive ( 1 ) );
console.log( 'The isPositive test is a positive number (should say false) - Testing Zero:', isPositive ( 0 ) );
console.log( 'The isPositive test is a positive number (should say false) - Testing -1:', isPositive ( -1 ) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

// Defining array values
function getLast( array ) {
  // console.log location testing
  console.log( 'in getLast' );
  // if else statement - if array exists
  if ( array ){
    // setting variable lastItem equal to last item of testArray
    let lastItem = array[ array.length-1 ];
    return lastItem;
  }
  else {
    return undefined;
  }
}
console.log( 'The last item of the array is:', getLast( [ 1, 2, 3 ] ) );
console.log( 'The last item of the empty array is:', getLast() );

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){
  console.log( 'in find' );
  // loop that runs through values of array
  for ( i=0; i < ( array.length ); i++ ){
    if ( array[i] === value ){
      return true;
      
    }
  }
  return false;
}
console.log( 'Did we find a match:', find( 3, [ 3, 6, 9, 12 ] ) );
console.log( 'Did we find a match:', find( 2, [ 3, 6, 9, 12 ] ) );

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  // For loop to run through each character of a string
  for ( i=0; i < string.length; i++ ){
    // if else statement for if our letter we are looking for matches a letter in string,
    // spits back true, else spits back false, works appropriately with supplied console logs
    if ( string.charAt(0) === letter ){
      return true
    }
    else {
      return false
    }
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
