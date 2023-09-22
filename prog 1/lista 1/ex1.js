function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let nmr1;
    let nmr2;
    let resultado;
    // recuperar os dados do usuário
    nmr1 = document.getElementById("nmr1").value;
    nmr2 = document.getElementById("nmr2").value;
    // vamos calcular o resultado
    resultado = nmr1 - nmr2;

    // vamos concatenar uma constante a uma variável
    alert("O Resultado é: " + resultado.toFixed(2)) 
}