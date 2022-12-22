// Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

window.onload = () => {

    const lista = document.createElement("ul");
    document.body.appendChild(lista)

    for (let car of cars){
        const item = document.createElement("li");
        item.innerHTML = car;
        item.setAttribute('data-function', "printHere");
        lista.appendChild(item);
    }

}