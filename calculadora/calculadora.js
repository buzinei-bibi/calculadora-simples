let botoes = document.querySelectorAll("button");
let display = document.getElementById("display");
let conta = document.getElementById("conta");

const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operadores = ["+", "-", "*", "/", "%"];
const simbolos = { "+": "+", "-": "−", "*": "×", "/": "÷", "%": "%" };

// o número que está sendo digitado fica guardado com ponto ("12.5");
// na tela ele aparece no jeito brasileiro ("12,5")
let atual = "0";
let primeiroNumero = "";
let operador = "";
let novoNumero = false;
let erro = false;

botoes.forEach((botao) => {
  botao.addEventListener("click", () => apertar(botao.value));
});

// teclado do computador
const teclas = {
  Enter: "=", "=": "=", Escape: "c", Delete: "c", Backspace: "backspace",
  ",": ".", ".": ".", x: "*", X: "*", "*": "*", "/": "/", "+": "+", "-": "-", "%": "%",
};
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const valor = /^[0-9]$/.test(e.key) ? e.key : teclas[e.key];
  if (!valor) return;
  e.preventDefault();
  apertar(valor);
  // a tecla na tela "afunda" junto
  const botao = document.querySelector(`button[value="${CSS.escape(valor)}"]`);
  if (botao) {
    botao.classList.add("apertada");
    setTimeout(() => botao.classList.remove("apertada"), 120);
  }
});

function apertar(valor) {
  if (erro && valor !== "c") limparTudo();

  if (numeros.includes(valor)) {
    montarDisplay(valor);
  }

  if (valor === "c") {
    limparTudo();
  }

  if (valor === "backspace") {
    backspace();
  }

  if (operadores.includes(valor)) {
    escolherOperador(valor);
  }

  if (valor === "=") {
    mostrarResultado();
  }
}

function montarDisplay(valor) {
  if (novoNumero) {
    atual = "0";
    novoNumero = false;
    conta.innerHTML = operador ? `${formatar(primeiroNumero)} ${simbolos[operador]}` : "&nbsp;";
  }

  if (valor === "." && atual.includes(".")) {
    return;
  }

  // limite de dígitos para caber no visor
  if (atual.replace(/[-.]/g, "").length >= 15) {
    return;
  }

  if (atual === "0" && valor !== ".") {
    atual = valor;
  } else {
    atual += valor;
  }

  marcarOperador("");
  mostrar(atual);
}

function escolherOperador(valor) {
  if (operador !== "" && !novoNumero) {
    mostrarResultado();
    if (erro) return;
  }

  primeiroNumero = Number(atual);
  operador = valor;
  novoNumero = true;

  conta.textContent = `${formatar(primeiroNumero)} ${simbolos[operador]}`;
  marcarOperador(valor);
}

function mostrarResultado() {
  if (operador === "") return;

  const segundoNumero = Number(atual);
  const resultado = calcular(primeiroNumero, segundoNumero, operador);

  conta.textContent = `${formatar(primeiroNumero)} ${simbolos[operador]} ${formatar(segundoNumero)} =`;
  marcarOperador("");

  if (typeof resultado === "string") {
    mostrarErro(resultado);
    return;
  }

  atual = String(resultado);
  primeiroNumero = resultado;
  operador = "";
  novoNumero = true;
  mostrar(atual, true);
}

function calcular(n1, n2, op) {
  let resultado;

  switch (op) {
    case "+":
      resultado = n1 + n2;
      break;

    case "-":
      resultado = n1 - n2;
      break;

    case "*":
      resultado = n1 * n2;
      break;

    case "/":
      if (n2 === 0) {
        return "não dá para dividir por zero";
      }
      resultado = n1 / n2;
      break;

    case "%":
      if (n2 === 0) {
        return "não dá para dividir por zero";
      }
      resultado = n1 % n2;
      break;
  }

  // corrige a "sujeira" das casas decimais (0.1 + 0.2 = 0.30000000000000004)
  return Number(resultado.toPrecision(12));
}

function limparTudo() {
  atual = "0";
  primeiroNumero = "";
  operador = "";
  novoNumero = false;
  erro = false;
  conta.innerHTML = "&nbsp;";
  marcarOperador("");
  mostrar(atual);
}

function backspace() {
  if (novoNumero) return;

  if (atual.length > 1 && atual !== "-0") {
    atual = atual.slice(0, -1);
    if (atual === "-") atual = "0";
  } else {
    atual = "0";
  }

  mostrar(atual);
}

// ---------- tela ----------

// "1234.5" → "1.234,5" (mantém a vírgula e os zeros que a pessoa já digitou)
function formatar(numero) {
  const texto = String(numero);
  if (texto.includes("e")) return Number(numero).toLocaleString("pt-BR", { maximumSignificantDigits: 10 });
  const [inteiro, decimal] = texto.split(".");
  const inteiroBr = Number(inteiro).toLocaleString("pt-BR");
  const sinal = inteiro.startsWith("-") && inteiroBr === "0" ? "-" : "";
  return decimal === undefined ? sinal + inteiroBr : `${sinal}${inteiroBr},${decimal}`;
}

function mostrar(texto, ehResultado = false) {
  const formatado = formatar(texto);
  display.textContent = formatado;
  display.classList.toggle("longo", formatado.length > 11);
  display.classList.remove("erro", "resultado");
  if (ehResultado) {
    // reinicia a animação do resultado
    void display.offsetWidth;
    display.classList.add("resultado");
  }
}

function mostrarErro(mensagem) {
  erro = true;
  operador = "";
  display.textContent = mensagem;
  display.classList.remove("longo", "resultado");
  display.classList.add("erro");
}

// deixa acesa a tecla da operação escolhida
function marcarOperador(valor) {
  document.querySelectorAll(".tecla-op").forEach((botao) => {
    botao.classList.toggle("ativa", botao.value === valor);
  });
}
