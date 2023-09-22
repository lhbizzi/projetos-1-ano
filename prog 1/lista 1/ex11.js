function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let diagmenor;
    let diagmaior;
    let area;
    // recuperar os dados do usuário
    diagmenor = document.getElementById("diagmenor").value;
    diagmaior = document.getElementById("diagmaior").value;
    // vamos calcular o imc
    area = (diagmaior * diagmenor) / 2;
    // vamos concatenar uma constante a uma variável
    alert("A área do losango é: " + area.toFixed(2)) 
}