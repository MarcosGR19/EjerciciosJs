// Basandote en el html siguiente, elimina el elemento que tenga la clase .fn-remove-me.

window.onload = () => {
    const deleteList = document.querySelectorAll('.fn-remove-me');

    for (let item of deleteList){
        item.remove();
    }
}