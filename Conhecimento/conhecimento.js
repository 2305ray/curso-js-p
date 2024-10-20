//capturar o evento do submit do formulário
const form = document.querySelector('.formulario');

form.addEventListener('submit', function (evento) {
evento.preventDefault();
const inputPeso = evento.target.querySelector('#peso');
const inputAltura = evento.target.querySelector('#altura'); // de quem ta vindo esse evento

const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);
console.log(altura, peso)

if (!peso) {
    setResultado('Peso inválido', false);
    return;
}


if (!altura) {
    setResultado('Altura inválida', false);
    return; }
    

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc (imc);


    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});


function getNivelImc (imc) {
    const nivel = ['Abaixo do Peso', 'Peso normal', 'Sobrepeso',
         'Obesidade grau 1', 'Obesidade grau 2','Obesidade grau 3'];

         /*if (imc >= 39.9) {
            return nivel[5];
         } else if (imc >= 34.9) {
            return nivel[4];
         } else if (imc >= 29.9) {
            return nivel[3];
         } else if (imc >= 24.9) {
            return nivel[2];
         } else if (imc >= 18.5) {
            return nivel[1];
         } else if (imc < 18.5) {
            return nivel[0]
         }
 Como a função para no return, não é necessário fazer o else if 
 é só fazer vários if*/

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
    
    /* Se tem só um bloco de execução não precisa do uso das chaves em volta do return*/
 }

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
const p = document.createElement('p');
return p;

}

function setResultado (msg, isValid) {
const res = document.querySelector('#resultado');
res.innerHTML = '';

const p = criaP();
if (isValid) {
    p.classList.add('paragrafo-resultado')
} else {
    p.classList.add('bad')
}


p.innerHTML = msg
res.appendChild(p);

}