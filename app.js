const readline = require("readline-sync");

const numberOne = readline.questionFloat("Informe o primeiro número: ");
const numberTwo = readline.questionFloat("Informe o segundo número:");

try {
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        throw new Error("Por favor, insira números válidos.");
    }

    const resultado = numberOne / numberTwo;

    if (!isFinite(resultado)) {
        throw new Error("A divisão resultou em um valor não válido.");
    }

    console.log(`Resultado da divisão: ${resultado}`);
} catch (error) {
    console.error(`Erro: ${error.message}`);
} finally {
    console.log("Operação concluída.");
}