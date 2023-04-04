/*EXERCÍCIO 01 // ano bissexto é aquele que é divisível por 4 mas nao
 é divisível por 100, exceto os anos que sao divisível por 400. Fonte: Google*/

export function anoBissexto(ano) {
    if (ano < 0) {
        return "INVALID";
    }
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        return "TRUE";
    } else {
        return "FALSE";
    }
}

// EXERCÍCIO 02
export function pedraPapelTesoura() {
    const possibilidade = ["PEDRA", "PAPEL", "TESOURA"];
    const escolha = possibilidade[Math.floor(Math.random() * 3)]
    return escolha
}

// EXERCÍCIO 03
/*Escreva uma função que recebe um número pertencente exclusivamente ao conjunto
 dos Naturais, e retorna uma string com "TRUE" para primo, "FALSE" para
  não primo e "INVALID" para valores de entrada <= 1.
  Exemplo: input: 13, output: "TRUE"<br/>
  Exemplo: input: 12, output: "FALSE"<br/>
  Exemplo: input: 1, output: "INVALID"<br/>*/
export function checkNumeroPrimo(numero) {
    if (numero <= 1) {
        return "INVALID";
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return "FALSE";
        }
    }
    return "TRUE";
}
/*Os Números Primos são números naturais maiores do que 1
 que possuem somente dois divisores, ou seja, são divisíveis por
  1 e por ele mesmo. fonte: Google*/

