function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let pesokg;
    let pesog;
    // recuperar os dados do usuário
    pesokg = document.getElementById("pesokg").value;
    // vamos calcular o peso em gramas
    pesog = pesokg * 1000;

    // vamos concatenar uma constante a uma variável
    alert("O peso em gramas é: " + pesog.toFixed(2)) 
}