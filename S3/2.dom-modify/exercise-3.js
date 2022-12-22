//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
window.onload = () => {
    //Crear nuevo div
    const newDiv$$ = document.createElement("div");
    document.body.appendChild(newDiv$$);

    //Añado su interior
    for (i=0;i<=5;i++){
        const newP$$ = document.createElement("p");
        newDiv$$.appendChild(newP$$);
    }
    
    
}