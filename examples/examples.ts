interface person {
    name : string,
    age : number
}

const personone : person = {
    name: "abd",
    age: 20
};

interface peploelist {
    pepole:person[]
}

const pepole : person[] = [
    {
        name:"sofyan",
        age :23
    },
    {
        name:"sofy",
        age :230
    }

]


function LoadProduct() {
    
    const Container = document.getElementById("div") as HTMLDivElement
    
    Container.innerHTML = "" ;

    pepole.forEach(element => {

        const list = document.createElement("div")
        list.innerHTML =`
        <h3>${element.name}</h3>
        <h3>${element.age}</h3>

        `
        
    });


    

}