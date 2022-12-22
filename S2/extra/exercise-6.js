// Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
// intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
// resultante.

// Sugerencia de array:
let futbol = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(arr,ind1,ind2){
    let swap1 = arr[ind1];
    let swap2 = arr[ind2];

    arr[ind1] = swap2;
    arr[ind2] = swap1;
    return arr;
}

console.log(swap(futbol,2,3));
console.log(swap(futbol,0,1));