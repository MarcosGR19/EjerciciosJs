// Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click
// que ejecute un console log con la información del evento del click

// evento click
// console.log()


window.onload = () => {
    const input$$ = document.querySelector('#btnToClick');
    input$$.addEventListener("click", click1);
    
    function click1 (){
        console.log(input$$);
    }
    
}