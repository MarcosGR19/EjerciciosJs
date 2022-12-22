// Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

window.onload = () => {

    const input$$ = document.querySelector('[type="text"]');
    input$$.addEventListener('focus',focusIn);

    function focusIn (){
        console.log(input$$.value);
    }
}