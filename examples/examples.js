"use strict";
const personone = {
    name: "abd",
    age: 20
};
const pepole = [
    {
        name: "sofyan",
        age: 23
    },
    {
        name: "sofy",
        age: 230
    }
];
function LoadProduct() {
    const Container = document.getElementById("div");
    Container.innerHTML = "";
    pepole.forEach(element => {
        const list = document.createElement("div");
        list.innerHTML = `
        <h3>${element.name}</h3>
        <h3>${element.age}</h3>

        `;
    });
}
