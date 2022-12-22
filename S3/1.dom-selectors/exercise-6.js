//Dado el siguiente html usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
window.onload = () => {
    const elems$$ = document.querySelectorAll('[data-function="testMe"]');

    console.log(elems$$[2]);
}