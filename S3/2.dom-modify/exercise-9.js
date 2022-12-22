// Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!',
// dentro de todos los div con la clase .fn-insert-here

window.onload = () => {
    const divs$$ = document.querySelectorAll('.fn-insert-here');
    for (let div$$ of divs$$){
        div$$.innerHTML='<p>Voy dentro!</p>'
    }
}