//não atualizar a página
function meuEscopo () {
    const form = document.querySelector('.form');
/*
    form.onsubmit = function (evento) {
        alert(1);
        console.log('Foi enviado.');
    };
*/

function recebeEventoForm (evento) {
    event.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
}
    form.addEventListener('submit', recebeEventoForm);
};


 meuEscopo();