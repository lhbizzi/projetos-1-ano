function calcular(){
    let nota1
    let nota2
    let media
    nota1 = Number (document.getElementById("nota1").value);
    nota2 = Number (document.getElementById("nota2").value);

    media = (nota1+nota2) / 2
    if (media < 0){
        classificacao = "Reprovado"
    }
    else if ((media > 3) && (media < 7)){ 
        classificacao = "Exame"
    }
    else { classificacao = "Aprovado" }  

    document.getElementById("Resp").innerHTML =   classificacao + " com média:" + media

    



}