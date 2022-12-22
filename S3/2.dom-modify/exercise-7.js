//Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

window.onload = () => {
    const deleteList = document.querySelectorAll('.fn-remove-me');
    
    for (let item of deleteList){
        item.remove();
    }
}