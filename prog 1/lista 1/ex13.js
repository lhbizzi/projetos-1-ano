function calcular(){
    // define as variáveis sem tipo de dados
    // let é a palavra-chave para criar variável
    let nmr;
    let A0;
    let B1;
    let C2;
    let D3;
    let E4;
    let F5;
    let G6;
    let H7;
    let I8;
    let J9;
    let K10;
    // recuperar os dados do usuário
    nmr = document.getElementById("nmr").value;
    // vamos calcular as tabuadas
    A0 = nmr * 0;
    B1 = nmr * 1;
    C2 = nmr * 2;
    D3 = nmr * 3;
    E4 = nmr * 4;
    F5 = nmr * 5;
    G6 = nmr * 6;
    H7 = nmr * 7;
    I8 = nmr * 8;
    J9 = nmr * 9;
    K10 = nmr * 10;


    // vamos concatenar uma constante a uma variável
    alert("A tabuada do número " + nmr + " é: \n" + "\n 0 X " + nmr + " = " + A0 
    + "\n 1 X " + nmr + " = " + B1 
    + "\n 2 X " + nmr + " = " + C2 
    + "\n 3 X " + nmr + " = " + D3 
    + "\n 4 X " + nmr + " = " + E4
    + "\n 5 X " + nmr + " = " + F5
    + "\n 6 X " + nmr + " = " + G6
    + "\n 7 X " + nmr + " = " + H7
    + "\n 8 X " + nmr + " = " + I8
    + "\n 9 X " + nmr + " = " + J9
    + "\n 10 X " + nmr + " = " + K10);
}