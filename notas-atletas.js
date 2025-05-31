let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

atletas.forEach(atleta => {
  // Ordenar as notas
  let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);
  // Pegar as notas do meio (remover menor e maior)
  let notasValidas = notasOrdenadas.slice(1, 4);
  // Calcular a média
  let soma = notasValidas.reduce((acc, nota) => acc + nota, 0);
  let media = soma / notasValidas.length;
  
  console.log(`Atleta: ${atleta.nome}`);
  console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
  console.log(`Média Válida: ${media}\n`);
});
