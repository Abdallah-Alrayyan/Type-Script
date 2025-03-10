// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
var Person1 = {
    name: "abd",
    age: 20
};
if (Person1.age > 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
var teachers = {
    name: "abd",
    subjects: ["math", "math", "math"]
};
teachers.subjects.forEach(function (element) {
    console.log(element);
});
var productss = {
    name: "pen",
    price: 200,
    quantity: 6
};
if (productss.quantity > 5) {
    (productss.price * 15) / 100;
    console.log(productss.price);
}
var products = JSON.parse(localStorage.getItem("products") || "[]"); // the key is products
function displayProducts() {
    var Container = document.getElementById('div');
    Container.innerHTML = ''; // Clear existing cards
    products.forEach(function (product) {
        var card = document.createElement('div');
        card.className = "product-card";
        // Set card content
        card.innerHTML = "\n            <h3>".concat(product.name, "</h3>\n            <p>").concat(product.description, "</p>\n            <p>Price: $").concat(product.price, "</p>\n            <p>Quantity: ").concat(product.quantity, "</p>\n        ");
        // Append card to container
        Container.appendChild(card);
    });
}
var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name");
    var description = document.getElementById("des");
    var price = document.getElementById("price");
    var quantity = document.getElementById("qunt");
    var n = name.value;
    var d = description.value;
    var p = Number(price.value);
    var q = Number(quantity.value);
    // Create new product object with correct property names
    var newProduct = {
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
document.addEventListener('DOMContentLoaded', function () {
    displayProducts();
});
