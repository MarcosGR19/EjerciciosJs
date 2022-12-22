// Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date.
// Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
  
// Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``, un  ``<h5>`` y un ``<p>`` para
// su .title, .date y .description respectivamente.
  
// Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece
// recordar mucho...

json = fetch('http://localhost:3000/diary').then(res => res.json());

const sortArray = (array)=>{
    let flagChange = false;
    for(let i=0; i < array.length-1; i++){
        const date_1 = array[i].date.slice(0,4);
        const item_1 = array[i];
        const date_2 = array[i+1].date.slice(0,4);
        const item_2 = array[i+1];
        // console.log(date_2)
        //Comparar años
        if(date_1 > date_2){
          array[i] = item_2;
          array[i+1] = item_1;
          flagChange = true;
        //Caso de mismo año
        } else if (date_1 == date_2){
            const date_1 = array[i].date.slice(4,4);
            const date_2 = array[i+1].date.slice(4,4);
            if(date_1 > date_2){
                array[i] = item_2;
                array[i+1] = item_1;
                flagChange = true;
            }
        }
    }
    if (flagChange) sortArray(array);
}

const sortedJson = sortArray(json);

console.log(sortedJson);


// OPCION FETCH
const getCharacter=()=>{
    fetch('https://starwars-server.vercel.app/characters')
    .then(res=>res.json)
    .then(res => console.log(res));
}

// OPCION ASYNC + AWAOT
const asyncFn = async () => {
    const response = await fetch('https://starwars-server.vercel.app/characters');
    const res = await response.json();
    console.log(res);
}



// async function getJson() {
//   let obj;

//   const res = await fetch('http://localhost:3000/diary');

//   obj = await res.json();

//   return obj;
// }

// json = getJson();


