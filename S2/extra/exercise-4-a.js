// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve
// la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
arr = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++){
        if(text == array[i]){
            return i;
        }
    }
    return 'Not found';
}

console.log(findArrayIndex(arr, 'Caracol'));
console.log(findArrayIndex(arr, 'Salamandra'));
console.log(findArrayIndex(arr, 'ddsakf'));