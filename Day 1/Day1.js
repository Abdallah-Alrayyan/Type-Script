"use strict";
// Identify if a Number is Even or Odd
// You are given a variable num Check whether the number is even or odd, without using a function.
// Filter Expensive Products from an Array :
// You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.
// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.
let num = 20;
if (num % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}
let product = [20, 30, 40, 50, 60, 100];
let thresholdPrice = 50;
for (let i = 0; i < product.length; i++) {
    if (thresholdPrice < product[i]) {
        console.log(product[i]);
    }
}
let array = [20, 30, 40, 50, 60, 100];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
