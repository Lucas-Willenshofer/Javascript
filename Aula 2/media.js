/*
    Desafio Criar uma função para calcular a sua média

    Você coletar
    - Nome do aluno 
    - Nota da semanada (25%)
    - Nota do professor (25%)
    - Nota do simulado (25%)
    - Nota da avaliação dissertativa (25%)

    Após inseridos os dados você deve informar 
    o nome do aluno as notas individuais e o valor da media final
*/

function media() {
  let nome = window.prompt(
    `Vamos calcular a sua média final! \nPara começar me informe seu nome`
  );
  let semanada = window.prompt(
    `vamos comerçar ${nome}, me informe qual sua nota de semanada`
  );
  let professor = window.prompt(`me informe agora sua nota do professor`);
  let simulado = window.prompt(`${nome} me informe agora sua nota de simulado`);
  let dissertativa = window.prompt(
    `por ultimo me informe qual foi a nota da avaliação dissertativa`
  );
  media_nota =
    semanada * 0.25 + professor * 0.25 + simulado * 0.25 + dissertativa * 0.25;
  window.alert(`${nome} sua nota final foi calculada`);

  let resp = document.getElementById(`resposta_media`);
  resp.innerHTML = `<p>Olá <mark>${nome}</mark> suas notas informadas foram: <p>`;
  resp.innerHTML += `<p>Semanada = <mark>${semanada}</mark></p>`;
  resp.innerHTML += `<p>Nota do professor = <mark>${professor}</mark></p>`;
  resp.innerHTML += `<p>Simulado = <mark>${simulado}</mark></p>`;
  resp.innerHTML += `<p>Avaliação dissertativa = <mark>${dissertativa}</mark></p>`;
  resp.innerHTML += `<p class="h3"></br> Sua nota final foi ${media_nota}</p>`;
  if (media_nota >= 6) {
    resp.innerHTML += `<p class="h1"></br>Parabés ${nome} você foi aprovado</p>`;
  } else {
    resp.innerHTML += `<p class="h1"></br>Infelizmente ${nome} você foi reprovado</p>`;
    resp.innerHTML += `<p class="h1"></br>#dp</p>`;
  }
}
