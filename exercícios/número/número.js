const numero = Number(prompt('Digite um número:'));
//numero = Number(numero);
//const numeroTitulo = document.getElementById('numero-titulo');
//const texto = document.getElementById('texto')

//numeroTitulo.innerHTML = numero;
//texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`

  TextDecoder.innerHTML = " ";
  document.body.innerHTML += `<h1>Seu número é: <strong> ${numero} <strong> </h1><br />`;
  document.body.innerHTML += `É inteiro? ${Number.isInteger(numero)} <br />`;
  document.body.innerHTML += `Raíz quadrada ${numero ** 0.5} <br />`;
  document.body.innerHTML += `É NaN? ${Number.isNaN(numero)} <br />`;
  document.body.innerHTML += `Arredondado pra baixo: ${Math.floor(numero)} <br />`;
  document.body.innerHTML += `Arredondado pra cima: ${Math.ceil(numero)} <br />`;
  document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)} <br />`;
  
 