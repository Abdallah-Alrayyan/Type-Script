// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."

// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.

// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to decrease the price of each product by 15% if the quantity is greater than 5.

// Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity) for product and when you submit the form it will save the product inside array in the local storage and then display all the products as a cards under the form.
// *use interface to create a structure for this product



interface Person {
    name: string,
    age: number
}

const Person1: Person = {
    name: "abd",
    age: 20
}

if (Person1.age > 18) {
    console.log("Adult");


} else {
    console.log("Minor");

}

//------------------------------------

interface Teacher {
    name: string,
    subjects: string[]
}

const teachers: Teacher = {
    name: "abd",
    subjects: ["math", "math", "math"]
}

teachers.subjects.forEach(element => {

    console.log(element);


});
//------------------------------------

interface Productttt {
    name: string,
    price: number,
    quantity: number
}

const productss: Productttt = {
    name: "pen",
    price: 200,
    quantity: 6
}

if (productss.quantity > 5) {

    (productss.price * 15) / 100
    console.log(productss.price);


}
//------------------------------------


interface Product {
    name: string,
    description: string,
    price: number,
    quantity: number
}


let products: Product[] = JSON.parse(localStorage.getItem("products") || "[]"); // the key is products

function displayProducts() {
    const Container = document.getElementById('div') as HTMLDivElement;
    Container.innerHTML = ''; // Clear existing cards

    products.forEach(product => { // loop on all products in the array 
        const card = document.createElement('div');
        card.className = "product-card"

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





let myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.getElementById("name") as HTMLInputElement;
  let description = document.getElementById("description") as HTMLInputElement;
  let price = document.getElementById("price") as HTMLInputElement;
  let quantity = document.getElementById("quantity") as HTMLInputElement;

  const n = name.value;
  const d = description.value;
  const p = Number(price.value); 
  const q = Number(quantity.value); 

// Create new product object with correct property names
const newProduct: Product = {
    name: n,
    description: d,
    price: p,
    quantity: q
};

  products.push(newProduct) // add the new product to the array of products 

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