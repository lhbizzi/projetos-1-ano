function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let mínimo;
    let funcionário;
    let total;
    // recuperar os dados do usuário
    mínimo = document.getElementById("mínimo").value;
    funcionário = document.getElementById("funcionário").value;
    // vamos calcular a quantidade de salários mínimos
    total = funcionário / mínimo;

    // vamos concatenar uma constante a uma variável
    alert("A quantidade equivalente a salários mínimos é: " + total.toFixed(2)) 
}