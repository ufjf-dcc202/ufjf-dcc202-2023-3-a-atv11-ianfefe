import { getLista, limpaLista ,adicionaNaLista} from "./lista.js"

const pEntrada = document.querySelector('#entrada')
const olSaida = document.querySelector('#itens')
const btnAdicionar = document.querySelector('#adicionar')
const btnLimpar = document.querySelector('#limpar')

btnLimpar.addEventListener('click',limparElementosDaLista)
btnAdicionar.addEventListener('click',addElementosDaLista)