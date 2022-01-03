document.querySelector('#theme-toggle').addEventListener('click', (event) => {
    // construção do código aqui:
    event.preventDefault();

    toggleTheme();
});

// extração do codigo em função:
function toggleTheme() {
    document.body.classList.toggle('dark');
}

// array para 'cast'
const cast = [
    'Keanu Reeves',
    'Carrie-Anne Moss',
    'Laurence Fishburne',
    'Hugo Weaving'
]

const castlist = document.querySelector('.cast');

cast.forEach(person => {
    // Ciar um elemento <li>
    const item = document.createElement("li");
    const personName = document.createTextNode(person);

    // adicionar um texto ao elemento <li>
    item.appendChild(personName);

    // adicionar o <li> à <ul>
    // existem formas melhores, como usando um framework tipo React
    castlist.appendChild(item);
});

// ------------------------------------

document.querySelector('main').innerHTML = '';

fetch('https://api.github.com/users/lucascaton/repos?per_page=100')
  .then(response => response.json())
  .then(repos => repos.forEach(repo => {
    let item = document.createElement("li");
    var repoName = document.createTextNode(repo.name);
    item.appendChild(repoName);
    document.querySelector('main').appendChild(item);
}));

// Exemplos:

    // observa ação e localização do click
    // console.log(event);

    // retorna a data, horario e local:
    // console.log(new Date());

    // 'toggle' é um metodo de off/on, como click de habilitar e desabilitar.
    // document.body.classList.toggle('dark'):