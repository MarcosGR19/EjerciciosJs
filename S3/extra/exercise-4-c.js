// Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine
// ese mismo elemento del html.

const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

function removeFn (div){
    div.remove();
}
window.onload = () => {
    id = 0;
    for (const country of countries){
        const div = document.createElement('div');
        document.body.appendChild(div);

        const h4 = document.createElement('h4');
        h4.innerHTML= country.title;

        const img = document.createElement('img');
        img.setAttribute('src',country.imgUrl);

        const button = document.createElement('button');
        button.innerHTML = 'Remove last element';
        button.onclick = () => removeFn(div);
        
        div.appendChild(h4);
        div.appendChild(img);
        div.appendChild(button);

    }
}

