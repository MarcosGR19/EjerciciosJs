//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
window.onload = () => {
    const newPar$$ = document.createElement('p');
    newPar$$.innerHTML='Soy dinámico';
    document.body.appendChild(newPar$$);
}