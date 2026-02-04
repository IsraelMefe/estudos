let numeroSecreto = Math.round(Math.random() * 100);
let tentativas = 0;

const form = document.querySelector("#form");
const inputNumero = document.querySelector("#inputNumero");
const mensagem = document.querySelector("#mensagem");
const campoTentativas = document.querySelector("#tentativas");
const btnNovoJogo = document.querySelector("#novoJogo");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const chute = Number(inputNumero.value);
    tentativas++;

    if (chute > numeroSecreto) {
        mensagem.textContent = "O número é menor!";
    } else if (chute < numeroSecreto) {
        mensagem.textContent = "O número é maior!";
    } else {
        mensagem.textContent = "Parabéns! Você acertou!";
        campoTentativas.textContent = `Tentativas: ${tentativas}`;
        btnNovoJogo.style.display = "block";
    }

    inputNumero.value = "";
    inputNumero.focus();
});

btnNovoJogo.addEventListener("click", () => {
    numeroSecreto = Math.round(Math.random() * 100);
    tentativas = 0;

    mensagem.textContent = "";
    campoTentativas.textContent = "";
    btnNovoJogo.style.display = "none";
});
