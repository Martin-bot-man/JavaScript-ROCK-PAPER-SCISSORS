// const person = {name:"Martin", age: 26, profession:"Engineer"};
// console.log(person.name)
// console.log(`His name is ${person.name}, he is ${person.age} years old.`)
// numbers = [1,2,3,4,5]

// const getEvenNumbers = (arr)=> {

//     const evenNumbers = arr.filter((num)=> {numbers % 2 === 0} );
//     return evenNumbers;
    
// };
// const evenNum = getEvenNumbers(numbers);
// console.log(evenNum);
const numbers = [1, 2, 3, 4, 5];

// Define a function to filter even numbers
const getEvenNumbers = (arr) => {
    // Use the filter method to select even numbers
    const evenNumbers = arr.filter((num) => num % 2 === 0);
    return evenNumbers;
};

// Call the function and store the result
const evenNum = getEvenNumbers(numbers);

// Log the even numbers to the console
console.log(evenNum); // Output: [2, 4]