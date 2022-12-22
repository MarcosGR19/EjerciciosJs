// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name 
// el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const cities2 = cities.map((item) => {
    let city = item.name;
    if(item.isVisited === true){
        city = item.name + ' Visitado';
    }
    return city;
});

// console.log(cities);
console.log(cities2);