//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad 
//isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

// alumns.forEach(item => {
//     if (item.T1 && item.T2 || item.T1 && item.T3 || item.T2 && item.T3){
//         item.isApproved = true;
//     } else {
//         item.isApproved = false;
//     }
// })

// Version mejorada
for (let i = 0; i < alumns.length; i++) {
    let numeroTrimestre = 0;
    const element = alumns[i];
    element.T1 ? numeroTrimestre++ : numeroTrimestre;
    element.T2 ? numeroTrimestre++ : numeroTrimestre;
    element.T3 ? numeroTrimestre++ : numeroTrimestre;
    element.isAproved = numeroTrimestre >= 2 ? true : false;
}
console.log(alumns);