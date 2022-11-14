

function soma() {
  let numeros = [...arguments]
    return numeros.reduce(function(acumulador, numeroAtual){
      return acumulador + numeroAtual
}, 0)
}
  function divisao(){
    return soma(...arguments) / arguments.length
}
let resultado = divisao(10, 9.5, 8, 10)
