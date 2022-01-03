document.querySelector('#theme-toggle').addEventListener('click', (event) => {
    // construção do código aqui:
    event.preventDefault();

    toggleTheme();
});

// extração do codigo em função:
function toggleTheme() {
    document.body.classList.toggle('dark');
}


// Exemplos:

    // observa ação e localização do click
    // console.log(event);

    // retorna a data, horario e local:
    // console.log(new Date());

    // 'toggle' é um metodo de off/on, como click de habilitar e desabilitar.
    // document.body.classList.toggle('dark');