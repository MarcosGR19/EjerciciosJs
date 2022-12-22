// Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

window.onload = () => {
    for (const country of countries){
        const div = document.createElement('div');
        document.body.appendChild(div);

        const h4 = document.createElement('h4');
        h4.innerHTML= country.title;

        const img = document.createElement('img');
        img.setAttribute('src',country.imgUrl);
        
        div.appendChild(h4);
        div.appendChild(img);
    }
}

