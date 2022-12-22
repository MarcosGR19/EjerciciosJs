//Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

window.onload = () => {
    const newList$$ = document.createElement('lu');
    document.body.appendChild(newList$$);

    for (let app of apps){
        const newListElement$$ = document.createElement('li');
        newListElement$$.innerHTML = app;
        newList$$.appendChild(newListElement$$);
    }
}