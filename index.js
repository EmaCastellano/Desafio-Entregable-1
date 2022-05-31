const TOTAL = (precio, cantidad) => precio * cantidad;

let precioNotebookEstandar = 100000;

let precioNotebookGamer = 200000;

let Notebook = Number(prompt(
    `Elija la notebook que quiere comprar:
    1. Notebook Estandar = $ ${precioNotebookEstandar}
    2. Notebook Gamer = $ ${precioNotebookGamer} `));

while (Notebook !== 1 && Notebook !== 2) {
    alert("Por favor elija una opción válida. Para Notebook Estandar ingrese '1' y para Notebook Gamer ingrese '2'");
    Notebook = Number(prompt(`Elija la Notebook que quiere comprar:
    1. Notebook Estandar = $ ${precioNotebookEstandar} 
    2. Notebook Gamer = $ ${precioNotebookGamer} `));
}  

let cantidad = Number(prompt("Ingrese la cantidad de Notebooks que desea comprar"));

while ((isNaN(cantidad)) || (cantidad % 1 !== 0)) {
    alert("Por favor ingrese una cantidad válida");
    cantidad = Number(prompt("Ingrese la cantidad de Notebooks que desea comprar"));
}

if (Notebook === 1) {
    let total = TOTAL(precioNotebookEstandar, cantidad);
    alert(`El total a pagar es de $ ${total}`);
} 

else if (Notebook === 2) {
    let total = TOTAL(precioNotebookGamer, cantidad);
    alert(`El total a pagar es de $ ${total}`);
}