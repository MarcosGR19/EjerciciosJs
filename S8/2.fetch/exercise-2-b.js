// En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...
// 'El nombre X tiene un Y porciento de ser de Z' etc etc.

// EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

const baseUrl = 'https://api.nationalize.io?name=';//modo de llamar apis


window.onload = () =>{
    const input = document.querySelector('input');
    const boton = document.querySelector('button');
    
    boton.onclick = () => {
        fetch(baseUrl+input.value).then((response) => {
            return response.json();
        }).then((myJson) =>{
            const p = document.createElement('p');
            try {
                p.innerHTML = `El nombre ${myJson.name} tiene un ${myJson.country[0].probability} porciento de ser de ${myJson.country[0].country_id}`
            } catch (error) {
                p.innerHTML = `El nombre ${myJson.name} no tiene similitud con ningún país`
            }
            document.body.appendChild(p);
        }); 
    };
    
}

