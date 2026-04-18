// ===== SLIDESHOW =====
var imagens = [
    "images/es.jpg",
    "images/e7.jpg",
    "images/pessoas.jpg",
    "images/bm.jpg"
];

var indice = 0;

function mostrarImagem() {
  var slide = document.getElementById("slideshow");
  if (slide) {
    slide.src = imagens[indice];
  }
}

function seguinte() {
  indice = indice + 1;
  if (indice >= imagens.length) indice = 0;
  mostrarImagem();
}

function anterior() {
  indice = indice - 1;
  if (indice < 0) indice = imagens.length - 1;
  mostrarImagem();
}

// Só arranca o slideshow se o elemento existir na página
if (document.getElementById("slideshow")) {
  setInterval(seguinte, 3000);
  mostrarImagem();
}


// ===== CONTADOR DECRESCENTE =====
function atualizarContador() {
  const dataEvento = new Date("2026-06-13T18:00:00");
  const dataAtual = new Date();
  const dif = Math.floor((dataEvento - dataAtual) / 1000);

  const dias = Math.floor(dif / (60 * 60 * 24));
  const horas = Math.floor((dif % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((dif % (60 * 60)) / 60);
  const segundos = dif % 60;

  document.getElementById("contador").textContent =
    "Faltam " + dias + " dias, " + horas + "h " + minutos + "m " + segundos + "s";
}

// Só arranca o contador se o elemento existir na página
if (document.getElementById("contador")) {
  setInterval(atualizarContador, 1000);
  atualizarContador();
}


// ===== VERIFICAÇÃO DE PALAVRAS OBSCENAS =====
var palavras = ["parvo", "idiota", "estupido", "tolo", "burro"];

function verificar() {
  var comentario = document.getElementById("comentario").value.toLowerCase();
  var btnSubmeter = document.getElementById("btnSubmeter");
  var aviso = document.getElementById("aviso");

  var encontrou = false;
  for (var i = 0; i < palavras.length; i++) {
    if (comentario.includes(palavras[i])) {
      encontrou = true;
      break;
    }
  }

  if (encontrou) {
    aviso.textContent = "Por favor, modere a sua linguagem!";
    btnSubmeter.disabled = true;
  } else {
    aviso.textContent = "";
    btnSubmeter.disabled = false;
  }
}