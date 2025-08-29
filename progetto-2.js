const nome = document.getElementById("nome");
const nome_errore = document.getElementById("nome-errore");
const cognome_errore = document.getElementById("cognome-errore");
const email_errore = document.getElementById("email-errore");
const età_errore = document.getElementById("età-errore");
const messaggio = document.getElementById("messaggio");
const genere_errore = document.getElementById("genere-errore");
const controlloNome = document.getElementById("nome_valido");
const numero = document.getElementById("numero");
const numero_errore = document.getElementById("numero-errore");
const controlloNumero = document.getElementById("numero_valido");
const controlloCognome = document.getElementById("cognome_valido");
const controlloEmail = document.getElementById("email_valida");
const controlloEtà = document.getElementById("età_valida");
const cognome = document.getElementById("cognome");
const email = document.getElementById("email");
const età = document.getElementById("età");
const aggiunti = document.getElementById("aggiungi");
const svuota = document.getElementById("svuota");
const lista = document.getElementById("lista-utenti");
const maschio = document.getElementById("maschio");
const femmina = document.getElementById("femmina");
const caratteri = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
const emailValidità = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexNumero = /^\d{10}$/;
let genere = "";
function verificaNome() {
  if (nome.value.length >= 3 && caratteri.test(nome.value)) {
    nome_errore.style.display = "none";
    return true;
  } else {
    nome_errore.textContent = "nome utente non valido";
    nome_errore.style.display = "block";

    return false;
  }
}
nome.addEventListener("input", function () {
  if (nome.value.length >= 5 && caratteri.test(nome.value)) {
    controlloNome.style.display = "block";
    nome_errore.style.display = "none";
  } else {
    controlloNome.style.display = "none";
    nome_errore.style.display = "block";
    nome_errore.textContent = "inserisci nome coretto";
  }
});
nome.addEventListener("focus", function () {
  messaggio.style.display = "none";
});
numero.addEventListener("input", function () {
  if (regexNumero.test(numero.value)) {
    controlloNumero.style.display = "block";
    numero_errore.style.display = "none";
  } else {
    controlloNumero.style.display = "none";
    numero_errore.style.display = "block";
    numero_errore.textContent = "inserire numero coretto";
  }
});
numero.addEventListener("focus", function () {
  messaggio.style.display = "none";
});
function Verificanumero() {
  if (regexNumero.test(numero.value)) {
    return true;
  } else if (numero.value.length === "" || numero.value.length < 10) {
    numero_errore.style.display = "block";
    numero_errore.textContent = "inserire numero coretto";
    return false;
  }
}
function verificaCognome() {
  if (cognome.value.length >= 5 && caratteri.test(cognome.value)) {
    controlloCognome.style.display = "none";
    return true;
  } else {
    cognome_errore.style.display = "block";
    cognome_errore.textContent = "cognome non valido";
    return false;
  }
}
cognome.addEventListener("input", function () {
  if (cognome.value.length >= 5 && caratteri.test(cognome.value)) {
    controlloCognome.style.display = "block";
    cognome_errore.style.display = "none";
  } else {
    controlloCognome.style.display = "none";
    cognome_errore.style.display = "block";
    cognome_errore.textContent = "inserisci cognome coretto";
  }
});
cognome.addEventListener("focus", function () {
  messaggio.style.display = "none";
});

function verificaEmail() {
  if (email.value.length >= 5 && emailValidità.test(email.value)) {
    controlloEmail.style.display = "none";
    return true;
  } else {
    email_errore.textContent = "email non valida";
    email_errore.style.display = "block";
    return false;
  }
}
email.addEventListener("input", function () {
  if (email.value.length >= 5 && emailValidità.test(email.value)) {
    controlloEmail.style.display = "block";
    email_errore.style.display = "none";
  } else {
    controlloEmail.style.display = "none";
    email_errore.style.display = "block";
    email_errore.textContent = "inserisci email coretta";
  }
});
email.addEventListener("focus", function () {
  messaggio.style.display = "none";
});
function verificaEtà() {
  if (Number(età.value) >= 18) {
    controlloEtà.style.display = "none";
    return true;
  } else {
    età_errore.textContent = "inserisci età giusta";
    età_errore.style.display = "block";
    return false;
  }
}
età.addEventListener("input", function () {
  if (Number(età.value) >= 18) {
    controlloEtà.style.display = "block";
    età_errore.style.display = "none";
  } else {
    controlloEtà.style.display = "none";
    età_errore.style.display = "block";
    età_errore.textContent = "inserisci età coretto";
  }
});
età.addEventListener("focus", function () {
  messaggio.style.display = "none";
});

function genereValido() {
  if (maschio.checked || femmina.checked) {
    genere_errore.style.display = "none";
    return true;
  } else {
    genere_errore.textContent = "seleziona genere";
    genere_errore.style.display = "block";
    return false;
  }
}

// aggiungiamo utenti
aggiunti.addEventListener("click", function (event) {
  controlloNome.style.display = "none";
  controlloCognome.style.display = "none";
  controlloEmail.style.display = "none";
  controlloEtà.style.display = "none";
  controlloNumero.style.display = "none";

  if (maschio.checked) {
    genere = "maschio";
  } else if (femmina.checked) {
    genere = "femmina";
  }
  let valido = verificaNome();
  if (valido == false) {
    return;
  }
  valido = verificaCognome();
  if (valido === false) {
    return;
  }
  valido = verificaEmail();
  if (valido === false) {
    return;
  }
  valido = Verificanumero();
  if (valido === false) {
    return;
  }
  valido = verificaEtà();
  if (valido === false) {
    return;
  }
  valido = genereValido();
  if (valido === false) {
    return;
  }
  if (valido === true) {
    messaggio.style.display = "block";
    aggiunti.after(messaggio);
    nome.value = "";
    cognome.value = "";
    età.value = "";
    numero.value = "";
    email.value = "";
    maschio.checked = false;
    femmina.checked = false;
  }
});
