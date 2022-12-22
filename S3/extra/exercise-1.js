// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
window.onload = () => {


    const lista = document.createElement("ul");
    document.body.appendChild(lista)

    for (let country of countries){
        const item = document.createElement("li");
        item.innerHTML = country;
        lista.appendChild(item);
    }
}