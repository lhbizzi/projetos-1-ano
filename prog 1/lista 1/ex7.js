function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let peso;
    let engordar;
    let emagrecer;
    // recuperar os dados do usuário
    peso = parseFloat (document.getElementById("peso").value);
    // vamos calcular o peso
    emagrecer = (peso / 100) * 80;
    engordar = peso + ((peso / 100) * 15);

    // vamos concatenar uma constante a uma variável
    alert("O peso se a pessoa engordar é: " + engordar + " \nO peso se a pessoa emagrecer é: " + emagrecer);
}