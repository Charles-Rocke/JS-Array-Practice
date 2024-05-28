'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

/**
 * Slice method
 * does not mutate the original array but returns a
 *  new array with the extracted parts
 */
// variable.slice(beginningIndexParameter, optional=endParameter --> (this endParameter will not be included in the new array))
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

/**
 * Splice
 * deletes the specified indexes
 * relatively similar to slice but does mutate original array
 */
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 3);
// console.log(arr);

/**
 * Reverse
 * mutates original array
 */
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

/**
 * Concat
 * used to concatenate 2 arrays
 * does not mutate original array
 */
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

/**
 * Join
 * joins array together to form a string
 * uses a separator as the first parameter
 */
console.log(letters.join('-'));

/**
 * At
 * same as bracket notation variableArray[0]
 */
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// getting the last element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log('anthony'.at(0));
console.log('anthony'.at(-1));

/**
 * Quiz 1
 */

/**
 * 1. Slice Method
 * Given an array const arr = [1, 2, 3, 4, 5, 6, 7];,
 *  use the slice method to create a new
 *  array that contains the elements from index 2 to 5.
 */
const ar = [1, 2, 3, 4, 5, 6, 7];
// create a new array that contains the elements from index 2 to 5
console.log(ar.slice(2, 5));

/**
 * 2. Slice with Negative Indices
 * Using the same array const arr = [1, 2, 3, 4, 5, 6, 7];,
 *  create a new array that contains the last three
 *  elements using the slice method.
 */
console.log(ar.slice(-3));

/**
 * 3. Slice Without Parameters
 * Given const arr = ['a', 'b', 'c', 'd', 'e'];,
 *  use the slice method to create a shallow
 *  copy of the entire array.
 */
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice());
//or
console.log([...arr]);

/**
 * 4. Splice Method to Remove Elements
 * Given const arr = [10, 20, 30, 40, 50];,
 *  use the splice method to remove the
 *  elements from index 1 to 3 (inclusive).
 */
const arrv = [10, 20, 30, 40, 50];
console.log(arrv.splice(1, 3));
console.log(arrv);

/**
 * 5. Splice Method to Add Elements
 * Using the same array const arr = [10, 20, 30, 40, 50];,
 *  use the splice method to add the elements 25 and 35
 *  after index 1.
 */
// splice(startIndex, numToDeleteOffTheEnd, ...ItemsToAdd)
arrv.splice(1, 0, 25, 35);
console.log(arrv);

/**
 * 6. Reverse Method
 * Given const arr = [1, 2, 3, 4, 5];,
 *  use the reverse method to reverse
 *  the order of the elements in the array.
 */
arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());

/**
 * 7. Concat Method
 * Given two arrays const arr1 = ['x', 'y', 'z'];
 *  and const arr2 = [1, 2, 3];, use the concat
 *  method to create a new array that combines
 *  both arrays.
 */
arr = ['x', 'y', 'z'];
let arr1 = [1, 2, 3];
console.log(arr1.concat(arr));
const newArr = arr1.concat(arr);
console.log(newArr);

/**
 * 8. Join Method
 * Given const arr = ['a', 'b', 'c', 'd'];,
 *  use the join method to create a string
 *  with elements separated by a comma and
 *  a space (, ).
 */
arr = ['a', 'b', 'c', 'd'];
console.log(arr.join(', '));

/**
 * 9. At Method
 * Given const arr = [10, 20, 30, 40, 50];,
 *  use the at method to access the third element.
 */
arr = [10, 20, 30, 40, 50];
console.log(arr.at(2));

/**
 * 10. Combining Methods
 * Given const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];,
 *  use a combination of slice, reverse, concat,
 *  and join methods to create a string that
 *  represents the array in reverse order, with
 *  elements separated by a hyphen (-).
 */
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.reverse();
console.log(arr.join('-'));

/**
 * Looping Arrays forEach
 * requires a callback function in
 *  order to tell it what to do
 *  in each loop iteration, it will
 *  execute the callback function
 *  it will also pass in the current
 *  element of the array as an argument
 *
 * the order of the parameters (currentElement, index, and the whole Array being used)
 *  must be in that exact order
 *
 * continue and break statements never work in a forEach loop
 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited: ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew: ${movement}`);
  }
}

console.log('-----forEach below-----');
// forEach
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited: ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew: ${movement}`);
  }
});
