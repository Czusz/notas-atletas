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

function calcularMedia(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    const atleta = atletas[i];

    // Cópia das notas originais para exibir
    const notasOriginais = atleta.notas.slice();

    // Cópia para ordenar e calcular média
    const notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);

    // Remove a menor e a maior nota
    const notasValidas = notasOrdenadas.slice(1, 4);

    // Soma das notas válidas
    const soma = notasValidas.reduce((acc, val) => acc + val, 0);

    // Cálculo da média
    const media = soma / notasValidas.length;

    // Exibe o resultado no console
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasOriginais.join(',')}`);
    console.log(`Média Válida: ${media}`);
    console.log(''); // linha em branco para separar atletas
  }
}

// Chama a função para rodar o cálculo
calcularMedia(atletas);
