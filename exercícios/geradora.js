function* myGenerator() {
    yield 1;  // Pausa aqui e "produz" o valor 1
    yield 2;  // Pausa aqui e "produz" o valor 2
    yield 3;  // Pausa aqui e "produz" o valor 3
  }
  
  const gen = myGenerator();
  
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: false }
  console.log(gen.next()); // { value: undefined, done: true }