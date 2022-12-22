// Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. 
// Recuerda que no solo puedes insertar elementos con .appendChild.

window.onload = () => {
    const newPar$$ = document.createElement('p');
    newPar$$.innerHTML = 'Voy en medio!';


    const divs$$ = document.querySelectorAll('div');
    secondDiv$$ = divs$$[1];

     document.body.insertBefore(newPar$$,secondDiv$$);
     //padre.insert(before(new item, child target))
}