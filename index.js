// Importação do Readkine Sync (módulo) do Node.js, que será utilizado para criar os scripts interativos do projeto. 
import readlineSync from "readline-sync";

// Utilizado a declaração de um array vazio para armazenar as propriedades do CSS que serão inseridas.
const propriedadesCss = [];
// Declarada uma variável vazia para armazenar as propriedades do CSS que serão inseridas.
let insert = "";

// Utilizado o laço while para executar enquanto a variável "insert" não for igual a "sair".
while (insert != "sair") {
    // O método question do Readline Sync exibe uma pergunta ao usuário e armazena a resposta na variável "insert".
    insert = readlineSync
    .question("digite uma propriedade CSS: ")
    // O método toLocaleLowerCase do Readline Sync converte a resposta inserida pelo usuário para minúscula.
    .toLocaleLowerCase();
    // O if verifica se a reposta não é vazia
    if (insert) {
        // Adiciona a resposta ao final da array "propriedadesCss"
        propriedadesCss.push(insert);
    }
}
// O método "sort" classifica as propriedades do CSS inseridas no array em ordem alfabética.
// O método "filter(prop => prop !== "sair" && Boolean(prop))" remove valores falsos, undefined, null, 0, NaN, '' ou false inseridos pelo usuário e o "sair", do array.
// O método "join("\n") junta as propiedades do CSS em uma únca string, separadas por uma quebra de linha
console.log((propriedadesCss.sort().filter(prop => prop !== "sair" && Boolean(prop)).join("\n")));
