// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const doubleNums = nums.map(num => { return num * 2 });
// expected: [26, 174, 4, 178, 24, 8, 180, 126]
// console.log(doubleNums);

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [firstTopping, secondTopping] = pizzaToppings;
// expected: firstTopping = 'Pineapple', secondTopping = 'Olives'
// console.log(firstTopping);
// console.log(secondTopping);

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
};

// Your code here

const { make, model } = car;
// expected: make = 'Audi', model = 'q5'
// console.log(make);
// console.log(model);

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']; // reference to line 15

// Your code here

const controversialPizzaToppings = [...pizzaToppings];
// expected: ['Pineapple', 'Olives', 'Anchovies']
// console.log(controversialPizzaToppings);

// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   }; // reference to lines 26 - 29

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const myCar = { ...car };
myCar.model = 'q7';
// expected: car = { make: 'Audi', model: 'q5' }, myCar = { make: 'Audi', model: 'q7' }
// console.log('Original: ', car);
// console.log('Clone: ', myCar);

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const propertyName = 'age';
const userProfile = {
    [propertyName]: 27,
};
// expected: userProfile = { age: 27 }
// console.log(userProfile);