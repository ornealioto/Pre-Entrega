class Cafeterias{
    constructor(name, coffee, pastry, price){
        this.Id = coffeeShop.length + 1;
        this.name = name;
        this.coffee = coffee;
        this.pastry = pastry;
        this.price = price;
    }
}

let coffeeShop = [];
coffeeShop.push(new Cafeterias("Baya Negra", "Latte", "Croissant", 1000));
coffeeShop.push(new Cafeterias("Folc", "Flat White", "Ecalir", 750));
coffeeShop.push(new Cafeterias("Weiss", "Capuccino Weiss", "Pain au Chocolat", 700));
coffeeShop.push(new Cafeterias("Sea and Coffe", "Iced Latte", "Scon de Queso", 730));


function mostrarProductos() {
    alert(
        "Bienvenido a ORNELATTE. Contamos con la reseña de numerosas cafeterías:"
    );
    coffeeShop.forEach(producto => {
        alert(`${producto.name}`);
    }
    );
}

function mostrarPrecios() {
    return(
        `Estas son las cafeterías desde las más económicas hasta las más costosas:
        ${JSON.stringify(coffeeShop.sort((a, b) => a.price - b.price))}`
    );   
}

mostrarProductos();

let selection = Number(prompt("Elija la cafetería de su mayor interés: \n 1-Baya Negra \n 2-Folc \n 3-Weiss \n 4-Sea and Coffee \n 0- Si no precisa ver ninguna recomendación \n 100- Si quiere ver las cafeterías del menor al mayor precio"));
let coffeeFind = coffeeShop.find(cafe => cafe.Id === selection);

while(selection != 0 && selection != 100){
    switch(selection){
        case 1:
            alert(` Usted eligio la cafetería ${coffeeFind.name}. \n Sus productos mas populares son ${coffeeFind.coffee} y ${coffeeFind.pastry}. \n El valor aproximado es de $${coffeeFind.price}`)
            break;
        case 2:
            alert(` Usted eligio la cafetería ${coffeeFind.name}. \n Sus productos mas populares son ${coffeeFind.coffee} y ${coffeeFind.pastry}. \n El valor aproximado es de $${coffeeFind.price}`)
            break;
        case 3:
            alert(` Usted eligio la cafetería ${coffeeFind.name}. \n Sus productos mas populares son ${coffeeFind.coffee} y ${coffeeFind.pastry}. \n El valor aproximado es de $${coffeeFind.price}`)
            break;
        case 4:
            alert(` Usted eligio la cafetería ${coffeeFind.name}. \n Sus productos mas populares son ${coffeeFind.coffee} y ${coffeeFind.pastry}. \n El valor aproximado es de $${coffeeFind.price}`)
            break;    
    }
    let selectionTwo = Number(prompt(" ¿Desea ver otra cafetería? Igrese: \n 1- Baya Negra \n 2- Folc \n 3- Weiss \n 4- Sea and Coffee \n 0- Si no precisa ver ninguna recomendación \n 100- Si quiere ver las cafeterías del menor al mayor precio"));
}

if(selection === 0){
    alert("Muchas gracias por su interes. Sigannos en Instagram para ver reseñas diarias!")
}else if(selection === 100){
    alert(mostrarPrecios());
};





