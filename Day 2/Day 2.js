"use strict";
// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
const Person1 = {
    name: "abd",
    age: 20
};
if (Person1.age > 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
const teachers = {
    name: "abd",
    subjects: ["math", "math", "math"]
};
teachers.subjects.forEach(element => {
    console.log(element);
});
const productss = {
    name: "pen",
    price: 200,
    quantity: 6
};
if (productss.quantity > 5) {
    (productss.price * 15) / 100;
    console.log(productss.price);
}
let products = JSON.parse(localStorage.getItem("products") || "[]"); // the key is products
function displayProducts() {
    const Container = document.getElementById('div');
    Container.innerHTML = ''; // Clear existing cards
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = "product-card";
        // Set card content
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
        `;
        // Append card to container
        Container.appendChild(card);
    });
}
let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.getElementById("name");
    let description = document.getElementById("description");
    let price = document.getElementById("price");
    let quantity = document.getElementById("quantity");
    const n = name.value;
    const d = description.value;
    const p = Number(price.value);
    const q = Number(quantity.value);
    // Create new product object with correct property names
    const newProduct = {
        name: n,
        description: d,
        price: p,
        quantity: q
    };
    products.push(newProduct); // add the new product to the array of products 
    localStorage.setItem('products', JSON.stringify(products)); // store the array in local storage and then convert it to string
    // Clear values form inputs
    name.value = '';
    description.value = '';
    price.value = '';
    quantity.value = '';
    // Update display
    displayProducts();
});
// Display products on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
