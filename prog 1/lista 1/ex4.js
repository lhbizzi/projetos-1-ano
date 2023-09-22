function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let nota1;
    let nota2;
    let media;
    // recuperar os dados do usuário
    nota1 = document.getElementById("nota1").value;
    nota2 = document.getElementById("nota2").value;
    // vamos calcular a media
    media = ((nota1 * 2) + (nota2 * 3)) / 5;

    // vamos concatenar uma constante a uma variável
    alert("A media é:" + media.toFixed(2)) 
}