function click_botao() {
  window.alert("Você clicou no botão");
}

function click_botao2() {
  window.confirm("Os dados estão corretos?");
}

function click_interacao() {
  let nome = window.prompt("Olá, digite seu nome:");
  window.alert("Olá" + nome + ", é um prazer te conhecer. \n#rumoaohendeca");
}
function click_calc() {
  let n1 = Number(window.prompt("Digite o primeiro número:"));
  let n2 = Number(window.prompt("Digite o segundo número:"));
  //n1 = parseInt(n1);
  //n2 = parseInt(n2);
  let resultado = n1 + n2;
  window.alert("O resultado é " + resultado);
}
