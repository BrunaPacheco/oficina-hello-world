console.log('Entrei')

var titulo = document.querySelector("h1")
console.log(titulo)

var subtitulo = document.querySelector("h2")
console.log(subtitulo)

var buton = document.querySelector("#botao")
console.log(buton)

var meuInput = document.querySelector("input")
console.log(meuInput)

function clicar(){
  event.preventDefault()
  subtitulo.innerHTML = meuInput.value 
}