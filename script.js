var jogadoresTime1 = [];

function adicionarJogadorTime1() {
  var nome2 = document.getElementById("nome").value;

  var jogadorExistente = jogadoresTime1.find(function(jogador) {
    return jogador.nome2 === nome2;
  });

  if (jogadorExistente) {
    alert("Esse nome já está sendo usado. Por favor, escolha outro nome.");
    return;
  }
  
  if (nome2 === "") {
    alert("Por favor, digite um nome antes de adicionar um jogador.");
    return;
  }
  var jogador = {
    nome: nome2,
    abates: 0,
    mortes: 0,
    assistencias: 0,
    ouro: 0
  };
  jogadoresTime1.push(jogador);
  exibirNaTelaTime1();
  document.getElementById("nome").value = "";
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
      <td><button onClick="adicionarAbateTime1(${i})">Kill</button></td>
      <td><button onClick="adicionarMorteTime1(${i})">Death</button></td>
      <td><button onClick="adicionarAssisTime1(${i})">Assistence</button></td>
      <td><button onClick="zerarInformacoesTime1(${i})">Clean</button></td>
      <td><button onClick="excluirJogadorTime1(${i})">Delete</button></td>
    `;
  }
}

function adicionarAbateTime1(index) {
  jogadoresTime1[index].abates++;
  jogadoresTime1[index].ouro = jogadoresTime1[index].ouro + 100;
  exibirNaTelaTime1();
}

function adicionarMorteTime1(index) {
  jogadoresTime1[index].mortes++;
  exibirNaTelaTime1();
}

function adicionarAssisTime1(index) {
  jogadoresTime1[index].assistencias++;
  jogadoresTime1[index].ouro = jogadoresTime1[index].ouro + 50;
  exibirNaTelaTime1();
}

function excluirJogadorTime1(index) {
    if (nome2 == "") {
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

var jogadoresTime2 = [];

function adicionarJogadorTime2() {
  var nome2 = document.getElementById("nome2").value;

  var jogadorExistente = jogadoresTime2.find(function(jogador) {
    return jogador.nome2 === nome2;
  });

  if (jogadorExistente) {
    alert("Esse nome já está sendo usado. Por favor, escolha outro nome.");
    return;
  }
  
  if (nome2 === "") {
    alert("Por favor, digite um nome antes de adicionar um jogador.");
    return;
  }
  var jogador = {
    nome2: nome2,
    abates: 0,
    mortes: 0,
    assistencias: 0,
    ouro: 0
  };
  jogadoresTime2.push(jogador);
  exibirNaTelaTime2();
  document.getElementById("nome2").value = "";
}
function exibirNaTelaTime2() {
  var tabelaJogadoresTime2 = document.getElementById("tabelaJogadores2");
  tabelaJogadoresTime2.innerHTML = "";
  for (var i = 0; i < jogadoresTime2.length; i++) {
    var jogador = jogadoresTime2[i];
    var linha = tabelaJogadoresTime2.insertRow();
    linha.innerHTML = `
      <td>${jogador.nome2}</td>
      <td>${jogador.abates}</td>
      <td>${jogador.mortes}</td>
      <td>${jogador.assistencias}</td>
      <td>${jogador.ouro}</td>
      <td><button onClick="adicionarAbateTime2(${i})">Kill</button></td>
      <td><button onClick="adicionarMorteTime2(${i})">Death</button></td>
      <td><button onClick="adicionarAssisTime2(${i})">Assistence</button></td>
      <td><button onClick="zerarInformacoesTime2(${i})">Clean</button></td>
      <td><button onClick="excluirJogadorTime2(${i})">Delete</button></td>
    `;
  }
}

function adicionarAbateTime2(index) {
  jogadoresTime2[index].abates++;
  jogadoresTime2[index].ouro = jogadoresTime2[index].ouro + 100;
  exibirNaTelaTime2();
}

function adicionarMorteTime2(index) {
  jogadoresTime2[index].mortes++;
  exibirNaTelaTime2();
}

function adicionarAssisTime2(index) {
  jogadoresTime2[index].assistencias++;
  jogadoresTime2[index].ouro = jogadoresTime2[index].ouro + 50;
  exibirNaTelaTime2();
}

function excluirJogadorTime2(index) {
    if (nome == "") {
        alert("Você não pode excluir o que não existe! ");
        return;
      }
    jogadoresTime2.splice(index, 2);
    exibirNaTelaTime2();
  }

function zerarInformacoesTime2(index) {
  var jogador = jogadoresTime2[index];
  jogador.abates = 0;
  jogador.mortes = 0;
  jogador.assistencias = 0;
  jogador.ouro = 0;
  exibirNaTelaTime2();
}


function verificarVencedor() {
  var totalOuroTime1 = 0;
  var totalOuroTime2 = 0;
  
  // Calcula a quantidade total de ouro do time 1
  for (var i = 0; i < jogadoresTime1.length; i++) {
    totalOuroTime1 += jogadoresTime1[i].ouro;
  }
  
  // Calcula a quantidade total de ouro do time 2
  for (var j = 0; j < jogadoresTime2.length; j++) {
    totalOuroTime2 += jogadoresTime2[j].ouro;
  }
  
  // Compara as somas para determinar o vencedor
  if (totalOuroTime1 > totalOuroTime2) {
    alert("Time da esquerda é o vencedor!");
  } else if (totalOuroTime1 < totalOuroTime2) {
    alert("Time da direita é o vencedor!");
  } else {
    alert("Empate!");
  }
}