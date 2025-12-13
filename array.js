1.
let numbers = [2, 7, 11, 15];
let target = 9;
let pairs = [];

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
            pairs.push([numbers[i], numbers[j]]);
        }
    }
}
console.log("Pairs with sum", target, ":", pairs);

2.
let numbers1 = [1, 2, 3, 4, 5];
let target1 = 9;
let triplets = [];

for (let i = 0; i < numbers1.length - 2; i++) {
    for (let j = i + 1; j < numbers1.length - 1; j++) {
        for (let k = j + 1; k < numbers1.length; k++) {
            if (numbers1[i] + numbers1[j] + numbers1[k] === target1) {
                triplets.push([numbers1[i], numbers1[j], numbers1[k]]);
            }
        }
    }
}

console.log("Triplets with sum", target1, ":", triplets);

3.
let numbers3 = [3, -1, 5, -2];
let negatives = [];
let positives = [];

for (let i = 0; i < numbers3.length; i++) {
    if (numbers[i] < 0) {
        negatives.push(numbers3[i]);
    } else {
        positives.push(numbers3[i]);
    }
}
let result = negatives.concat(positives);

console.log("Result:", result);

4.


