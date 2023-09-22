function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let atual;
    let nascimento;
    let anos;
    let meses;
    let dias;
    let semanas;
    // recuperar os dados do usuário
    atual = document.getElementById("atual").value;
    nascimento = document.getElementById("nascimento").value;
    // vamos calcular a idade da pessoa
    anos = atual - nascimento
    meses = anos * 12
    dias = anos * 365 
    semanas = anos * 52

    // vamos concatenar uma constante a uma variável
    alert("A idade em anos: " + anos
     + "\n A idade em meses é: " + meses
     + "\n A idade em semanas é: " + semanas
     + "\n A idade em dias é: " + dias); 
}