// Inserta dinamicamente en un html un div que contenga una p con javascript.

window.onload = () => {
    //Crear nuevo div
    const newDiv$$ = document.createElement("div");
    document.body.appendChild(newDiv$$);

    //Añado su interior
    const newP$$ = document.createElement("p");
    newDiv$$.appendChild(newP$$);
    
}