function ifelse() {
  window.alert(`Vamos fazer uma comparação entre 2 números`);
  let n1 = window.prompt(`digite o primeiro número`);
  let n2 = window.prompt(`digite o segunfo número`);

  /*
      Função IF...Else
      Toma uma atitude se a comparação for verdadeira ou uma atitude se a comparação for
      falsa

      sintaxe:
      if(comparação lógica)
      {ação a ser executada se a comparação for verdadeira}
      else if(comparação lógica)
      {ação a ser executada se a comparação for verdade}
      else
      {ação a ser executada se a comparação for falsa}

  */
  if (n1 > n2) {
    window.alert(`${n1} é maior do que ${n2}`);
  } else if (n1 < n2) {
    window.alert(`${n1} é menor do que ${n2}`);
  } else {
    window.alert(`${n1} é igual a ${n2}`);
  }
}

function switchcase() {
  let entrada = window.prompt(`digite o valor em metros que deseja converter`);
  let resp =
    window.prompt(`selecione a letra que indica para qual unidade unidade você deseja converter o valor
                            \n a)mm
                            \n b)um
                            \n c)cm
                            \n d)km`);
  switch (resp) {
    case "a":
      let val_mm = entrada * 1000;
      window.alert(`${entrada} metro(s) equivale a ${val_mm} milímetro(s)`);
      break;
    case "b":
      let val_um = entrada * 1000000;
      window.alert(`${entrada} metro(s) equivale a ${val_um} micrometros`);
      break;
    case "c":
      let val_cm = entrada * 100;
      window.alert(`${entrada} metro(s) equivale a ${val_cm} centimetros`);
      break;
    case "d":
      let val_km = entrada / 1000;
      window.alert(`${entrada} metro(s) equivale a ${val_km} quilometros`);
      break;
    default:
      window.alert(`Resposta inválida`);
  }
}
function funcminas() {
  /*
      Função while
      executa uma ação enquanto a comparação lógica for verdadeira

      sintaxe:
      while(comparação lógica)
      {ação a ser executada se a comparação for verdadeira}
      
  */

  let entrada = window.prompt(`insira o numero de vezes da repetição`);
  let x = 0;
  while (x < entrada) {
    console.log(entrada);
    entrada--;
  }
  //console.log(`teste`);
}

function duaio() {
  /*
      Função do...while
      bem parecida com a função while, porém negal é garatido que o que esta dentro do "do"
      é executado pelo menos uma vez mesmo se a comparaçã lógica ja iniciar em falso

      sintaxe:
      do{
        comandos a serem executados
      }
      while(comparação lógica)
      
      
  */

  let entrada = window.prompt(`insira o numero de vezes da repetição`);
  let x = 0;

  do {
    console.log(entrada);
    entrada--;
  } while (x < entrada);
  console.log(`teste`);
}

function para() {
  /*
    função for
    Cria basicamente um laço de repetição com inicio e fim
    pode ser usada para por exemplo repetir comandos por um número determinado de vezes
    
    sintaxe:
    for(inicialização ; comparação lógica; finalização geralmente incremento ou decremento)
    {
      ação a ser executada
    }

  */

  //let nome1 = 'lucas'
  //let nome2 = 'moises'
  let nomes = [`lucas`, `moises`, `matheus`, `Ronialdo`, `Felipe Silver`, 50];

  console.log("tamanho do array " + nomes.length);
  for (let conta = 0; conta < nomes.length; conta++) {
    console.log(nomes[conta]);
  }
}
