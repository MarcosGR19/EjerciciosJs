// En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y
// que si el usuario hace click en este botón eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io?name=';//modo de llamar apis

//Funcion de borrar p
const fnRemove = (p,btn) => {
    p.remove();
    btn.remove();
}

window.onload = () =>{
    const input = document.querySelector('input');
    const boton = document.querySelector('button');
    
    boton.onclick = () => {
        fetch(baseUrl+input.value).then((response) => {
            return response.json();
        }).then((myJson) =>{
            //Crea elementos p y boton
            const p = document.createElement('p');
            const btn = document.createElement('button');
            btn.innerHTML = myJson.name;
            try {
                p.innerHTML = `El nombre ${myJson.name} tiene un ${myJson.country[0].probability} porciento de ser de ${myJson.country[0].country_id}`
            } catch (error) {
                p.innerHTML = `El nombre ${myJson.name} no tiene similitud con ningún país`
            }
            document.body.appendChild(p);
            document.body.appendChild(btn);
            //funcionalidad boton
            btn.onclick = () =>fnRemove(p,btn);

        }); 
    };
    
}

