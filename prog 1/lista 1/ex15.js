function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let conta1;
    let conta2;
    let salario;
    let multa1;
    let multa2;
    let sobra;
    // recuperar os dados do usuário
    salario = parseFloat (document.getElementById("salario").value);
    conta1 = parseFloat (document.getElementById("conta1").value);
    conta2 = parseFloat (document.getElementById("conta2").value);
    // vamos calcular o restante do salário
    multa1 = conta1  + ((conta1 / 100) * 2 );
    multa2 = conta2 + ((conta2 / 100) * 2);
    sobra = (salario - multa1) - multa2;

    // vamos concatenar uma constante a uma variável
    alert("O valor que sobrará do salário é: " + sobra.toFixed(2)) 
}