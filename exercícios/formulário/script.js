//não atualizar a página
function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];


function recebeEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push ({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,

    }); // criação de um objeto q vai dentro do array pessoas

    console.log(pessoas);

    resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value}</p>
                                <p>Peso: ${peso.value}</p>
                                <p>Altura: ${altura.value}</p>`;
}
    form.addEventListener('submit', recebeEventoForm);
};
 meuEscopo()
