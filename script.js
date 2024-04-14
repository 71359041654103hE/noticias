const botaodeAbrir = document.querySelector("header > button")
const botaoFechar = document.querySelector("haeder nav button")

const body =  document.querySelector("body")
const nav = document.querySelector("haeder .mobile")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abrirMenu(){
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}