function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let lado;
    let area;
    // recuperar os dados do usuário
    lado = document.getElementById("lado").value;
    // vamos calcular a área
    area = lado * lado

    // vamos concatenar uma constante a uma variável
    alert("A área é: " + area.toFixed(2)) 
}