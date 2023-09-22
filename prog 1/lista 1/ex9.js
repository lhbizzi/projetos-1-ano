function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let basemaior;
    let basemenor;
    let altura;
    let area;
     // recuperar os dados do usuário
    basemaior = parseFloat (document.getElementById("basemaior").value);
    basemenor = parseFloat (document.getElementById("basemenor").value);
    altura = parseFloat (document.getElementById("altura").value);
    // vamos calcular a área
    area = ((basemaior + basemenor) * altura) / 2;

    // vamos concatenar uma constante a uma variável
    alert("A área é: " + area.toFixed(2)) 
}