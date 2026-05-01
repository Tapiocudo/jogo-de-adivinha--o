// histórico do jogo
let historico = [];
let jogoAtivo = true;

// Sons
const somAcerto = document.getElementById("somAcerto");
const somErro = document.getElementById("somErro");
// quando acertar
somAcerto.play();
jogoAtivo = false;
document.getElementById("reset").style.display = "inline-block";
//quando errar
somErro.play();

// Número secreto entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Máximo de tentativas
let maxTentativas = 10;

// Contador de tentativas
let tentativas = 0;

// Atualiza tentativas na tela
document.getElementById("tentativas").textContent =
  "Tentativas restantes: " + (maxTentativas - tentativas);

function chutar() {
    historico.push(palpite);

let lista = document.getElementById("historico");
let item = document.createElement("li");
item.textContent = palpite;
lista.appendChild(item);

  let input = document.getElementById("palpite");
  let palpite = parseInt(input.value);
  let mensagem = document.getElementById("mensagem");

  // Validação
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "Digite um número válido entre 1 e 100!";
    return;
  }

  tentativas++;

  if (palpite === numeroSecreto) {
    mensagem.textContent = "🎉 Você acertou!";
    finalizarJogo();
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "📈 O número secreto é maior!";
  } else {
    mensagem.textContent = "📉 O número secreto é menor!";
  }

  // Atualiza tentativas
  document.getElementById("tentativas").textContent =
    "Tentativas restantes: " + (maxTentativas - tentativas);

  // Verifica se perdeu
  if (tentativas >= maxTentativas && palpite !== numeroSecreto) {
    mensagem.textContent =
      "💀 Você perdeu! O número era " + numeroSecreto;
    finalizarJogo();
  }

  input.value = "";
}

// Finaliza jogo
function finalizarJogo() {
    jogoAtivo = false;
document.getElementById("reset").style.display = "inline-block";
  document.getElementById("palpite").disabled = true;
}

//impedir jogar após finalizar o jogo
if (!jogoAtivo) return;

// Reiniciar jogo
function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  historico = [];
  jogoAtivo = true;

  document.getElementById("mensagem").textContent = "";
  document.getElementById("historico").innerHTML = "";
  document.getElementById("palpite").disabled = false;
  document.getElementById("reset").style.display = "none";

  atualizarTentativas();
}