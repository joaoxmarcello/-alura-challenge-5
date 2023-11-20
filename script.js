var jogadoresTime1 = [];

function adicionarJogadorTime1() {
  var nome = document.getElementById("nome").value;
  if (nome === "") {
    alert("Por favor, digite um nome antes de adicionar um jogador.");
    return;
  }
  var jogador = {
    nome: nome,
    abates: 0,
    mortes: 0,
    assistencias: 0,
    ouro: 0
  };
  jogadoresTime1.push(jogador);
  exibirNaTelaTime1();
}
function exibirNaTelaTime1() {
  var tabelaJogadoresTime1 = document.getElementById("tabelaJogadores1");
  tabelaJogadoresTime1.innerHTML = "";
  for (var i = 0; i < jogadoresTime1.length; i++) {
    var jogador = jogadoresTime1[i];
    var linha = tabelaJogadoresTime1.insertRow();
    linha.innerHTML = `
      <td>${jogador.nome}</td>
      <td>${jogador.abates}</td>
      <td>${jogador.mortes}</td>
      <td>${jogador.assistencias}</td>
      <td>${jogador.ouro}</td>
      <td><button onClick="adicionarVitoriaTime1(${i})">Abates</button></td>
      <td><button onClick="adicionarEmpateTime1(${i})">Mortes</button></td>
      <td><button onClick="adicionarDerrotaTime1(${i})">Assistencias</button></td>
      <td><button onClick="zerarInformacoesTime1(${i})">Zerar</button></td>
      <td><button onClick="excluirJogadorTime1(${i})">Excluir</button></td>
    `;
  }
}

function adicionarVitoriaTime1(index) {
  jogadoresTime1[index].abates++;
  jogadoresTime1[index].ouro = jogadoresTime1[index].ouro + 100;
  exibirNaTelaTime1();
}

function adicionarEmpateTime1(index) {
  jogadoresTime1[index].mortes++;
  exibirNaTelaTime1();
}

function adicionarDerrotaTime1(index) {
  jogadoresTime1[index].assistencias++;
  exibirNaTelaTime1();
}

function excluirJogadorTime1(index) {
    if (nome != "") {
        alert("Você não pode excluir o que não existe! ");
        return;
      }
    jogadoresTime1.splice(index, 1);
    exibirNaTelaTime1();
  }

function zerarInformacoesTime1(index) {
  var jogador = jogadoresTime1[index];
  jogador.abates = 0;
  jogador.mortes = 0;
  jogador.assistencias = 0;
  jogador.ouro = 0;
  exibirNaTelaTime1();
}
