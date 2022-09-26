/*
    Trabalhando com arrays

    Um array nada mais é que um vetor, onde nós podemos guardar valores e acessar esses
    valores utilizando o indice correspondente

    Um array pode ser comparado a uma estante


                    pilha_1
     ____________________________________
    |        |        |        |        |
    |  50    |  100   |   654  |  18    |
    |        |        |        |        |
    |        |        |        |        |
     ____________________________________

    pilha_1[2]  --> 654

    pilha_1[1]  --> 100

    pilha_1[8]  --> undefined

    Um array também pode operar como Pilha ou Fila

    Modo Fila ---> O primeiro que chega é o primeiro que sai (push para add e o shift para remov)

    Modo Pilha ---> Os ultimos serão os primeiros (push para add e o pop para remov)

    utilizamos funções especiais --

    unshif(valor a ser adicionado) - Adiciona um novo valor ao inicio do array
    shift() - Remove um valor da primeira posição do array
    
    push(valor a ser adicionado) - Adiciona um novo valor no final do array
    pop() - Remove um valor da ultima posição do array
    
*/
let lista_de_compras = [`Morango`, `abacaxi`, `Pessego`, `Uva`];

function removein() {
  lista_de_compras.shift();
  console.log(lista_de_compras);
}

function removefn() {
  lista_de_compras.pop();
  console.log(lista_de_compras);
}

function verifica() {
  console.log(lista_de_compras);
}

function comprasfn() {
  // lista_de_compras[lista_de_compras.length] = window.prompt(
  //   `Digite o item que você deseja adicionar a lista`
  // );

  lista_de_compras.push(
    window.prompt(`Digite o item que você deseja adicionar a lista`)
  );
  console.log(lista_de_compras);
}
function comprasin() {
  lista_de_compras.unshift(
    window.prompt(`Digite o item que você deseja adicionar a lista`)
  );
  console.log(lista_de_compras);
}

function especifico() {
  let val = window.prompt(`Digite o nome do item que deseja remover da lista`);
  let retorno = lista_de_compras.includes(val);
  if (retorno == true) {
    console.log(lista_de_compras.indexOf(val));
    lista_de_compras.splice(val, 1);
  } else {
    console.log(`Este item não consta na lista`);
  }
}
