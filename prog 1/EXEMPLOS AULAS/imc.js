function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let peso;
    let altura;
    let imc;
    // recuperar os dados do usuário
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    // vamos calcular o imc
    imc = peso / (altura * altura);

    // vamos concatenar uma constante a uma variável
    document.getElementById("resp").innerHTML = imc
}