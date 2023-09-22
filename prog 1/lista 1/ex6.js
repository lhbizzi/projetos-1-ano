function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let salario;
    let comissao;
    let venda;
    let total;
    // recuperar os dados do usuário
    salario =  parseFloat (document . getElementById("salario").value); //parseFloat converte de string (texto) para Float(número com vírgula)
    venda =  parseFloat (document . getElementById("venda").value);
    // vamos calcular o salario total 
    comissao = (venda / 100) * 4;
    total = salario + comissao; 
    // vamos concatenar uma constante a uma variável
    alert("O valor de comissão é: " + comissao + "\nO salário total é: " + total);
}