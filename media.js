(function(){
  const alunos = [
    {nome: 'Carlos', notas: [10, 9.5, 10, 9.5]},
    {nome: 'Thamyris', notas: [10, 10, 10, 10]},
    {nome: 'Magnum', notas: [9.5, 9.5, 9.5, 9.5]},
    {nome: 'Camila', notas: [10, 9.5, 10, 9.5]},
    {nome: 'Adilma', notas: [3.0, 7.0, 8.0, 9.0]},
    {nome: 'Eduarda', notas: [7.0, 8.0, 7.0, 8.5]},
    {nome: 'Joao', notas: [6.0, 7.0, 5.0, 7.0]},
  ];

    alunos.forEach(aluno => {
      aluno.media = divisao(...aluno.notas)
      //aluno.media = divisao(aluno.notas[0], aluno.notas[1], aluno.notas[2], aluno.notas[3],) -> a parte de cima é um resumo disso
    })

      const levarParaHtml = alunos.map(aluno => 
        `<tr class="${aluno.media < 7 ? 'reproved' : 'aproved'}" >
      <td>${aluno.nome}</td>
      <td>${aluno.notas[0]}</td> 
      <td>${aluno.notas[1]}</td> 
      <td>${aluno.notas[2]}</td> 
      <td>${aluno.notas[3]}</td>
      <td>${aluno.media}</td> 
    </tr>
      `).join('')

      document.querySelector('tbody').innerHTML = levarParaHtml
    })()

      // Simplificar o de cima
        //  const levarParaHtml = alunos.map(aluno => 
      //   `<tr>
      //   <td>${aluno.nome}</td>
      //   ${aluno.nome.map(n => ${`<td>${n}</td>).join('')} 
      // </tr>
      //   `).join('')
      
function soma() {
  let numeros = [...arguments]
    return numeros.reduce(function(acumulador, numeroAtual){
      return acumulador + numeroAtual
}, 0)
}
  function divisao(){
    return soma(...arguments) / arguments.length
}
let resultado = divisao()


