let number1 = BigInt(Math.floor(Math.random() * 899) + 100);
let secondNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let thirdNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let fourthNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let fifthNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let sixthNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let seventhNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let sixthNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let ninethNumber = BigInt(Math.floor(Math.random() * 899) + 100);
let tenthNumber = BigInt(Math.floor(Math.random() * 899) + 100);

let numbers = [number1, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber, seventhNumber, sixthNumber, ninethNumber, tenthNumber];

let smallest, secondSmallest, largest, secondLargest;

if (numbers[0] <= numbers[1]) {
    smallest = numbers[0];
    secondSmallest = numbers[1];
    largest = numbers[1];
    secondLargest = numbers[0];
} else {
    smallest = numbers[1];
    secondSmallest = numbers[0];
    largest = numbers[0];
    secondLargest = numbers[1];
}

for (let i = 2; i <= 10; i++) {
    if (numbers[i] > smallest && numbers[i] < secondSmallest) {
        secondSmallest = numbers[i];
    } else if (numbers[i] < smallest) {
        secondSmallest = smallest
        smallest = numbers[i];
    }
    if (numbers[i] < largest && numbers[i] > secondLargest) {
        secondLargest = numbers[i];
    } else if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
    }
}
console.log("Array is " + numbers[0] + ", " + numbers[1] + ", " + numbers[2] + ", " + numbers[3] + ", " + numbers[4] + ", " + numbers[5] + ", " + numbers[6] + ", " + numbers[7] + ", " + numbers[8] + ", " + numbers[9]);
console.log("Second smallest = " + secondSmallest + ", second largest = " + secondLargest);