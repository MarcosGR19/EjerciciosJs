//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
//Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200
// y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [{name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
    {name: "Origen", durationInMinutes: 165}, 
    {name: "El señor de los anillos", durationInMinutes: 967}, 
    {name: "Solo en casa", durationInMinutes: 214}, 
    {name: "El jardin de las palabras", durationInMinutes: 40}];

let shortMovie = [];
let mediumMovie = [];
let longMovie = [];

movies.forEach(item => {
    if (item.durationInMinutes<100){
        shortMovie.push(item);
    }else if(item.durationInMinutes>=100 && item.durationInMinutes<200){
        mediumMovie.push(item);
    }else if(item.durationInMinutes>=200){
        longMovie.push(item);
    }
});

console.log(shortMovie);
console.log(mediumMovie);
console.log(longMovie);