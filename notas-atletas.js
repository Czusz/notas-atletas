function calcularMedia(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    let notasOriginais = atleta.notas; // Mantém a ordem original
    let notasOrdenadas = [...notasOriginais].sort((a, b) => a - b); // Ordena sem alterar as originais

    // Remove a menor e a maior nota
    let notasValidas = notasOrdenadas.slice(1, 4);

    // Calcula a média das três notas restantes
    let soma = notasValidas.reduce((a, b) => a + b, 0);
    let media = soma / notasValidas.length;

    // Exibe o nome do atleta, suas notas originais e a média calculada
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasOriginais.join(',')}`);
    console.log(`Média Válida: ${media}`);
    console.log(""); // Linha em branco para separar
  }
}

// Exemplo de entrada
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

// Executa a função para mostrar o resultado
calcularMedias(atletas);
