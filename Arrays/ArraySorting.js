let firstNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let secondNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let thirdNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let fourthNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let fifthNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let sixthNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let seventhNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let eighthNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let ninethNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let tenthNumber = BigInt(Math.floor(Math.random() * 899) + 100);

let numbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber, seventhNumber, eighthNumber, ninethNumber, tenthNumber];

numbers.sort();

console.log("Array is " + numbers[0] + ", " + numbers[1] + ", " + numbers[2] + ", " + numbers[3] + ", " + numbers[4] + ", " + numbers[5] + ", " + numbers[6] + ", " + numbers[7] + ", " + numbers[8] + ", " + numbers[9]);

console.log("Second smallest = " + numbers[1] + ", second largest = " + numbers[8]);