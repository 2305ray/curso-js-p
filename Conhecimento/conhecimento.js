//capturar o evento do submit do formulário
const form = document.querySelector('.formulario');

form.addEventListener('submit', function (evento) {
evento.preventDefault();
console.log('evento parado');
setResultado('olá');
});

function setResultado (msg) {
const Res = document.querySelector('#resultado');
Res.innerHTML = ' '
}