function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let preço;
    let desconto;
    // recuperar os dados do usuário
    preço = document.getElementById("preço").value;    
    // vamos calcular o preço com desconto
    desconto = (preço / 100) * 90

    // vamos concatenar uma constante a uma variável
    alert("O preço com 10% de desconto é: " + desconto.toFixed(2)) 
}