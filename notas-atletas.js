function calcularMedias(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    let notas = atleta.notas.slice(); // copia das notas para não alterar original
    notas.sort((a, b) => a - b); // ordena do menor para maior

    // Remove a menor e a maior nota
    let notasValidas = notas.slice(1, 4);

    // Calcula a média das 3 notas do meio
    let soma = 0;
    notasValidas.forEach(nota => {
      soma += nota;
    });
    let media = soma / notasValidas.length;

    // Formata a saída conforme o exemplo
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
    console.log(`Média Válida: ${media}`);
    console.log(""); // linha em branco para separar
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
