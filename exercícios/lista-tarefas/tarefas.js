const inputTarefa =  document.querySelector('.input-tarefa');
const btnTarefa =  document.querySelector('.btn-tarefa');
const tarefas =  document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotãoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class','apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoIput){
    const li = criaLi();
    li.innerText = textoIput;
    tarefas.appendChild(li)
    limparInput();
    criaBotãoApagar(li);
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
});

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim;
        listaDeTarefas.push(tarefaTexto);
    }
}