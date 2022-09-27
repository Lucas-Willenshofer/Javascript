function add_player() {
  const position = document.getElementById(`position`).value;
  const name = document.getElementById(`name`).value;
  const number = document.getElementById(`number`).value;

  const confirmation = window.confirm(
    `Deseja escalar ${name} como ${position}?`
  );

  //console.log(position, name, number, confirmation);
  if (confirmation) {
    //Constantes
    const team_list = document.getElementById(`team`);
    const player_item = document.createElement(`li`);
    //Cria um id para o novo item criado com player e o número informado
    player_item.id = `player ${number}`;
    //Escreve na lista a posição: nome [númedo] do jogador
    player_item.innerHTML = `${position}: ${name} [${number}]`;
    //Coloca a informação acima na lista
    team_list.appendChild(player_item);

    //reseta os campos de entrada de texto
    document.getElementById(`position`).value = ``;
    document.getElementById(`name`).value = ``;
    document.getElementById(`number`).value = ``;
  }
}

function del_player() {
  const number = document.getElementById(`number_to_remove`).value;
  const player_to_remove = document.getElementById(`player ${number}`);

  //console.log(`jogador a ser removido = ${player_to_remove.innerText}`);

  const confimation = window.confirm(
    `Remover o jogador ${player_to_remove.innerText}`
  );

  if (confimation) {
    document.getElementById(`team`).removeChild(player_to_remove);
    document.getElementById(`number_to_remove`).value = ``;
  }
}
