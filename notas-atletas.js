let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
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

for (let i = 0; i < atletas.length; i++) {
  let nome = atletas[i].nome;
  let notasOriginais = atletas[i].notas;
  let notasOrdenadas = [...notasOriginais].sort((a, b) => a - b); // Cópia ordenada
  let notasValidas = notasOrdenadas.slice(1, 4); // Remove a menor e a maior nota

  // Calcula a média das três notas do meio
  let soma = 0;
  notasValidas.forEach(function (nota) {
    soma += nota;
  });

  let media = soma / notasValidas.length;

  // Saída no console
  console.log(`Atleta: ${nome}`);
  console.log(`Notas Obtidas: ${notasOriginais.join(",")}`);
  console.log(`Média Válida: ${media.toFixed(6)}\n`);
}
