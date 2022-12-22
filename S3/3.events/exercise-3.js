// Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

window.onload = () => {
    const input$$ = document.querySelector('[type="text"]');
    input$$.addEventListener('input',fn);

    function fn (){
        console.log(input$$.value);
    }
}