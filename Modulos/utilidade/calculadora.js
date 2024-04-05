function somar(a,b) {
    return a + b;
}

function subtrair(a,b) {
    return a - b;
}

const PI = 3.14;

// Tornar essas funções visíveis para outros arquivos
module.exports = {
    somar, 
    subtrair
}